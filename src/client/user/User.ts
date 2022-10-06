import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  getDoc,
  getFirestore,
  limit,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import {
  doc,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAt,
  where,
} from "firebase/firestore";
import {
  InfoModel,
  NoteModel,
  PaginatedUserModels,
  UserImageModel,
} from "../../_metronic/helpers";
import { FirestoreManager } from "../system/FirestoreManager";

import { SessionHandler, SessionKeys } from "../system/SessionHandler";
import { Utils } from "../system/Utils";
import { Count, CountTypes } from "./Count";
import { ProfileModel } from "./Profile";

export class UserModel extends InfoModel {
  uuid: string = "";
  token: string = "";
  email: string = "";
  publicPhotos: UserImageModel[] = [];
  privatePhotos: UserImageModel[] = [];
  userType: "user" | "chatter" | "admin" | "profile_creator" = "user";
  profile: ProfileModel = null as any;
  siteOfOrigin: string = "";
  likedProfiles: string[];
  profilesLikedYou: string[];
  lastLoggedIn: any = "";
  createdProfiles: string[];
  credits: number = 0;
  geolocation: Map<string, string> = null as any;
  ageOfChattedProfiles: number[] = [];
  raceOfChattedProfiles: string[] = [];
  isPaidUser: boolean = false;
  isTestAccount: boolean = false;
  isAutoGenerated: boolean = false;
  isDeleted: boolean = false;

  constructor(params: any) {
    super(params);
    this.uuid = params.uuid;
    this.token = params.token;
    this.email = params.email;
    this.publicPhotos = params.publicPhotos;
    this.privatePhotos = params.privatePhotos;
    this.profile = params.profile;
    this.userType = params.userType;
    this.siteOfOrigin = params.siteOfOrigin;
    this.likedProfiles = params.likedProfiles;
    this.profilesLikedYou = params.profilesLikedYou;
    this.lastLoggedIn = params.lastLoggedIn;
    this.createdProfiles = params.createdProfiles;
    this.credits = params.credits;
    this.geolocation = params.geolocation;
    this.ageOfChattedProfiles = params.ageOfChattedProfiles;
    this.raceOfChattedProfiles = params.raceOfChattedProfiles;
    this.isPaidUser = params.isPaidUser;
    this.isTestAccount = params.isTestAccount;
    this.isAutoGenerated = params.isAutoGenerated;
    this.isDeleted = params.isDeleted;
  }
}
export class UserTypes {
  public static get TYPE_USER(): string {
    return "user";
  }
  public static get TYPE_CHATTER(): string {
    return "chatter";
  }
  public static get TYPE_ADMIN(): string {
    return "admin";
  }
  public static get TYPE_PROFILE_CREATOR(): string {
    return "profile_creator";
  }
  public static get TYPE_MODERATOR(): string {
    return "moderator";
  }
}

export class UserTag {
  public static get NEW_MESSAGE(): string {
    return "New Message";
  }
  public static get LIKED_PROFILE(): string {
    return "Liked Profile";
  }
  public static get LOGGED_IN(): string {
    return "Logged In";
  }
  public static get LOGGED_OUT(): string {
    return "Logged Out";
  }
  public static get NEW_USER(): string {
    return "New User";
  }
  public static get CLICKED_GET_CREDITS(): string {
    return "Clicked Get Credits";
  }
}

export class User {
  //private static auth = null;//getAuth();
  private static userModel: UserModel = null as any;
  private static isLoggedIn = false;

  private static userCache = new Map<string, UserModel>();

  public static Initialize(): Auth {
    const auth = getAuth();
    let sessionModel: UserModel = SessionHandler.GetItem<UserModel>(
      SessionKeys.SESSION_USER_MODEL,
      null as any
    );
    //auth.signOut();
    if (sessionModel) {
      if (
        sessionModel.userType === UserTypes.TYPE_CHATTER ||
        sessionModel.userType === UserTypes.TYPE_ADMIN
      ) {
        let sessionProfile = SessionHandler.GetItem(
          SessionKeys.SESSION_PROFILE_MODEL,
          null as any
        );
        sessionModel.profile = sessionProfile;
      }
      this.userModel = sessionModel;
      this.isLoggedIn = true;
    } else {
      const user = auth.currentUser;

      if (user) {
        //this.uuid = user.uid;
        this.userModel = new UserModel({
          uuid: user.uid,
          //token : user.accessToken,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        });
        this.isLoggedIn = true;
        this.RegisterUser(this.userModel.uuid, {
          displayName: this.userModel.displayName,
          photoURL: this.userModel.photoURL,
          email: this.userModel.email,
        }).then((storedModel) => {
          if (storedModel) {
            if (
              storedModel.userType === UserTypes.TYPE_CHATTER ||
              storedModel.userType === UserTypes.TYPE_ADMIN
            ) {
              let sessionProfile = SessionHandler.GetItem(
                SessionKeys.SESSION_PROFILE_MODEL,
                null as any
              );
              storedModel.profile = sessionProfile;
            }
            this.userModel = storedModel;
          }
        });
      } else {
        this.SignOut();
      }
    }

    return auth;
  }

  static get Model(): UserModel {
    return this.userModel;
  }

  public static SetChatterProfile(profileModel: ProfileModel) {
    this.userModel.profile = profileModel;
    SessionHandler.SetItem(
      SessionKeys.SESSION_PROFILE_MODEL,
      this.userModel.profile
    );
  }

  public static get IsLoggedIn(): boolean {
    return (
      this.isLoggedIn && this.userModel != null && this.userModel.uuid !== ""
    );
  }

  public static async SignIn(
    loginByEmail: boolean,
    onSuccess: () => void | null,
    onFail: () => void | null,
    email: string = "",
    password: string = ""
  ): Promise<void> {
    const auth = getAuth();
    if (loginByEmail) {
      await this.SignInWithEmailAndPassword(
        auth,
        email,
        password,
        onSuccess,
        onFail
      );
    } else {
      await this.SignInWithGoogle(auth, onSuccess, onFail);
    }
  }

  private static async SignInWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string,
    onSuccess: () => void | null,
    onFail: () => void | null
  ): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await this.GetUserAccount(user.uid).then((result) => {
          this.userModel = result;
        });

        this.isLoggedIn = true;
        console.log(`User Model: ${this.userModel.userType}`);
        SessionHandler.SetItem(SessionKeys.SESSION_USER_MODEL, this.userModel);
        onSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code: " + errorCode + " | Message: " + errorMessage);

        this.isLoggedIn = false;
        onFail();
      });
  }

  private static async SignInWithGoogle(
    auth: Auth,
    onSuccess: () => void | null,
    onFail: () => void | null
  ): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;

        // this.userModel = new UserModel(
        //   {
        //     uuid: user.uid,
        //     //token : user.accessToken,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        //     email: user.email
        //   }
        // );

        await this.GetUserAccount(user.uid).then((result) => {
          this.userModel = result;
        });

        SessionHandler.SetItem(SessionKeys.SESSION_USER_MODEL, this.userModel);
        this.isLoggedIn = true;
        onSuccess();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.email;
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        this.userModel = null as any;
        this.isLoggedIn = false;
        onFail();
      });

    if (this.userModel) {
      await this.RegisterUser(this.userModel.uuid, {
        displayName: this.userModel.displayName,
        photoURL: this.userModel.photoURL,
        email: this.userModel.email,
      }).then((result) => {
        if (result) {
          this.userModel = result;
        }
      });
    }
  }

  public static async SignOutOfProfile(): Promise<void> {
    if (this.userModel?.profile) {
      this.userModel.profile = null as any;
      SessionHandler.DeleteItem(SessionKeys.SESSION_PROFILE_MODEL);
    }
  }

  public static async SignOut(): Promise<void> {
    const auth = getAuth();
    await this.SignOutOfProfile().then(() => {});
    SessionHandler.DeleteItem(SessionKeys.SESSION_USER_MODEL);
    auth.signOut();
    this.userModel = null as any;
    this.isLoggedIn = false;
  }

  public static async GetUsers(
    uuidList: string[]
  ): Promise<Map<string, UserModel>> {
    let cache: Map<string, UserModel> = new Map<string, UserModel>();
    for (let i = 0; i < uuidList.length; i++) {
      let uuid = uuidList[i];
      await this.GetUserAccount(uuid).then((result) => {
        if (result) cache?.set(result.uuid, result);
      });
      // if (!this.userCache.has(uuid)) {
      //   cache = await this.GetUserAccount(uuid).then(result => {
      //     return this.userCache;
      //   });
      // }
    }

    return Promise.resolve(cache);
    //return cache!;
  }

  public static async GetUsersByIds(user_ids: string[]): Promise<UserModel[]> {
    let userModels: UserModel[] = [];
    for (let i = 0; i < user_ids.length; i++) {
      await this.GetUserAccount(user_ids[i]).then((model) => {
        if (model) userModels.push(model);
      });
    }

    return Promise.resolve(userModels);
  }

  public static async SignUp(
    email: string,
    password: string,
    displayName: string,
    fn: () => void | null
  ): Promise<void> {
    const auth = getAuth();
    displayName = displayName.replace(/\s+/g, " ");
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        this.userModel = new UserModel({
          uuid: user.uid,
          //token : user.accessToken,
          displayName: displayName,
          photoURL: "",
          email: user.email,
        });

        if (this.userModel) {
          await this.RegisterUser(this.userModel.uuid, {
            displayName: this.userModel.displayName,
            photoURL: this.userModel.photoURL,
            email: this.userModel.email,
          }).then((result) => {
            if (result) {
              this.userModel = result;
            }
          });
        }

        this.isLoggedIn = true;
        fn();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isLoggedIn = false;
        console.log(
          "Error | Code: " + errorCode + " | Message: " + errorMessage
        );
      });
  }
  private static async RegisterUser(
    uuid: string,
    params: any
  ): Promise<UserModel> {
    let userModel: UserModel = null as any;
    await this.GetUserAccount(uuid).then((result) => {
      if (result) userModel = result;
    });

    if (userModel) {
      let timeStamp = serverTimestamp();
      const updateParam = {
        lastLoggedIn: timeStamp,
      };
      await this.UpdateUserAccount(uuid, updateParam);
    } else {
      await this.CreateUserAccount(uuid, params);
    }
    return Promise.resolve(userModel);
  }

  private static async UpdateUserAccount(
    uuid: string,
    params: any
  ): Promise<void> {
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");
    const usersDoc = doc(usersRef, uuid);
    params = this.CheckValidDataInput(params);
    await updateDoc(usersDoc, params);
  }

  public static async CreateChatter(
    email: string,
    password: string,
    params: any
  ): Promise<void> {
    const auth = getAuth();
    params.displayName = params.displayName.replace(/\s+/g, " ");
    let success = false;
    let errorMessage = "";
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await this.CreateUserAccount(user.uid, params).then(async () => {
          await Count.IncrementCount(CountTypes.CHATTER, 1).then(() => {
            success = true;
          });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode.includes("auth/invalid-email"))
          errorMessage = "Invalid Email Address!";

        console.log(
          "Error | Code: " + errorCode + " | Message: " + errorMessage
        );
      });

    if (success) return Promise.resolve();
    else return Promise.reject(errorMessage);
  }

  public static async AddToCreatedProfiles(
    user_id: string,
    profile_id: string
  ): Promise<void> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersDoc = doc(usersRef, user_id);

    let params = {
      createdProfiles: arrayUnion(profile_id),
    };

    let success = false;
    await updateDoc(usersDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async ArchiveCreatedProfiles(
    user_id: string,
    created_profiles: string[]
  ): Promise<void> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersDoc = doc(usersRef, user_id);

    let params = {
      archivedCreatedProfiles: arrayUnion(...created_profiles),
      createdProfiles: arrayRemove(...created_profiles),
    };

    let success = false;
    await updateDoc(usersDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  private static async CreateUserAccount(
    uuid: string,
    params: any
  ): Promise<void> {
    let timeStamp = serverTimestamp();
    params = this.CheckValidDataInput(params);
    params["uuid"] = uuid;
    params["createdAt"] = timeStamp;
    params["lastLoggedIn"] = timeStamp;
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");
    const usersDoc = doc(usersRef, uuid);
    let success = false;
    await setDoc(usersDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async GetUserAccount(uuid: string): Promise<UserModel> {
    const firestore = getFirestore();
    const userDoc = doc(firestore, "users", uuid);
    const userSnap = await getDoc(userDoc);
    console.log("user snap data: ", userSnap.data());
    if (userSnap.exists() && !userSnap.data().isDeleted) {
      let data = userSnap.data();

      let userModel = Utils.ParseDataToUserModel(data);

      this.userCache.set(userModel.uuid, userModel);

      return Promise.resolve(userModel);
    } else {
      return Promise.resolve(null as any);
    }
  }

  public static async GetDeletedUserAccount(): Promise<UserModel[]> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersQuery = query(usersRef, where("isDeleted", "==", true));

    let userModels: UserModel[] = [];
    const usersSnap = await getDocs(usersQuery);
    usersSnap.forEach((doc) => {
      let model = Utils.ParseDataToUserModel(doc.data());
      userModels.push(model);
    });

    return Promise.resolve(userModels);
  }

  public static async AddToProfilesThatLikedYou(
    userId: string,
    profile_id: string
  ) {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let userDoc = doc(usersRef, userId);

    let params = {
      profilesLikedYou: arrayUnion(profile_id),
    };

    let success = false;
    await updateDoc(userDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async GetAllUsers(
    userType: string = null as any
  ): Promise<UserModel[]> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersQuery = userType
      ? query(usersRef, where("userType", "==", userType))
      : query(usersRef);

    let userModels: UserModel[] = [];
    const usersSnap = await getDocs(usersQuery);
    usersSnap.forEach((doc) => {
      if (!doc.data().isDeleted) {
        let model = Utils.ParseDataToUserModel(doc.data());
        userModels.push(model);
      }
    });

    return Promise.resolve(userModels);
  }

  public static async GetChattersPaginated(
    lastVisible: QueryDocumentSnapshot<DocumentData> = null as any,
    entry_limit: number
  ): Promise<PaginatedUserModels> {
    let paginatedChatterModels: PaginatedUserModels = new PaginatedUserModels();
    let chatterModels: UserModel[] = [];

    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersQuery = query(
      usersRef,
      limit(entry_limit + 1),
      where("userType", "==", UserTypes.TYPE_CHATTER),
      orderBy("createdAt"),
      startAt(lastVisible)
    );

    let chattersSnap = await getDocs(usersQuery);
    paginatedChatterModels.lastVisiblePrev = chattersSnap.docs[0];
    if (chattersSnap.docs.length === entry_limit + 1) {
      paginatedChatterModels.nextPageExists = true;
      paginatedChatterModels.lastVisibleNext =
        chattersSnap.docs[chattersSnap.docs.length - 1];
    }

    for (let i = 0; i < chattersSnap.docs.length; i++) {
      if (i === entry_limit) continue;

      let doc = chattersSnap.docs[i];

      let model = Utils.ParseDataToUserModel(doc.data());

      chatterModels.push(model);
    }

    paginatedChatterModels.userModels = chatterModels;

    return Promise.resolve(paginatedChatterModels);
  }

  public static async GetUserByName(name: string): Promise<UserModel[]> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    // let usersQuery = query(usersRef, where("displayName", "==", name), where("isDeleted", "==", false));
    let usersQuery = query(usersRef, where("displayName", "==", name));

    let userModels: UserModel[] = [];
    const userSnap = await getDocs(usersQuery);
    userSnap.forEach((doc) => {
      if (!doc.data().isDeleted) {
        let model = Utils.ParseDataToUserModel(doc.data());
        userModels.push(model);
      }
    });

    return Promise.resolve(userModels);
  }

  public static async GetUserByNameForUserSearch(
    name: string
  ): Promise<UserModel[]> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    function getNextLetter(letter: string) {
      if (letter === "z") {
        return "a";
      } else if (letter === "Z") {
        return "A";
      } else {
        return String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
      }
    }
    const nextLetter = getNextLetter(name);
    let usersQuery = query(
      usersRef,
      where("displayName", ">=", name),
      where(
        "displayName",
        "<",
        `${name.slice(0, name.length - 1)}${nextLetter}`
      )
    );

    let userModels: UserModel[] = [];
    const userSnap = await getDocs(usersQuery);

    userSnap.forEach((doc) => {
      console.log(`Doc Id: ${doc.id}`);
      let model = Utils.ParseDataToUserModel(doc.data());
      userModels.push(model);
    });

    return Promise.resolve(userModels);
  }
  public static async GetAllUserIDs(): Promise<string[]> {
    const firestore = getFirestore();
    let usersRef = collection(firestore, "users");
    let usersQuery = query(usersRef);

    let ids: string[] = [];
    const usersSnap = await getDocs(usersQuery);
    usersSnap.forEach((user) => {
      ids.push(user.id);
    });
    return Promise.resolve(ids);
  }

  //#region User Notes
  public static async CreateUserNote(uuid: string, note: string) {
    const firestore = getFirestore();
    let currTime = serverTimestamp();
    let noteData = {
      uuid: uuid,
      text: note,
      createdAt: currTime,
      lastUpdated: currTime,
    };
    let notesRef = collection(firestore, `users/${uuid}/notes`);
    await addDoc(notesRef, noteData);
  }

  public static async DeleteUserNote(uuid: string, noteId: string) {
    let path = `users/${uuid}/notes`;
    const firestore = getFirestore();
    const notesRef = collection(firestore, path);
    const notesDoc = doc(notesRef, noteId);

    await deleteDoc(notesDoc);
  }

  public static async SoftDeleteUser(uuid: string) {
    let success = false;
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");

    const usersDoc = doc(usersRef, uuid);

    const updateParams = {
      isDeleted: true,
    };

    await updateDoc(usersDoc, updateParams).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async RestoreDeletedUser(uuid: string) {
    let success = false;
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");

    const usersDoc = doc(usersRef, uuid);

    const updateParams = {
      isDeleted: false,
    };

    await updateDoc(usersDoc, updateParams).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async DeleteUserPermanently(uuid: string) {
    let success = false;
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");
    const usersDoc = doc(usersRef, uuid);
    await deleteDoc(usersDoc).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async EditUserNote(
    uuid: string,
    noteId: string,
    newText: string
  ) {
    let path = `users/${uuid}/notes`;
    const firestore = getFirestore();
    const notesRef = collection(firestore, path);
    const notesDoc = doc(notesRef, noteId);

    let updateParams = {
      text: newText,
      lastUpdated: serverTimestamp(),
    };

    await updateDoc(notesDoc, updateParams);
  }

  public static ListenForUserNotes(
    uuid: string,
    onUpdate: (notes: NoteModel[] | undefined) => void | null
  ) {
    const firestore = getFirestore();
    const notesRef = collection(firestore, `users/${uuid}/notes`);
    const notesQuery = query(notesRef, orderBy(`lastUpdated`));
    const key = `${uuid}@notes`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      notesQuery,
      key,
      (snapshot) => {
        let notes: NoteModel[] = [];
        if (snapshot) {
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data) {
              var timestamp: Date =
                data.lastUpdated !== null
                  ? data.lastUpdated.toDate()
                  : undefined;
              let lastUpdated =
                timestamp !== undefined
                  ? timestamp.toLocaleDateString()
                  : "Loading";
              let notesData: NoteModel = {
                id: doc.id,
                uuid: data.uuid,
                text: data.text,
                createdAt: data.createdAt,
                lastUpdated: lastUpdated,
              };
              notes.push(notesData);
            }
          });
        }

        onUpdate(notes);
      }
    );
  }

  public static StopListeningForUserNotes(uuid: string) {
    const key = `${uuid}@notes`;
    FirestoreManager.DetachFirestoreListener(key);
  }
  //#endregion

  public static async GetUserCredits(userId: string): Promise<number> {
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");
    const userDoc = doc(usersRef, userId);

    const userSnap = await getDoc(userDoc);
    let credits = -1;
    const data = userSnap.data();
    if (data) {
      if (data.credits) credits = data.credits;
      else credits = 0;
    }

    console.log(`Credits: ${credits}`);
    if (credits !== -1) return Promise.resolve(credits);
    else return Promise.reject();
  }

  public static async AddUserCredits(
    userId: string,
    creditsToAdd: number
  ): Promise<number> {
    const firestore = getFirestore();
    const usersRef = collection(firestore, "users");
    const userDoc = doc(usersRef, userId);

    let success = false;
    let newCredits = 0;
    await this.GetUserCredits(userId).then(async (credits) => {
      newCredits = credits + creditsToAdd;
      let params = {
        credits: newCredits,
      };

      await updateDoc(userDoc, params).then(() => {
        success = true;
      });
    });

    if (success) return Promise.resolve(newCredits);
    else return Promise.reject();
  }

  public static async ListenForUserOnlineStatus(
    uuid: string,
    onUpdate: (status: boolean) => void | null
  ) {
    const key = `${uuid}@online-status`;
    FirestoreManager.AttachFirestoreListener("users", uuid, key, (doc) => {
      let onlineStatus: boolean = false;
      if (doc) {
        const data = doc.data();
        if (data) {
          onlineStatus = data.onlineStatus
            ? (data.onlineStatus as boolean)
            : false;
        }
      }

      onUpdate(onlineStatus);
    });
  }

  public static async StopListeningForUserOnlineStatus(uuid: string) {
    const key = `${uuid}@online-status`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  public static async ListenForUserCredits(
    uuid: string,
    onUpdate: (credits: number) => void | null
  ) {
    const key = `${uuid}@credits`;
    FirestoreManager.AttachFirestoreListener("users", uuid, key, (doc) => {
      let credits: number = 0;
      if (doc) {
        const data = doc.data();
        if (data) {
          credits = data.credits ? data.credits : 0;
        }
      }

      onUpdate(credits);
    });
  }

  public static async StopListeningForUserCredits(uuid: string) {
    const key = `${uuid}@credits`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  private static CheckValidDataInput(params: any): any {
    const allowedData: string[] = [
      "uuid",
      "createdAt",
      "displayName",
      "email",
      "lastLoggedIn",
      "photoURL",
      "gender",
      "country",
      "language",
      "userType",
    ];
    let filteredData: any = {};

    allowedData.forEach((element) => {
      if (element in params) {
        filteredData[element] = params[element];
      }
    });

    return filteredData;
  }
}
