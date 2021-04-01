// import * as React from 'react';

import { Entity } from "webpanel-admin";
import { api } from "./api";
import { user } from "./user";

export let todo = new Entity({
  name: "Todo",
  dataSource: api,
})
  .stringField("title")
  .booleanField("completed")
  .relationshipField("user", {
    targetEntity: () => user,
    type: "toOne",
    render: (values) => values.user,
  })
  .setRender((values) => values.user.firstName);
