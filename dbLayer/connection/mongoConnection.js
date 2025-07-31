// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;
import 'dotenv/config';

export class MongoConnection {
    constructor() {
        // remove this comment in future after making app name as socio
    }
    connectToMongo() {
        console.log("Imside")
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        })
    }
}