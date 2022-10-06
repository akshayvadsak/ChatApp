import { getAnalytics, logEvent } from "firebase/analytics";
import { FirebaseApp } from "../FirebaseApp";
import ReactGA from "react-ga4";
import { string } from "yup";
import { User } from "../user/User";

export class Analytics {
  static analytics: any;
  static TRACKING_ID = "G-S4TW6QRR2Y";
  static defaultPayload: Map<string, any> = new Map<string, any>();

  static Initialize() {
    this.analytics = getAnalytics(FirebaseApp.app);
    ReactGA.initialize(this.TRACKING_ID);
    ReactGA.send("pageview");
  }

  static GetPayload(noUniversal: boolean, payload?: Map<string, any>): any {
    let returnPayload: { [key: string]: string | number | boolean } = {};

    // this.defaultPayload.set("uuid", User.Model?.uuid);
    // this.defaultPayload.set("credits", User.Model?.credits);
    // this.defaultPayload.set("user_type", User.Model?.userType);
    // this.defaultPayload.set("user_status", User.Model?.isPaidUser);
    // this.defaultPayload.set("email_verified", User.CheckEmailVerificationStatus());
    // this.defaultPayload.set("is_test_account", User.Model?.isTestAccount ? 1 : 0);

    if (!noUniversal) {
      returnPayload["uuid"] = User.Model?.uuid;
      returnPayload["credits"] = "null";
      returnPayload["user_type"] = User.Model?.userType;
      returnPayload["user_status"] = "null";
      returnPayload["email_verified"] = "null";
      returnPayload["is_test_account"] = User.Model?.isTestAccount ? 1 : 0;
    }

    if (payload) {
      payload.forEach((value, key) => {
        returnPayload[key] = value;
      });
    }

    return returnPayload;
  }

  static SendAnalyticsEvent(
    eventId: string,
    payload?: Map<string, any>,
    noUniversal: boolean = false
  ) {
    let newPayload: { [key: string]: string | number | boolean } = {};

    newPayload = this.GetPayload(noUniversal, payload);

    logEvent(this.analytics, eventId, newPayload);
    ReactGA.event(eventId, newPayload);
  }
}

export class AnalyticsId {
  public static get SEND_CHAT_MESSAGE(): string {
    return "send_chat_message";
  }
  public static get PURCHASE_SUCCESS(): string {
    return "purchase_success";
  }
  public static get PURCHASE_CANCELLED(): string {
    return "purchase_cancelled";
  }
  public static get VERIFY_EMAIL(): string {
    return "verify_email";
  }
  public static get SEND_EMAIL(): string {
    return "send_email";
  }
}
