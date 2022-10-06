import { collection, addDoc, arrayUnion } from "@firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { User } from "../user/User";
import { HttpsActionNames, HttpsHandler } from "./HttpsHandler";

export class Mail
{
    public static async SendMessageAsEmail(uuid: string, username: string, profilePicture: string, profileName: string, message: string) {
        const firestore = getFirestore();
        let mailRef = collection(firestore, "mail");

        const params = {
            toUids: arrayUnion(uuid),
            template: {
                name: "automated_message",
                data: {
                    username: username,
                    profilepicture: profilePicture,
                    profilename: profileName,
                    message: message,
                },
            },
        };

        let success = false;
        await addDoc(mailRef, params).then(() => {
            success = true;
        });

        if (success)
            return Promise.resolve();
        else
            return Promise.reject();
    }

    public static async SendMessageAsEmailHttp(toEmail: string, emailType: string, subject: string, data: any): Promise<void>
    {
        let url = `${HttpsHandler.BASE_URL}/${HttpsActionNames.SEND_EMAIL}`

        let params = {
            recepient: toEmail,
            emailType: emailType,
            subject: subject,
            params: data
        };

        let successProcess = false;
        await HttpsHandler.SendPostRequest(url, params, true, (success, data, message) => {
            successProcess = success;
        }, (success, message) => {
            successProcess = false;
        });

        if (successProcess)
            return Promise.resolve();
        else
            return Promise.reject();
    }
}

export const EmailType = {
    get CREDENTIALS_SENT(): string {
        return "credentials_sent";
    },
    get RESET_PASSWORD(): string {
        return "reset_password";
    },
    get VERIFY_EMAIL(): string {
        return "verify_email";
    },
    get AUTOMATED_MESSAGE(): string {
        return "automated_message";
    },
};