
import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    profilePicId: {
        type: String
    },
    friends: {
        type: Array
    }
},
    {
        timestamps: true
    }
);

export const User = new mongoose.model('user', userSchema);