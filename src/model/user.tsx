// import * as React from 'react';

import { Entity } from "webpanel-admin";
import { api } from "./api";
import { task } from "./task";

export let user = new Entity({
  name: "User",
  dataSource: api,
})
  .stringField("email")
  .stringField("firstName")
  .stringField("lastName")
  .fileField("file", {})
  .relationshipField("tasks", {
    targetEntity: () => task,
    type: "toMany",
  })
  .setRender((values) => values.file);
