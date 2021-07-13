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

// middleware to validate record api request body
app.use('/api/records', validateRecordRequest, recordsRouter);

const server = app.listen(PORT, () => console.log(`Running on ${PORT}`));

process.on('uncaughtException', (err: Error) => {
    console.log('UncaughtException', err);
});

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    console.log('UnhandledRejection', reason);
});

process.on('SIGINT', () => {
    let exitCode = 0;

    try {
        console.log('API - Got SigInt');
        setTimeout(gracefulShutDown, 500);
    } catch (err) {
        exitCode = 1;
        console.log('Disconnecting failed', err);
    } finally {
        console.log('Exiting process');
        process.exit(exitCode);
    }
});

const gracefulShutDown = () => {
    server.close((err: any) => {
        mongo.disconnect();
        if (err) {
            console.error(err);
            process.exit(1);
        }
    })
}