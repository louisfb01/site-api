// App config from .env
import * as dotenv from "dotenv";
dotenv.config();

// server.js
import express from 'express';
import bodyParser from 'body-parser';

import WebSocketAdapter from "./utils/WebSocketAdapter";
import GetHospitalInfoListeningEvent from "./listeningevents/GetHospitalInfoListeningEvent";
import GetSiteInfoListeningEvent from "./listeningevents/GetSiteInfoListeningEvent";
import GetExecInfoListeningEvent from "./listeningevents/GetExecInfoListeningEvent";
import GetStatsSummarizeListeningEvent from "./listeningevents/GetStatsSummarizeListeningEvent";
import GetLearningPrepareListeningEvent from "./listeningevents/GetLearningPrepareListeningEvent";
import GetLearningTrainListeningEvent from "./listeningevents/GetLearningTrainListeningEvent";
import GetLearningEvaluateListeningEvent from "./listeningevents/GetLearningEvaluateListeningEvent";
import version from "./utils/version";

var app = express();
app.use(bodyParser.json());

// start the server
var port = process.env.CODA_SITE_API_SERVER_PORT;
app.listen(port, function () {
  console.log(`⚡️[coda-site-api]: Server is running at http://localhost:${port}`);
  console.log(`⚡️[coda-site-api]: Running ${version.getBuildVersion()} version of build`);
});

WebSocketAdapter.registerListeningEvents([
  new GetHospitalInfoListeningEvent(),
  new GetSiteInfoListeningEvent(),
  new GetExecInfoListeningEvent(),
  new GetStatsSummarizeListeningEvent(),
  new GetLearningPrepareListeningEvent(),
  new GetLearningTrainListeningEvent(),
  new GetLearningEvaluateListeningEvent(),
]);
