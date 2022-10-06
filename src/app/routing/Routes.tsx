/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { Auth, getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { FC, useState } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { PrivateRoutes } from "./PrivateRoutes";
import { Logout, AuthPage } from "../modules/auth";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { RootState } from "../../setup";
import { MasterInit } from "../../_metronic/layout/MasterInit";
import { User, UserTypes } from "../../client/user/User";
import { Chat } from "../../client/chat/Chat";
import {
  SessionHandler,
  SessionKeys,
} from "../../client/system/SessionHandler";

const Routes: FC = () => {
  //const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
  const [isAuthorized, setIsAuthorized] = useState(User.IsLoggedIn);
  const auth = getAuth();

  const checkForUserModel = () => {
    setTimeout(() => {
      if (User.Model != null) setIsAuthorized(true);
      else checkForUserModel();
    }, 500);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      checkForUserModel();
    } else {
      // User is signed out
      // ...
      setIsAuthorized(false);
    }
  });

  return (
    <>
      <Switch>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect
            from="/auth"
            to={
              User.Model?.userType === UserTypes.TYPE_PROFILE_CREATOR
                ? "/profile-creation"
                : "/"
            }
          />
        )}

        <Route path="/error" component={ErrorsPage} />
        <Route path="/logout" component={Logout} />

        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to="/auth/login" />
        ) : (
          <>
            <MasterLayout>
              <PrivateRoutes />
            </MasterLayout>
          </>
        )}
      </Switch>
      <MasterInit />
    </>
  );
};

export { Routes };
