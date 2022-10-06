import { initializeApp } from "firebase/app";

export class FirebaseApp {
  static app: any;
  static environment: EnvironmentType;

  static appConfig: {} = {
    apiKey: "AIzaSyCgjDxemLiKHj0YJlunzCDvQNT1NKA2hnU",
    authDomain: "chat-hub-1.firebaseapp.com",
    databaseUrl: "https://chat-hub-1-default-rtdb.firebaseio.com/",
    projectId: "chat-hub-1",
    storageBucket: "chat-hub-1.appspot.com",
    messagingSenderId: "435526947076",
    appId: "1:435526947076:web:5d7066440a905e67020051",
    measurementId: "G-6H77T3Y9PW",
  };
  static Initialize() {
    this.app = initializeApp(this.appConfig);
    this.environment = EnvironmentType.STAGING;
  }
}

export class EnvironmentType {
  public static get STAGING(): string {
    return "STAGING";
  }
  public static get PRODUCTION(): string {
    return "PRODUCTION";
  }
}
