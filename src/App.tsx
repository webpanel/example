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
      logoURL="/logo-wide.png"
      logoCollapsedURL="/logo.png"
      menu={{ theme: "dark" }}
      entities={() => entities}
    />
  );
};
