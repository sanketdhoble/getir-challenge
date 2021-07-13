import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { mongo } from "./db/mongo";
import { validateRecordRequest } from './utils/request-validator';

const PORT = process.env.PORT || 3000;
const app: Express = express();
mongo.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import { recordsRouter } from './routes/records';
app.use('/api/records', validateRecordRequest, recordsRouter);

app.listen(PORT, () => console.log(`Running on ${PORT}`));