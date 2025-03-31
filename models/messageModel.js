
import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true
    },
    recieverId: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    image: {
        type: Buffer
    }
}, {
    timestamps:true
});

export const Message = new mongoose.model('messages', messagesSchema);