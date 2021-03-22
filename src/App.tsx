import "moment/locale/cs";

import * as React from "react";

import { AdminLayout } from "webpanel-admin";
import { entities } from "./model";

export const App = () => {
  return (
    <AdminLayout
      logout={() => {
        // do logout
      }}
      // auth={{
      //   type: "oauth",
      //   oauthTokenURL: ENV.REACT_APP_TOKEN_URL,
      //   clientId: ENV.REACT_APP_CLIENT_ID,
      //   clientSecret: ENV.REACT_APP_CLIENT_SECRET,
      //   scope: ENV.REACT_APP_SCOPE,
      //   userNameGetter: (session: AuthSession) => {
      //     const payload = session.getTokenPayload();
      //     return payload && payload.user && payload.user.username;
      //   },
      // }}
      logoURL="/logo-wide.png"
      logoCollapsedURL="/logo.png"
      menu={{ theme: "dark" }}
      entities={() => entities}
    />
  );
};
