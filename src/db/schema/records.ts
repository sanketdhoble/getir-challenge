import Mongoose = require('mongoose');
const { Schema } = Mongoose;

const record = new Schema({
    key: {
        type: String,
        required: true
    },
    counts: {
        type: [Number],
        required: true
    },
    value: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

export const recordSchema = Mongoose.model('records', record);