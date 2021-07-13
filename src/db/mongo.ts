import Mongoose = require('mongoose');
import { App } from '../config';

export class Mongo {

    private db: Mongoose.Connection;
    private autoReconnect = true;
    constructor() {
        this.db = <any>null; //new Mongoose.Connection;
    }

    public async connect(): Promise<boolean> {
        const connectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        };
        Mongoose.connect(App.mongoURL, <any>connectOptions);
        this.db = Mongoose.connection;
        await this.subscribeToMongoEvents();
        return true;
    }

    // subscribe to mongodb events and take action accordingly
    private async subscribeToMongoEvents(): Promise<void> {
        this.db.on('connecting', () => {
            console.log('Connecting to MongoDB...');
        });

        this.db.on('connected', () => {
            console.log('MongoDB connected!');
        });

        this.db.on('error', (error) => {
            console.log('Error in MongoDb connection: ', error);
            this.db.close();
        });

        this.db.on('reconnected', () => {
            console.log('MongoDB reconnected!');
        });

        this.db.on('disconnected', () => {
            console.log('MongoDB disconnected!');
            // check if we should reconnect again on disconnect
            if (this.autoReconnect) {
                this.connect();
            }
        });

        return new Promise((resolve, reject) => {
            this.db.once('open', () => {
                console.log('MongoDB connection opened!');
                resolve();
            });
        });
    }

    public async disconnect(): Promise<boolean> {
        this.autoReconnect = false; // else mongoose will reconnect again
        console.log('Closing the MongoDB conection');
        try {
            await this.db.close();
            console.log('Closed the MongoDB conection successfully');
            return true;
        } catch (err) {
            console.log('Closing MongoDB conection failed', err);
            return false;
        }
    }
}

export const mongo = new Mongo();