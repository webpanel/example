import {
  DataSource,
  ResponseDataTransformer,
  RestConnector,
} from "webpanel-data";

import { ENV } from "../env";

const connector = new RestConnector({
  responseDataTransformer: new ResponseDataTransformer(),
});

export const api = new DataSource("api", connector, ENV.REACT_APP_API_URL);
