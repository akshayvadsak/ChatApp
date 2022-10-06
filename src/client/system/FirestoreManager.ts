import { collection, DocumentData, Query, QuerySnapshot } from "@firebase/firestore";
import { doc, getFirestore, onSnapshot, Unsubscribe } from "firebase/firestore";

const firestoreListeners: Map<string, Unsubscribe> = new Map<string, Unsubscribe>(); 

export class FirestoreCollectionNames
{
  static BANNED = "banned";
  static PROFILES = "profiles";
  static ROOMS = "rooms";
  static TIMERS = "timers";
  static USERS = "users";
}

export class FirestoreManager
{
    static AttachFirestoreListener(collectionRef: string, document: string, key: string, onUpdate: (data: DocumentData | undefined) => void | null)
    {
        console.log(`FirestoreManager - Attempting to Attach Listener to ${key}`);
        if (!firestoreListeners.has(key)) 
        {
          const firestore = getFirestore();
          const firestoreCollection = collection(firestore, collectionRef);
          const firestoreDoc = doc (firestoreCollection, document);
          const unsub = onSnapshot(firestoreDoc, (doc) => {
            onUpdate(doc);
          })
          firestoreListeners.set(key, unsub);
          console.log(`FirestoreManager - Attached Listener to ${key}`);
        } else 
        {
          console.log(`FirestoreManager - Listener for ${key} already exists`);
        }
    }

    static AttachFirestoreListenerWithQuery(q: Query<DocumentData>, key: string, onUpdate: (snapshot: QuerySnapshot<DocumentData> | undefined) => void | null | Promise<void>)
    {
      console.log(`FirestoreManager - Attempting to Attach Listener to ${key}`);
      if (!firestoreListeners.has(key))
      {
        const unsub = onSnapshot(q, (querySnapshot) => {
          let snapshot: QuerySnapshot<DocumentData> = undefined as any;
          if (querySnapshot)
            snapshot = querySnapshot;
          onUpdate(snapshot);
        })
        firestoreListeners.set(key, unsub);
        console.log(`FirestoreManager - Attached Listener to ${key}`);
      } else
      {
        console.log(`FirestoreManager - Listener for ${key} already exists`);
      }
    }

    static DetachFirestoreListener(key: string)
    {
      console.log(`FirestoreManager - Attempting to Detach Listener for ${key}`);
      if (firestoreListeners.has(key))
      {
        const unsub = firestoreListeners.get(key) as Unsubscribe;
        unsub();
        firestoreListeners.delete(key);
        console.log(`FirestoreManager - Detached Listener for ${key}`);
      } else 
      {
        console.log(`FirestoreManager - Listener for ${key} does not exist`);
      }
    }
}