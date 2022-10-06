import {
  collection,
  DocumentData,
  query,
  Query,
  serverTimestamp,
  addDoc,
} from "@firebase/firestore";
import { getFirestore, limitToLast, orderBy } from "firebase/firestore";

export class News {
  static Initialize() {
    //do nothing for now
  }

  static GetNews(entry_limit: number = 25): Query<DocumentData> {
    const firestore = getFirestore();
    // let messagesRef = collection(firestore, `news`);
    // let messagesQuery = query(
    //   messagesRef,
    //   orderBy("createdAt"),
    //   limitToLast(entry_limit)
    // );
    let messagesRef = collection(firestore, `news`);
    let messagesQuery = query(
      messagesRef,
      orderBy("createdAt"),
      limitToLast(entry_limit)
    );
    return messagesQuery;
  }

  static async AddNews(uuid: string, message: string) {
    let params: any = {
      uuid: uuid,
      message: message,
    };
    const firestore = getFirestore();
    params.createdAt = serverTimestamp();
    let messagesRef = collection(firestore, `news`);
    await addDoc(messagesRef, params);
  }
}
