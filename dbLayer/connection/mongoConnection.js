// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

export class MongoConnection {
    constructor() {
        // remove this comment in future after making app name as socio
    }
    connectToMongo() {
        mongoose.connect('mongodb://127.0.0.1:27017/socio', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        })
    }
}