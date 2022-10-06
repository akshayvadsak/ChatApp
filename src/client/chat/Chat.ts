import {
  collection,
  DocumentData,
  query,
  serverTimestamp,
  addDoc,
  where,
  updateDoc,
  setDoc,
  getDoc,
  QuerySnapshot,
  QueryConstraint,
  Timestamp,
} from "@firebase/firestore";
import {
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  limit,
  limitToLast,
  orderBy,
} from "firebase/firestore";
import {
  FeedEntryModel,
  MessageModel,
  ProfileAndLatestMessageModel,
} from "../../_metronic/helpers";
import { EnvironmentType, FirebaseApp } from "../FirebaseApp";
import { Analytics, AnalyticsId } from "../system/Analytics";
import { FirestoreManager } from "../system/FirestoreManager";
import { HttpsHandler, HttpsActionNames } from "../system/HttpsHandler";
import { User, UserTag, UserTypes } from "../user/User";

import moment from "moment";

export class Chat {
  static CHAT_ROUTE_MESSAGE_USER_BASE = "/apps/chat/message-user";
  static CHAT_ROUTE = "/apps/chat";
  static CHAT_CHATTER_REQUESTS_FEED_ROUTE = "/dashboard";
  static CHAT_CHATTER_ROOM = "/live-chat";

  static CHATTER_REQUEST_FEED = "chatter_requests";
  static ADMIN_FEED = "admin_feed";

  //static firestore = getFirestore();
  static Initialize() {
    //this.firestore = getFirestore();
  }

  static async SetUserSendLastMessage(
    roomId: string,
    active: boolean,
    siteOfOrigin: string
  ) {
    const firestore = getFirestore();
    const chatsRef = collection(firestore, `sites/${siteOfOrigin}/rooms`);
    const chatDoc = doc(chatsRef, roomId);
    let params = {
      user_send_last_message: active,
    };
    let success: boolean = false;
    await updateDoc(chatDoc, params).then(() => {
      success = true;
    });
    return Promise.resolve(success);
  }

  // #region Room Status
  static async SetRoomStatus(
    roomID: string,
    active: boolean,
    siteOfOrigin: string
  ): Promise<void> {
    const firestore = getFirestore();
    const chatsRef = collection(firestore, `sites/${siteOfOrigin}/rooms`);
    const chatDoc = doc(chatsRef, roomID);
    let params = {
      is_room_locked: active,
    };

    let roomExists = await this.DoesRoomExist(roomID, siteOfOrigin);

    let success: boolean = false;

    if (roomExists) {
      await updateDoc(chatDoc, params).then(() => {
        success = true;
      });
    } else {
      await setDoc(chatDoc, params).then(() => {
        success = true;
      });
    }

    if (success) return Promise.resolve();
    else return Promise.reject();
  }

  // static async DoesRoomExist(
  //   roomId: string,
  //   siteOfOrigin: string
  // ): Promise<boolean> {
  //   const firestore = getFirestore();
  //   const roomDoc = doc(firestore, `sites/${siteOfOrigin}/rooms`, roomId);
  //   const roomSnap = await getDoc(roomDoc);

  //   return Promise.resolve(roomSnap.exists());
  // }

  static async DoesRoomExist(
    roomId: string,
    siteOfOrigin: string
  ): Promise<boolean> {
    const firestore = getFirestore();
    const roomDoc = doc(firestore, `sites/${siteOfOrigin}/rooms`, roomId);
    const roomSnap = await getDoc(roomDoc);
    return Promise.resolve(roomSnap.exists());
  }

  static async GetRoomStatus(
    roomID: string,
    siteOfOrigin: string
  ): Promise<boolean> {
    const firestore = getFirestore();
    const roomDoc = doc(firestore, `sites/${siteOfOrigin}/rooms`, roomID);
    const roomSnap = await getDoc(roomDoc);
    let is_room_locked: boolean = false;
    if (roomSnap.exists()) {
      let data = roomSnap.data();

      is_room_locked = data.is_room_locked;
    }

    return Promise.resolve(is_room_locked);
  }
  // #endregion

  static async SetReadStatus(
    roomID: string,
    status: "read" | "unread",
    siteOfOrigin: string
  ): Promise<void> {
    const firestore = getFirestore();
    const roomDoc = doc(firestore, `sites/${siteOfOrigin}/rooms`, roomID);

    let params = {
      read_status: status,
    };

    await updateDoc(roomDoc, params);
  }

  static async SendMessage(
    roomID: string,
    params: any,
    siteOfOrigin: string,
    messageType: "message" | "profile_like" = "message",
    lastMsgTime: Date = null as any
  ): Promise<void> {
    const firestore = getFirestore();
    let timeStamp = serverTimestamp();
    params.createdAt = timeStamp;
    let messagesRef = collection(
      firestore,
      `sites/${siteOfOrigin}/rooms/${roomID}/messages`
    );
    //params = this.CheckValidDataInput(params);
    let uuid = params["uuid"];
    let recepient_id = params["recepient_id"];
    let content_type = params["contentType"];
    let chatter_id = params["chatter_id"];

    await addDoc(messagesRef, params).then(async (docRef) => {
      if (docRef) {
        let timeToReply = null as any;
        if (lastMsgTime) {
          let today = moment(new Date());
          let lastMsg = moment(lastMsgTime);
          timeToReply = today.diff(lastMsg, "seconds");
        }

        let payload: Map<string, any> = new Map<string, any>();
        payload.set("recepient_id", recepient_id);
        payload.set("message_type", messageType);
        payload.set("content_type", content_type);
        payload.set("is_chatter", true);
        payload.set("profile_id", uuid);
        payload.set("chatter_id", chatter_id);
        payload.set("time_to_reply", timeToReply);
        Analytics.SendAnalyticsEvent(AnalyticsId.SEND_CHAT_MESSAGE, payload);

        const logsRef = collection(firestore, `sites/${siteOfOrigin}/logs`);
        await addDoc(logsRef, params);

        const chatsRef = collection(firestore, `sites/${siteOfOrigin}/rooms/`);
        const chatDoc = doc(chatsRef, roomID);

        let params2 = {
          last_updated: timeStamp,
          profile_id: uuid,
          user_id: recepient_id,
          read_status: "unread",
        };
        await setDoc(chatDoc, params2);
      }
    });
  }

  private static async GetLatestMessage(
    roomID: string,
    siteOfOrigin: string
  ): Promise<MessageModel> {
    const firestore = getFirestore();
    const messagesRef = collection(
      firestore,
      `sites/${siteOfOrigin}/rooms/${roomID}/messages`
    );
    const messagesQuery = query(
      messagesRef,
      orderBy("createdAt"),
      limitToLast(1)
    );

    const messageSnap = await getDocs(messagesQuery);

    let message: MessageModel = null as any;
    let docs: DocumentData[] = [];
    let messages: MessageModel[] = [];

    if (!messageSnap.empty) {
      docs.push(messageSnap.docs[0].data());
    }

    messages = Chat.ExtractMessageQuery(docs, messageSnap);
    message = messages[0];
    return Promise.resolve(message);
  }

  /**
   * timeBefore arguments takes a time - how many previous hour data do we want (ex- 4 means we want last 4 hour data)
   */
  static async GetChatLogs(
    siteOfOrigin: string,
    userId: string = null as any,
    chatterId: string = null as any,
    startDate: Date,
    endDate: Date,
    timeBefore?: any
  ): Promise<MessageModel[]> {
    const firestore = getFirestore();
    const logsRef = collection(firestore, `sites/${siteOfOrigin}/logs`);

    const queries: QueryConstraint[] = [];
    queries.push(orderBy("createdAt", "desc"));

    // if (userId)
    // queries.push(where("uuid", "in", [userId]));

    if (chatterId) queries.push(where("chatter_id", "==", chatterId));

    if (timeBefore) {
      parseInt(timeBefore);
      startDate.setHours(startDate.getHours() - timeBefore);
    } else {
      startDate.setHours(0, 0, 0, 0);
    }
    console.log(`Start Date after set: ${startDate}`);
    // endDate.setHours(23, 59, 59, 999);
    console.log(`End Date after set: ${endDate}`);

    queries.push(where("createdAt", ">=", Timestamp.fromDate(startDate)));
    queries.push(where("createdAt", "<=", Timestamp.fromDate(endDate)));

    const logsQuery = query(logsRef, ...queries);
    const logsSnap = await getDocs(logsQuery);

    let messages: MessageModel[] = [];
    logsSnap.forEach((doc) => {
      if (doc) {
        let docData: DocumentData[] = [];
        logsSnap.forEach((doc) => {
          if (doc) {
            const data = doc.data();
            if (data) docData.push(data);
          }
        });

        if (docData) {
          const temp = Chat.ExtractMessageQuery(docData, logsSnap);
          if (temp) messages = temp;
        }
      }
    });

    return Promise.resolve(messages);
  }

  static async GetChatLogsForUserSearch(
    siteOfOrigin: string,
    userId: string[] = null as any,
    chatterId: string = null as any,
    startDate: Date,
    endDate: Date,
    timeBefore?: any
  ): Promise<MessageModel[]> {
    const firestore = getFirestore();
    const logsRef = collection(firestore, `sites/${siteOfOrigin}/logs`);

    const queries: QueryConstraint[] = [];
    // queries.push(orderBy("createdAt", "desc"));

    if (userId) {
      queries.push(where("uuid", "in", userId));
    }

    if (timeBefore) {
      parseInt(timeBefore);
      startDate.setHours(startDate.getHours() - timeBefore);
      console.log("startDate==>", startDate);
    } else {
      startDate.setHours(0, 0, 0, 0);
    }
    console.log(`Start Date after set: ${startDate}`);
    // endDate.setHours(23, 59, 59, 999);
    console.log(`End Date after set: ${endDate}`);

    // queries.push(where("createdAt", ">=", Timestamp.fromDate(startDate)));
    // queries.push(where("createdAt", "<=", Timestamp.fromDate(endDate)));

    const logsQuery = query(logsRef, ...queries);
    const logsSnap = await getDocs(logsQuery);

    let messages: MessageModel[] = [];
    logsSnap.forEach((doc) => {
      if (doc) {
        let docData: DocumentData[] = [];
        logsSnap.forEach((doc) => {
          if (doc) {
            const data = doc.data();
            if (data) docData.push(data);
          }
        });

        if (docData) {
          const temp = Chat.ExtractMessageQuery(docData, logsSnap);
          if (temp) messages = temp;
        }
      }
    });

    return Promise.resolve(messages);
  }

  static async SendToChatterRequestsFeed(
    params: any,
    modifyRecent: boolean = false,
    siteOfOrigin: string
  ): Promise<void> {
    const firestore = getFirestore();
    let timeStamp = serverTimestamp();
    params.createdAt = timeStamp;
    params.siteOfOrigin = siteOfOrigin;
    let messagesRef = collection(
      firestore,
      `chatter/${this.CHATTER_REQUEST_FEED}/feed`
    );
    params = this.CheckValidDataInput(params);

    if (modifyRecent && "recepient_id" in params && "uuid" in params) {
      let recepient_id = params["recepient_id"];
      let uuid = params["uuid"];
      if (recepient_id !== "" && uuid !== "") {
        let messagesQuery = query(
          messagesRef,
          where("recepient_id", "==", recepient_id),
          where("uuid", "==", uuid)
        );

        const messagesSnap = await getDocs(messagesQuery);
        if (!messagesSnap.empty && messagesSnap.docs.length > 0) {
          let id = messagesSnap.docs[messagesSnap.docs.length - 1].id;
          const messageDoc = doc(messagesRef, id);
          await updateDoc(messageDoc, params);
          return;
        }
      }
    }
    await addDoc(messagesRef, params);
  }

  //#region For Admin
  static async SendToAdminFeed(
    roomId: string,
    params: any,
    siteOfOrigin: string,
    tag: string = "New Message"
  ): Promise<void> {
    const firestore = getFirestore();
    params.siteOfOrigin = siteOfOrigin;
    params.tag = tag;
    params.roomId = roomId;
    params.userId = User.Model?.uuid;

    let messagesRef = collection(firestore, `admin/${this.ADMIN_FEED}/feed`);
    //params = this.CheckValidDataInput(params);
    let existQuery = query(messagesRef, where("roomId", "==", roomId));

    const existSnap = await getDocs(existQuery);
    if (existSnap.size > 0) {
      if (existSnap.docs[0]) {
        let id = existSnap.docs[0].id;
        let messagesDoc = doc(messagesRef, id);

        await updateDoc(messagesDoc, params);
      }
    } else {
      params.createdAt = serverTimestamp();
      await addDoc(messagesRef, params);
    }
  }
  //#endregion

  //TODO: JOJO: Too specific. Make it more versatile.
  static async DeleteConversation(recepient_id: string, sender_id: string) {
    //let path = `sites/${this.SITE}/rooms/${roomID}/messages`;
    let path = `chatter/${this.CHATTER_REQUEST_FEED}/feed`;
    let roomID = this.GetPrivateChatRoomId(recepient_id, sender_id);
    const firestore = getFirestore();
    let messagesRef = collection(firestore, path);
    let messagesQuery = query(messagesRef, where("roomId", "==", roomID));
    console.log(`Delete Room Id: ${roomID}`);
    const messagesSnap = await getDocs(messagesQuery);
    messagesSnap.forEach((message) => {
      deleteDoc(doc(firestore, path, message.id));
    });
  }

  static async DeleteChatterRequestEntry(roomId: string) {
    let path = `chatter/${this.CHATTER_REQUEST_FEED}/feed`;
    const firestore = getFirestore();
    let messagesRef = collection(firestore, path);
    let messagesQuery = query(messagesRef, where("roomId", "==", roomId));

    const messagesSnap = await getDocs(messagesQuery);
    messagesSnap.forEach((message) => {
      deleteDoc(doc(firestore, path, message.id));
    });
  }

  static async DeleteAdminFeedEntry(roomId: string) {
    let path = `admin/${this.ADMIN_FEED}/feed`;
    const firestore = getFirestore();
    let messagesRef = collection(firestore, path);
    let messagesQuery = query(messagesRef, where("roomId", "==", roomId));

    const messagesSnap = await getDocs(messagesQuery);
    messagesSnap.forEach((message) => {
      deleteDoc(doc(firestore, path, message.id));
    });
  }

  //#region Helpers
  private static CheckValidDataInput(params: any): any {
    const allowedData: string[] = [
      "uuid",
      "createdAt",
      "photoURL",
      "text",
      "recepient_id",
      "isChatter",
      "contentType",
      "roomId",
      "siteOfOrigin",
    ];
    let filteredData: any = {};
    allowedData.forEach((element) => {
      if (element in params) {
        filteredData[element] = params[element];
      }
    });

    return filteredData;
  }

  static GetPrivateChatRoomId(uuid_1: string, uuid_2: string): string {
    let roomId = "";
    let uuidArray = [uuid_1, uuid_2];
    uuidArray = uuidArray.sort();

    roomId = uuidArray[0] + "-" + uuidArray[1];

    return roomId;
  }

  static ExtractSingleMessageDoc(
    msgId: string,
    message: DocumentData
  ): MessageModel {
    var timestamp =
      message.createdAt !== null ? message.createdAt.toDate() : undefined;
    const timeDisplay =
      timestamp !== undefined
        ? timestamp.toLocaleDateString() +
          " - " +
          timestamp.toLocaleTimeString()
        : "Loading...";
    let messageType: "in" | "out" = "out";
    if (User.Model) {
      if (
        User.Model?.userType === UserTypes.TYPE_CHATTER ||
        User.Model?.userType === UserTypes.TYPE_ADMIN ||
        User.Model?.userType === UserTypes.TYPE_MODERATOR
      ) {
        if (User.Model?.profile?.id === message.uuid) messageType = "out";
        else messageType = "in";
      } else {
        if (message.uuid === User.Model.uuid) messageType = "out";
        else messageType = "in";
      }
    } else {
      messageType = "in";
    }

    const msg: MessageModel = {
      id: msgId,
      user: message.uuid,
      type: messageType,
      text: message.text,
      time: timeDisplay,
      photoUrl: message.photoURL,
      recepient_id: message.recepient_id,
      contentType: message.contentType ? message.contentType : "text",
      siteOfOrigin: message.siteOfOrigin,
      isChatter: message.isChatter,
      tag: message.tag ? message.tag : UserTag.NEW_MESSAGE,
    };

    return msg;
  }

  static ExtractMessageQuery(
    messages: DocumentData[] | undefined,
    snapshot: QuerySnapshot<DocumentData>
  ): Array<MessageModel> {
    const new_message_format: Array<MessageModel> = new Array<MessageModel>();

    if (messages) {
      for (let i = 0; i < messages?.length; i++) {
        var timestamp =
          messages[i].createdAt !== null
            ? messages[i].createdAt.toDate()
            : undefined;
        const timeDisplay =
          timestamp !== undefined ? timestamp.toLocaleString() : "Loading...";
        let messageType: "in" | "out" = "out";
        if (User.Model) {
          if (
            User.Model?.userType === UserTypes.TYPE_CHATTER ||
            User.Model?.userType === UserTypes.TYPE_ADMIN ||
            User.Model?.userType === UserTypes.TYPE_MODERATOR
          ) {
            if (User.Model?.profile?.id === messages[i].uuid)
              messageType = "out";
            else messageType = "in";
          } else {
            if (messages[i].uuid === User.Model.uuid) messageType = "out";
            else messageType = "in";
          }
        } else {
          messageType = "in";
        }

        const msg: MessageModel = {
          id: snapshot.docs[i].id,
          user: messages[i].uuid,
          type: messageType,
          text: messages[i].text,
          time: timeDisplay,
          photoUrl: messages[i].photoURL,
          recepient_id: messages[i].recepient_id,
          contentType: messages[i].contentType
            ? messages[i].contentType
            : "text",
          siteOfOrigin: messages[i].siteOfOrigin,
          isChatter: messages[i].isChatter,
          chatter_id: messages[i].chatter_id
            ? messages[i].chatter_id
            : undefined,
          tag: messages[i].tag ? messages[i].tag : UserTag.NEW_MESSAGE,
        };
        new_message_format.push(msg);
      }
    }

    return new_message_format;
  }
  //#endregion

  //#region Https Requests
  static async SendRequestToSendLastUserMessage(
    siteOfOrigin: string,
    roomId: string,
    userId: string,
    tag: string
  ) {
    let path = `${HttpsHandler.BASE_URL}/${HttpsActionNames.LAST_MESSAGE_HANDLER}?site=${siteOfOrigin}&roomId=${roomId}&userId=${userId}&tag=${tag}`;
    await HttpsHandler.SendGetRequest(
      path,
      false,
      (success, data, message) => {
        console.log(`Success: ${success} | Data: ${data} | ${message}`);
      },
      (success, message) => {
        console.log(`Success: ${success} | ${message}`);
      }
    );
  }
  //#endregion

  //#region Chat Listeners
  static ListenForChatRoomLock(
    roomID: string,
    siteOfOrigin: string,
    onUpdate: (is_room_locked: boolean) => void | null
  ) {
    const key = `${roomID}@room-lock`;
    FirestoreManager.AttachFirestoreListener(
      `sites/${siteOfOrigin}/rooms`,
      roomID,
      key,
      (doc) => {
        let isRoomLocked: boolean = false;
        if (doc) {
          const data = doc.data();
          if (data) {
            if (data.is_room_locked)
              isRoomLocked = data.is_room_locked as boolean;
          }
        }
        onUpdate(isRoomLocked);
      }
    );
  }

  static StopListeningForChatRoomLock(roomID: string) {
    const key = `${roomID}@room-lock`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  static ListenForChatRoomUserSendLastMessage(
    roomID: string,
    siteOfOrigin: string,
    onUpdate: (user_send_last_message: boolean) => void | null
  ) {
    const key = `${roomID}@user-send-last-message`;
    FirestoreManager.AttachFirestoreListener(
      `sites/${siteOfOrigin}/rooms`,
      roomID,
      key,
      (doc) => {
        let userSendLastMessage: boolean = false;
        if (doc) {
          const data = doc.data();
          if (data) {
            if (data.is_room_locked)
              userSendLastMessage = data.user_send_last_message as boolean;
          }
        }
        onUpdate(userSendLastMessage);
      }
    );
  }

  static StopListeningForChatRoomUserSendLastMessage(roomID: string) {
    const key = `${roomID}@user-send-last-message`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  static ListenForChatRoomMessages(
    roomID: string,
    siteOfOrigin: string,
    entry_limit: number = 25,
    onUpdate: (
      messages: MessageModel[] | undefined
    ) => void | Promise<void> | null
  ) {
    const firestore = getFirestore();
    const messagesRef = collection(
      firestore,
      `sites/${siteOfOrigin}/rooms/${roomID}/messages`
    );
    const messagesQuery = query(
      messagesRef,
      orderBy("createdAt", "asc"),
      limitToLast(entry_limit + 1)
    );
    const key = `${roomID}@messages`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      messagesQuery,
      key,
      (snapshot) => {
        let messages: MessageModel[] = [];
        if (snapshot) {
          let docData: DocumentData[] = [];
          snapshot.forEach((doc) => {
            if (doc) {
              const data = doc.data();
              if (data) docData.push(data);
            }
          });

          if (docData) {
            const temp = Chat.ExtractMessageQuery(docData, snapshot);
            if (temp) messages = temp;
          }
        }

        onUpdate(messages);
      }
    );
  }

  static StopListeningForChatRoomMessages(roomID: string) {
    const key = `${roomID}@messages`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  static ListenForFeed(
    entry_limit: number = 25,
    hasLimit: boolean = false,
    onUpdate: (feedEntries: FeedEntryModel[] | undefined) => void | null
  ) {
    const firestore = getFirestore();
    let path = "";
    let keyPrefix = "";
    switch (User.Model?.userType) {
      case UserTypes.TYPE_ADMIN:
        path = `admin/${this.ADMIN_FEED}/feed`;
        keyPrefix = "admin";
        break;
      case UserTypes.TYPE_CHATTER:
        path = `chatter/${this.CHATTER_REQUEST_FEED}/feed`;
        keyPrefix = "chatter";
        break;
      case UserTypes.TYPE_MODERATOR:
        path = `admin/${this.ADMIN_FEED}/feed`;
        keyPrefix = "moderator";
        break;
    }
    const messagesRef = collection(firestore, path);

    let isStaging =
      FirebaseApp.environment === EnvironmentType.STAGING ? true : false;
    const queries: QueryConstraint[] = [];

    queries.push(orderBy("createdAt", "desc"));
    queries.push(where("isTestEntry", "==", isStaging));
    if (hasLimit) queries.push(limit(entry_limit));
    const messagesQuery = query(messagesRef, ...queries);
    const key = `${keyPrefix}@feed`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      messagesQuery,
      key,
      (snapshot) => {
        let feedEntries: FeedEntryModel[] = [];
        if (snapshot) {
          snapshot.forEach((doc) => {
            if (doc) {
              const data = doc.data();
              if (data) {
                // var timestamp = data.createdAt !== null ? data.createdAt.toDate() : undefined;
                // const timeDisplay = timestamp !== undefined ? timestamp.toLocaleDateString() + " - " + timestamp.toLocaleTimeString() : "Loading...";
                const timeDisplay =
                  data.createdAt !== null ? data.createdAt.toDate() : undefined;
                let feedEntry: FeedEntryModel = {
                  id: doc.id,
                  message: data.message
                    ? this.ExtractSingleMessageDoc(doc.id, data.message)
                    : undefined,
                  roomId: data.roomId,
                  siteOfOrigin: data.siteOfOrigin,
                  tag: data.tag,
                  userId: data.userId,
                  createdAt: timeDisplay,
                  append: data.append ? data.append : "",
                };

                feedEntries.push(feedEntry);
              }
            }
          });
        }
        const compareTime = (tagAction: string) => {
          const filterEntries: FeedEntryModel[] = feedEntries
            .reverse()
            .filter((item: any) => item.tag == tagAction);
          let userObjectArray: FeedEntryModel[] = [];
          let filterEntry: any;

          for (filterEntry of filterEntries) {
            let isFind: FeedEntryModel[] = [];

            // eslint-disable-next-line no-loop-func
            isFind = userObjectArray.filter((item: any) => {
              if (item.userId == filterEntry.userId) {
                let date1: Date = new Date(filterEntry.createdAt);
                let date2: Date = new Date(item.createdAt);
                if (
                  Math.abs(date1.getTime() - date2.getTime()) / 3600000 <=
                  1
                ) {
                  return item;
                }
              }
            });
            if (isFind.length == 0) {
              userObjectArray.push(filterEntry);
            }
          }

          feedEntries = feedEntries.filter(
            (data: any) => data.tag !== tagAction
          );
          feedEntries.push(...userObjectArray);
        };
        compareTime("Logged Out");
        compareTime("Logged In");
        feedEntries.sort((a: any, b: any) => a.createdAt - b.createdAt);
        feedEntries.reverse();
        onUpdate(feedEntries);
      }
    );
  }

  static StopListeningForFeed() {
    let keyPrefix = "";
    switch (User.Model?.userType) {
      case UserTypes.TYPE_ADMIN:
        keyPrefix = "admin";
        break;
      case UserTypes.TYPE_CHATTER:
        keyPrefix = "chatter";
        break;
      case UserTypes.TYPE_MODERATOR:
        keyPrefix = "moderator";
        break;
    }
    const key = `${keyPrefix}@feed`;
    FirestoreManager.DetachFirestoreListener(key);
  }

  static ListenForLastReadMessages(
    siteOfOrigin: string,
    onUpdate: (
      messages: ProfileAndLatestMessageModel[] | undefined
    ) => void | null
  ) {
    const firestore = getFirestore();
    const messagesRef = collection(firestore, `sites/${siteOfOrigin}/rooms`);
    const messagesQuery = query(messagesRef, orderBy("last_updated", "desc"));
    const key = `${User.Model?.uuid}@last-read-messages`;
    FirestoreManager.AttachFirestoreListenerWithQuery(
      messagesQuery,
      key,
      async (snapshot) => {
        let messages: ProfileAndLatestMessageModel[] = [];
        if (snapshot) {
          for (let i = 0; i < snapshot.size; i++) {
            let doc = snapshot.docs[i];
            const data = doc.data();
            if (data) {
              let id: string = data.profile_id;
              await this.GetLatestMessage(doc.id, siteOfOrigin).then((msg) => {
                let model: ProfileAndLatestMessageModel = {
                  profile_id: id,
                  message: msg,
                  read_status: data.read_status,
                };
                messages.push(model);
              });
            }
          }
        }

        onUpdate(messages);
      }
    );
  }

  static StopListeningForLastReadMessages() {
    const key = `${User.Model?.uuid}@last-read-messages`;
    FirestoreManager.DetachFirestoreListener(key);
  }
  //#endregion
}
