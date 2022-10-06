export class SessionKeys
{
    public static get SESSION_USER_MODEL():string { return "SESSION_USER_MODEL"; }
    public static get SESSION_PROFILE_MODEL():string { return "SESSION_PROFILE_MODEL"; }
    public static get SESSION_EDIT_PROFILE_PREV_LOCATION():string { return "SESSION_EDIT_PROFILE_PREV_LOCATION"; }

    public static get SESSION_FEED_ENTRY_ROOM_ID(): string { return "SESSION_FEED_ENTRY_ROOM_ID"; }
}

export class SessionHandler
{
    public static SetItem(key: string, value: any)
    {
        var jsonValue: string = JSON.stringify(value);
        sessionStorage.setItem(key, jsonValue);
    }

    public static GetItem<Type>(key: string, defaultItem: Type) : Type
    {
        let object: Type = defaultItem;

        let jsonObj = sessionStorage.getItem(key);
        if (jsonObj) {
            object = JSON.parse(jsonObj);
        } 

        return object;
    }

    public static DeleteItem(key: string)
    {
        sessionStorage.removeItem(key);
    }

    public static ClearItems()
    {
        sessionStorage.clear();
    }
}