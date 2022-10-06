import {
  addDoc,
  arrayUnion,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
  getFirestore,
  orderBy,
  Query,
  QueryConstraint,
} from "@firebase/firestore";
import { profile } from "console";
import {
  collection,
  deleteDoc,
  getDoc,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  ImageModel,
  InfoModel,
  ProfileImageModel,
  ProfileImageReceiverModel,
} from "../../_metronic/helpers";
import { FileHandler } from "../system/FileHandler";
import { FirestoreManager } from "../system/FirestoreManager";
import { Utils } from "../system/Utils";
import { User, UserModel, UserTypes } from "./User";

export class ProfileModel extends InfoModel {
  id: string = "";
  createdAt: string = "";
  controllerUuid: string = "";
  publicPhotos: ProfileImageModel[] = [];
  privatePhotos: ProfileImageModel[] = [];
  status: "approved" | "pending" | "denied" = "pending";
  sites: string[] = [];
  creator: string = "";

  constructor(params: any) {
    super(params);
    this.id = params.id;
    this.createdAt = params.createdAt;
    this.publicPhotos = params.publicPhotos;
    this.privatePhotos = params.privatePhotos;
    this.status = params.status;
    this.sites = params.sites;
    this.creator = params.creator;
  }
}

export class Profile {
  private static BASE_PROFILE_IMAGE_DIRECTORY: string = "";
  private static PRIVATE_IMAGES_PATH = "private";
  private static PUBLIC_IMAGES_PATH = "public";
  private static PROFILE_PHOTO_PATH = "profile";

  public static async CreateNewProfile(
    params: any,
    publicPhotos: string[],
    privatePhotos: string[]
  ): Promise<void> {
    const firestore = getFirestore();
    params["createdAt"] = serverTimestamp();
    params["status"] = "pending";
    params["creator"] = User.Model?.uuid;
    let profilesRef = collection(firestore, "profiles");

    await addDoc(profilesRef, params).then(async (ref) => {
      for (let i = 0; i < publicPhotos.length; i++) {
        let url = publicPhotos[i];
        await this.AddProfileImage(ref.id, url, "public");
      }

      for (let i = 0; i < privatePhotos.length; i++) {
        let url = privatePhotos[i];
        await this.AddProfileImage(ref.id, url, "private");
      }
    });

    return Promise.resolve();
  }

  public static async GetProfilesByIds(
    profile_ids: string[]
  ): Promise<ProfileModel[]> {
    let profileModels: ProfileModel[] = [];
    for (let i = 0; i < profile_ids.length; i++) {
      await this.GetProfile(profile_ids[i]).then((model) => {
        if (model) profileModels.push(model);
      });
    }

    return Promise.resolve(profileModels);
  }

  public static async GetAllProfiles(
    status: string = "approved",
    this_site_only: boolean = false,
    entry_limit: number = 100
  ): Promise<ProfileModel[]> {
    let profileModels: ProfileModel[] = [];
    let site = window.location.hostname;

    const firestore = getFirestore();
    let profilesRef = collection(firestore, "profiles");
    let profilesQuery = this_site_only
      ? query(
          profilesRef,
          limit(entry_limit),
          where("status", "==", status),
          where("sites", "array-contains", site)
        )
      : query(profilesRef, limit(entry_limit), where("status", "==", status));

    const querySnapshot = await getDocs(profilesQuery);
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      let model = Utils.ParseDataToProfileModel(doc);
      profileModels.push(model);
    });

    return Promise.resolve(profileModels);
  }

  public static async GetProfile(profileID: string): Promise<ProfileModel> {
    const firestore = getFirestore();
    const profileDoc = doc(firestore, "profiles", profileID);
    const profileSnap = await getDoc(profileDoc);
    if (profileSnap.exists()) {
      let profileModel = Utils.ParseDataToProfileModel(profileSnap);
      return Promise.resolve(profileModel);
    } else {
      return Promise.resolve(null as any);
    }
  }

  public static async CheckIfProfileNameExists(
    profileName: string
  ): Promise<boolean> {
    const firestore = getFirestore();
    const profilesRef = collection(firestore, "profiles");
    const profileQuery = query(
      profilesRef,
      where("displayName", "==", profileName)
    );

    const profileSnap = await getDocs(profileQuery);

    let nameExists = false;
    nameExists = profileSnap.size > 0;

    return Promise.resolve(nameExists);
  }

  /**
   * @deprecated The method should not be used
   */
  public static async GetProfileControlledBy(
    uuid: string
  ): Promise<ProfileModel> {
    let profileModel: ProfileModel = null as any;

    const firestore = getFirestore();
    let profilesRef = collection(firestore, "profiles");
    let profilesQuery = query(profilesRef, where("controllerUuid", "==", uuid));

    const querySnapshot = await getDocs(profilesQuery);
    if (querySnapshot.size > 0) {
      let data = querySnapshot.docs[0].data();
      let model = new ProfileModel({
        id: data.id,
        displayName: data.displayName,
        photoURL: data.photoURL,
        controllerUuid: data.controllerUuid,
      });
      profileModel = model;
    }
    return Promise.resolve(profileModel);
  }

  /**
   * @deprecated The method should not be used
   */
  public static async GetProfileController(
    profileID: string
  ): Promise<UserModel> {
    let profile: ProfileModel = null as any;
    await this.GetProfile(profileID)
      .then((result) => {
        profile = result;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "Error | Code: " + errorCode + " | Message: " + errorMessage
        );
      });
    if (profile) {
      let controllerUuid: string = profile.controllerUuid;
      if (controllerUuid && controllerUuid !== "") {
        let user: UserModel = null as any;
        await User.GetUserAccount(controllerUuid).then((result) => {
          user = result;
        });
        return Promise.resolve(user);
      } else {
        return Promise.resolve(null as any);
      }
    } else {
      let error: {} = {
        message: "Profile not found.",
      };
      return Promise.reject(error);
    }
  }
  /**
   * @deprecated The method should not be used. Use AddProfileController/RemoveProfileController instead.
   */
  public static async SetProfileController(
    profileID: string,
    controllerUuid: string
  ): Promise<boolean> {
    const firestore = getFirestore();
    const profileRef = collection(firestore, "profiles");
    const profileDoc = doc(profileRef, profileID);
    let params = {
      controllerUuid: controllerUuid,
    };
    params = this.CheckValidDataInput(params);
    let success: boolean = false;
    await updateDoc(profileDoc, params).then(() => {
      success = true;
    });
    return Promise.resolve(success);
  }

  public static async AddProfileController(
    profileID: string,
    controllerUuid: string
  ): Promise<boolean> {
    let success: boolean = false;
    const firestore = getFirestore();
    const path = `profiles/${profileID}/controllers`;
    const userDoc = doc(firestore, path, controllerUuid);
    const userSnap = await getDoc(userDoc);
    if (!userSnap.exists()) {
      const usersRef = collection(firestore, path);
      const usersDoc = doc(usersRef, controllerUuid);
      await setDoc(usersDoc, {
        uuid: controllerUuid,
      });
      success = true;
    }
    return Promise.resolve(success);
  }

  public static async RemoveProfileController(
    profileID: string,
    controllerUuid: string
  ): Promise<boolean> {
    let success: boolean = false;
    const firestore = getFirestore();
    const path = `profiles/${profileID}/controllers`;
    const userDoc = doc(firestore, path, controllerUuid);
    const userSnap = await getDoc(userDoc);
    if (userSnap.exists()) {
      deleteDoc(userDoc);
      success = true;
    }
    return Promise.resolve(success);
  }

  public static async GetProfileControllers(
    profileID: string
  ): Promise<UserModel[]> {
    let controllers: UserModel[] = [];
    let ids: string[] = [];
    await this.GetProfileControllerIDs(profileID).then((result) => {
      ids = result;
    });
    for (var idx in ids) {
      let user: UserModel = null as any;
      let id = ids[idx];
      await User.GetUserAccount(id).then((result) => {
        user = result;
      });
      if (user) {
        controllers.push(user);
      }
    }
    return Promise.resolve(controllers);
  }

  public static async GetProfileControllerIDs(
    profileID: string
  ): Promise<string[]> {
    const firestore = getFirestore();
    let controllersRef = collection(
      firestore,
      `profiles/${profileID}/controllers`
    );
    let controllersQuery = query(controllersRef);

    const controllersSnap = await getDocs(controllersQuery);
    let ids: string[] = [];
    controllersSnap.forEach((controller) => {
      ids.push(controller.id);
    });
    return Promise.resolve(ids);
  }

  public static async IsProfileControlledByUser(
    profileID: string,
    uuid: string
  ): Promise<boolean> {
    let ids: string[] = [];
    await this.GetProfileControllerIDs(profileID).then((result) => {
      ids = result;
    });
    return Promise.resolve(ids.includes(uuid));
  }

  private static CheckValidDataInput(params: any): any {
    const allowedData: string[] = [
      "id",
      "createdAt",
      "displayName",
      "photoURL",
      "controllerUuid",
    ];
    let filteredData: any = {};
    allowedData.forEach((element) => {
      if (element in params) {
        filteredData[element] = params[element];
      }
    });

    return filteredData;
  }
  public static async GetAllProfileIDs(
    status: string = "approved"
  ): Promise<string[]> {
    const firestore = getFirestore();
    let profilesRef = collection(firestore, "profiles");
    let profileQuery = query(profilesRef, where("status", "==", status));
    let ids: string[] = [];
    const profilesSnap = await getDocs(profileQuery);
    profilesSnap.forEach((profile) => {
      ids.push(profile.id);
    });
    return Promise.resolve(ids);
  }

  public static async UpdateProfile(
    profile_id: string,
    params: any
  ): Promise<void> {
    const firestore = getFirestore();
    const profilesRef = collection(firestore, "profiles");
    const profileDoc = doc(profilesRef, profile_id);
    let success = false;
    let errorMessage = "";
    await updateDoc(profileDoc, params)
      .then(() => {
        success = true;
      })
      .catch((err) => {
        errorMessage = err;
      });

    if (success) return Promise.resolve();
    else return Promise.reject(errorMessage);
  }

  public static async ApproveProfile(
    profileId: string,
    approved: boolean,
    creatorRef: string = null as any
  ) {
    const firestore = getFirestore();
    let profilesRef = collection(firestore, "profiles");
    let profileDoc = doc(profilesRef, profileId);

    let params = {
      status: approved ? "approved" : "declined",
    };

    await updateDoc(profileDoc, params).then(() => {
      if (approved) {
        if (!creatorRef) return;

        User.AddToCreatedProfiles(creatorRef, profileId);
      }
    });
  }

  public static async SendToPending(profileId: string): Promise<void> {
    const firestore = getFirestore();
    let profilesRef = collection(firestore, "profiles");
    let profileDoc = doc(profilesRef, profileId);

    let params = {
      status: "pending",
    };

    let success = false;
    await updateDoc(profileDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  //#region Profile Pictures
  public static async ModifyProfilePhoto(
    profile_name: string,
    profile_id: string,
    name: string,
    file: any,
    onDone: () => void | null,
    onFail: () => void | null
  ): Promise<void> {
    let base = `images/profiles/${profile_name.toLowerCase()}`;
    let filePath = `${base}/${this.PROFILE_PHOTO_PATH}/${name}`;

    await FileHandler.RestrictImageSize(file, 300, async (image) => {
      if (image) {
        await FileHandler.UploadImage(
          image,
          filePath,
          async (url) => {
            let params = {
              photoURL: url,
              profileReference: filePath,
            };

            await this.UpdateProfile(profile_id, params).then(() => {
              onDone();
            });
          },
          (error, message) => {
            console.log(`Error: ${error} | Message: ${message}`);
            onFail();
          }
        );
      }
    });
  }

  public static async AddProfileImage(
    profileId: string,
    url: string,
    imageType: string
  ) {
    const firestore = getFirestore();
    let currTime = serverTimestamp();
    let imageData = {
      profile_id: profileId,
      photoURL: url,
      uploadedAt: currTime,
      imageType: imageType,
    };
    let imagesRef = collection(firestore, `profiles/${profileId}/images`);
    await addDoc(imagesRef, imageData);
  }

  public static async DeleteProfileImage(
    profileId: string,
    imageId: string
  ): Promise<void> {
    let path = `profiles/${profileId}/images`;
    const firestore = getFirestore();
    const imagesRef = collection(firestore, path);
    const imageDoc = doc(imagesRef, imageId);

    let success = false;
    await deleteDoc(imageDoc).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static async AddProfileImages(
    profile_name: string,
    profile_id: string,
    files: any[],
    imageType: "public" | "private",
    onCompleted: () => void | null,
    onFailure: () => void | null
  ) {
    console.log(`Image Type: ${imageType}`);
    let fileDirect =
      imageType === "private"
        ? this.PRIVATE_IMAGES_PATH
        : this.PUBLIC_IMAGES_PATH;

    let doneCount = 0;

    let readers: any[] = [];

    console.log(`Image Type: ${imageType} | File Direct: ${fileDirect}`);
    console.log(`Files Length: ${files.length}`);

    files.forEach((file, index) => {
      let base = `images/profiles/${profile_name.toLowerCase()}`;
      let filePath = `${base}/${fileDirect}/${file.name}`;
      console.log(`File Path: ${filePath}`);

      let uploadToFirestore = async () => {
        console.log("Restrict");
        await FileHandler.RestrictImageSize(file, -1, async (image) => {
          if (image) {
            console.log("Upload");
            await FileHandler.UploadImage(
              image,
              filePath,
              async (url) => {
                console.log(`Update Profile. Url ${url}`);
                await this.AddProfileImage(profile_id, url, imageType).then(
                  () => {
                    doneCount++;
                    console.log("Done Count: " + doneCount);
                  }
                );
              },
              (error, message) => {
                console.log(`Error: ${error} | Message: ${message}`);
              }
            );
          }
        });
      };

      readers.push(uploadToFirestore());
    });

    const checkForImages = () => {
      if (doneCount !== files.length) setTimeout(checkForImages, 100);
      else onCompleted();
    };

    console.log("Readers Length: " + readers.length);
    Promise.all(readers)
      .then(() => {
        console.log("Completed");
        checkForImages();
      })
      .catch(() => {
        console.log("Failed");
        onFailure();
      });
  }

  public static async AddImageReceiver(
    profileId: string,
    imageId: string,
    receiverId: string,
    onReceiverAdded?: () => void | null | undefined
  ) {
    let path = `profiles/${profileId}/images/${imageId}/receivedBy`;
    const firestore = getFirestore();
    const currTime = serverTimestamp();
    let receiverData = {
      receiver_id: receiverId,
      receivedAt: currTime,
    };

    const receiversRef = collection(firestore, path);
    await addDoc(receiversRef, receiverData).then((doc) => {
      if (onReceiverAdded) onReceiverAdded();
    });
  }

  public static async GetAllImageReceivers(
    profileId: string,
    imageId: string
  ): Promise<ProfileImageReceiverModel[]> {
    let path = `profiles/${profileId}/images/${imageId}/receivedBy`;
    const firestore = getFirestore();
    const receiversRef = collection(firestore, path);
    const receiversQuery = query(receiversRef);

    let receivers: ProfileImageReceiverModel[] = [];
    const receiversSnap = await getDocs(receiversQuery);
    receiversSnap.forEach((receiver) => {
      const data = receiver.data();
      if (data) {
        let receiverData: ProfileImageReceiverModel = {
          id: receiver.id,
          receiver_id: data.receiver_id,
          receivedAt: data.receivedAt,
        };
        receivers.push(receiverData);
      }
    });

    return Promise.resolve(receivers);
  }

  public static async GetAllProfileImages(
    profileId: string,
    imageType: string = null as any
  ): Promise<ProfileImageModel[]> {
    let path = `profiles/${profileId}/images`;
    const firestore = getFirestore();
    const imagesRef = collection(firestore, path);
    const imagesQuery = imageType
      ? query(
          imagesRef,
          orderBy("uploadedAt"),
          where("imageType", "==", imageType)
        )
      : query(imagesRef, orderBy("uploadedAt"));

    let images: ProfileImageModel[] = [];
    const imagesSnap = await getDocs(imagesQuery);
    for (let i = 0; i < imagesSnap.size; i++) {
      let image = imagesSnap.docs[i];
      const data = image.data();
      if (data) {
        let receivers: ProfileImageReceiverModel[] = [];
        await this.GetAllImageReceivers(profileId, image.id).then((data) => {
          if (data) receivers = data;
        });

        let info: ImageModel = {
          id: image.id,
          ownerId: data.profile_id,
          photoURL: data.photoURL,
          uploadedAt: data.uploadedAt,
          reference: data.reference,
          type: data.imageType,
        };

        let imageData: ProfileImageModel = {
          info: info,
          receivedBy: receivers,
        };
        images.push(imageData);
      }
    }

    return Promise.resolve(images);
  }

  public static async GetSitesList(): Promise<string[]> {
    const firestore = getFirestore();

    let sitesReference = collection(firestore, "sites");
    let domainsDoc = doc(sitesReference, "list");

    const domainsSnap = await getDoc(domainsDoc);
    let domains: string[] = [];
    if (domainsSnap.exists()) {
      let data = domainsSnap.data();

      domains = [...data.domains];
    }

    return Promise.resolve(domains);
  }

  public static async PushToSite(id: string, sites: string[]): Promise<void> {
    const firestore = getFirestore();
    let profilesRef = collection(firestore, `profiles/`);
    let profileDoc = doc(profilesRef, id);

    let params = {
      sites: arrayUnion(...sites),
    };

    let success = false;
    await updateDoc(profileDoc, params).then(() => {
      success = true;
    });

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  public static ListenForProfiles(
    status: string = "approved",
    this_site_only: boolean = false,
    onUpdate: (
      profiles: ProfileModel[] | undefined
    ) => void | null | Promise<void>
  ) {
    const firestore = getFirestore();
    let site = window.location.hostname;

    let profilesRef = collection(firestore, "profiles");
    let profilesQuery = this_site_only
      ? query(
          profilesRef,
          where("status", "==", status),
          orderBy("createdAt", "desc"),
          where("sites", "array-contains", site)
        )
      : query(
          profilesRef,
          where("status", "==", status),
          orderBy("createdAt", "desc")
        );

    let temp = status ? status : "all";
    const key = `${temp}-profiles`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      profilesQuery,
      key,
      async (snapshot) => {
        let profileModels: ProfileModel[] = [];
        if (snapshot) {
          snapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            let model = Utils.ParseDataToProfileModel(doc);
            profileModels.push(model);
          });
        }

        onUpdate(profileModels);
      }
    );
  }

  public static StopListeningForProfiles(profileStatus: string = null as any) {
    let temp = profileStatus ? profileStatus : "all";
    const key = `${temp}-profiles`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  public static ListenForProfileImages(
    profileId: string,
    onUpdate: (
      images: ProfileImageModel[] | undefined
    ) => void | null | Promise<void>
  ) {
    let path = `profiles/${profileId}/images`;
    const firestore = getFirestore();
    const imagesRef = collection(firestore, path);
    const imagesQuery = query(imagesRef, orderBy("uploadedAt"));

    const key = `${profileId}@images`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      imagesQuery,
      key,
      async (snapshot) => {
        let images: ProfileImageModel[] = [];
        if (snapshot) {
          for (let i = 0; i < snapshot.size; i++) {
            let image = snapshot.docs[i];
            const data = image.data();
            if (data) {
              let receivers: ProfileImageReceiverModel[] = [];
              await this.GetAllImageReceivers(profileId, image.id).then(
                (data) => {
                  if (data) receivers = data;
                }
              );

              let info: ImageModel = {
                id: image.id,
                ownerId: data.profile_id,
                photoURL: data.photoURL,
                uploadedAt: data.uploadedAt,
                reference: data.reference,
                type: data.imageType,
              };

              let imageData: ProfileImageModel = {
                info: info,
                receivedBy: receivers,
              };
              images.push(imageData);
            }
          }
        }

        onUpdate(images);
      }
    );
  }

  public static StopListeningForProfileImages(profileId: string) {
    const key = `${profileId}@images`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  public static ListenForProfileImageReceivers(
    profileId: string,
    imageId: string,
    onUpdate: (
      receivers: ProfileImageReceiverModel[] | undefined,
      imageId: string
    ) => void | null
  ) {
    let path = `profiles/${profileId}/images/${imageId}/receivedBy`;
    const firestore = getFirestore();
    const receiversRef = collection(firestore, path);
    const receiversQuery = query(receiversRef, orderBy(`receivedAt`));

    const key = `${profileId}-${imageId}@receivers`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      receiversQuery,
      key,
      (snapshot) => {
        let receivers: ProfileImageReceiverModel[] = [];
        if (snapshot) {
          snapshot.forEach((doc) => {
            if (doc) {
              const data = doc.data();
              if (data) {
                let receiverData = {
                  id: doc.id,
                  receiver_id: data.receiver_id,
                  receivedAt: data.receivedAt,
                };
                receivers.push(receiverData);
              }
            }
          });
        }
        onUpdate(receivers, imageId);
      }
    );
  }

  public static StopListeningForProfileImageReceivers(
    profileId: string,
    imageId: string
  ) {
    const key = `${profileId}-${imageId}@receivers`;
    FirestoreManager.DetachFirestoreListener(key);
  }
  //#endregion
}
