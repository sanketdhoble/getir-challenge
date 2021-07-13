import dotenv from 'dotenv';

dotenv.config();

export const App = {

    mongoURL: <string>process.env.MONGO_URL
}