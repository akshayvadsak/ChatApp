import { getDatabase, ref, onValue, onDisconnect, set, serverTimestamp, Database, DatabaseReference } from "firebase/database";
import { Chat } from "../chat/Chat";
import { FirebaseApp } from "../FirebaseApp";
import { User } from "../user/User";

export class Presence {
    static isInitialized: boolean = false;
    static db: Database;
    static connectedRef: DatabaseReference;
    static roomRef: DatabaseReference;

    static unlockRoom = {
        room_locked: false,
        last_changed: serverTimestamp()
    }

    static lockRoom = {
        room_locked: true,
        last_changed: serverTimestamp()
    }

    public static async Initialize() {
        if (this.isInitialized)
            return;

        this.db = getDatabase(FirebaseApp.app);

        this.connectedRef = ref(this.db, '.info/connected');

        this.isInitialized = true;
        console.log("Initialized Presence");
    }

    public static async LockRoom(roomId: string, siteOfOrigin: string): Promise<void>
    {
        console.log(`Try Lock Room. Initialized? ${this.isInitialized}`);
        if (!this.isInitialized)
            return;
        
        console.log(`Room Lock Id: ${roomId} | Site Of Origin: ${siteOfOrigin}`);
        let roomPath = `hq/${siteOfOrigin}/${roomId}`;
        this.SetRoomRef(roomPath);

        await onValue(this.connectedRef, async (snap) => {
            if (snap.val() === false) {
                return;
            }

            await onDisconnect(this.roomRef).set(this.unlockRoom).then(async () => {
                
            });
        });

        let success = false;
        await set(this.roomRef, this.lockRoom).then(async () => {
            await Chat.SetRoomStatus(roomId, true, siteOfOrigin).then(async () => {          
                success = true;
            });
        });

        if (success)
            return Promise.resolve();
        else
            return Promise.reject();
    }

    public static async UnlockRoom(roomId: string, siteOfOrigin: string): Promise<void>
    {
        if (!this.isInitialized)
            return;
        
        let success = false;
        await set(this.roomRef, this.unlockRoom).then(async () => {
            await Chat.SetRoomStatus(roomId, false, siteOfOrigin).then(async () => {
                success = true;
                await onDisconnect(this.roomRef).cancel();
                this.RemoveRoomRef();
            })
        });

        if (success)
            return Promise.resolve();
        else
            return Promise.reject();
    }

    //#region Helpers
    public static async SetRoomRef(roomPath: string)
    {
        if (!this.isInitialized)
            return;

        this.roomRef = ref(this.db, roomPath);
    }

    public static async RemoveRoomRef()
    {
        if (!this.isInitialized)
            return;
        
        this.roomRef = null as any;
    }
    //#endregion

    // public static async Disconnect(): Promise<void> {
    //     if (!User.Model || !User.Model?.uuid || !this.isOnline)
    //         return;

    //     SessionHandler.DeleteItem(SessionKeys.SESSION_PRESENCE_ONLINE_STATUS);
    //     console.log("Presence - Deleted Session Key: Session Presence Online Status");
    //     const db = getDatabase(FirebaseApp.app);
    //     const site = Chat.SITE;
    //     const statusRef = ref(db, `${site}/users/${User.Model?.uuid}/status`)

    //     let isOfflineForDatabase = {
    //         online: false,
    //         last_changed: serverTimestamp()
    //     };

    //     let success = false;
    //     await set(statusRef, isOfflineForDatabase).then(async () => {
    //         await User.UpdateOnlineStatus(false);
    //         await Chat.UpdateChatterFeedOnlineStatus(false);
    //         await Chat.UpdateAdminFeedOnlineStatus(false);
    //         this.isOnline = false;
    //         console.log(`Presence - Set Online Status to False: ${this.isOnline}`);
    //         success = true;
    //     });

    //     if (success)
    //         return Promise.resolve();
    //     else
    //         return Promise.reject();
    // }

    // public static async Connect(): Promise<void> {
    //     if (!User.Model || !User.Model?.uuid)
    //         return;
        
    //     const db = getDatabase(FirebaseApp.app);
    //     const site = Chat.SITE;
    //     const statusRef = ref(db, `${site}/users/${User.Model?.uuid}/status`)

    //     let isOnlineForDatabase = {
    //         online: true,
    //         last_changed: serverTimestamp()
    //     };

    //     let success = false;
    //     console.log(`Presence - Is Online?: ${this.isOnline}`)
    //     await set(statusRef, isOnlineForDatabase).then(async () => {
    //         await User.UpdateOnlineStatus(true);
    //         console.log("Presence - Try Execute Local Feed Send");
    //         if (!this.isOnline) {
    //             console.log("Presence - Executing")
    //             await Chat.UpdateChatterFeedOnlineStatus(true);
    //             await Chat.UpdateAdminFeedOnlineStatus(true);
    //             this.isOnline = true;
    //         }
    //         success = true;
    //     });

    //     SessionHandler.SetItem(SessionKeys.SESSION_PRESENCE_ONLINE_STATUS, this.isOnline);

    //     if (success)
    //         return Promise.resolve();
    //     else
    //         return Promise.reject();
    // }
}