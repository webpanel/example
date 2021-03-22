// import * as React from 'react';

import { Entity } from "webpanel-admin";
import { api } from "./api";
import { user } from "./user";

export let task = new Entity({
  name: "Task",
  dataSource: api,
})
  .stringField("title")
  .booleanField("completed")
  .relationshipField("user", {
    targetEntity: () => user,
    type: "toOne",
  })
  .setRender((values) => values.user.firstName);
