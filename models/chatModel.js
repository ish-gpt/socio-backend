import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    members: Array
}, {
    timestamps: true
})

export const Chat = new mongoose.model('chats', chatSchema);