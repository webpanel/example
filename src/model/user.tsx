// import * as React from 'react';

import { Entity } from "webpanel-admin";
import { api } from "./api";

export let user = new Entity({
  name: "User",
  dataSource: api,
})
  .stringField("email")
  .stringField("name")
  .setRender((values) => values.name);
