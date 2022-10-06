import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "../_metronic/i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core";
import AuthInit from "./modules/auth/redux/AuthInit";
import { Routes } from "./routing/Routes";

import { FirebaseApp } from "../client/FirebaseApp";
import { User } from "../client/user/User";
import { Presence } from "../client/system/Presence";
import { Analytics } from "../client/system/Analytics";

type Props = {
  basename: string;
};

FirebaseApp.Initialize();
Presence.Initialize();
Analytics.Initialize();

const App: React.FC<Props> = ({ basename }) => {
  User.Initialize();

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <LayoutProvider>
            <AuthInit>
              <Routes />
            </AuthInit>
          </LayoutProvider>
        </I18nProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export { App };
