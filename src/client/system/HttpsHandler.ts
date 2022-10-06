export class HttpsActionNames 
{
    public static get LAST_MESSAGE_HANDLER(): string { return "lastMessageHandler"; }
    public static get SEND_EMAIL(): string { return "sendEmail"; }
    public static get GET_SIGN_UP_COUNT(): string { return "getSignUpCount"; }
    public static get GET_COUNT_BY_STATUS(): string { return "getUserCountByAutoGenerationStatus"; }
    public static get GET_DOUBLE_OPT_IN_COUNT(): string { return "getAllDoubleOptInUsers"; }
}

export class HttpsHandler 
{
    public static get BASE_URL(): string { return "https://us-central1-chat-hub-1.cloudfunctions.net"; }
    public static get CHAT_HUB_1(): string { return "chat-hub-1"; }
    public static get US_CENTRAL_1() : string { return "us-central1"; }

    private static TOKEN: string = "6d41ca31-971f-46b2-8017-1d72b7699d20";

    public static async SendGetRequest(url: string, noParams: boolean, onSuccess: (success: boolean, data: any, message: string) => void | null, onFail: (success: boolean, message: string) => void | null)
    {
        let getUrl: string = `${url}${noParams ? "?" : "&"}token=${this.TOKEN}`;
        await fetch(getUrl)
            .then(response => response.json())
            .then((object) => {
                onSuccess(object.success, object.data, object.message);
            }).catch((reason) => {
                onFail(false, reason.message);
            })
    }

    public static async SendPostRequest(url: string, data: any, noParams: boolean, onSuccess: (success: boolean, data: any, message: string) => void | null | Promise<void>, onFail: (success: boolean, message: string) => void | null) {
        let postUrl: string = `${url}${noParams ? "?" : "&"}token=${this.TOKEN}`;

        await fetch(postUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then((object) => {
                onSuccess(object.success, object.data, object.message);
            }).catch((reason) => {
                onFail(false, reason.message);
            })
    }
}