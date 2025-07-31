import { User } from "../models/userModel.js";
import { Message } from "../models/messageModel.js";

export const saveMessages = async (req, res) => {
    try {
        const reqBody = req.body;
        const messg = new Message({
            chatId: `${reqBody.sender_id}_${reqBody.reciever_id}`,
            senderId: reqBody.sender_id,
            recieverId: reqBody.reciever_id,
            text: reqBody.text
        })
        // console.log("======", reqBody);
        const doc = await messg.save();
        console.log(doc);

        res.status(200).json({message:"Message Saved"});
    } catch (error) {
        res.status(500).json({
            message: "Error while saving message",
            error: error
        })
    }
    
}

export const getMessages = async (req, res) => {
    try {
        const friendsId = req.params.id;
        const userId = req.headers.senderid;
        const chatId = `sen`
        console.log(userId)
        res.status(200).json({
            message:'Chat Fetch Success'
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while fetching message",
            error: error
        })
    }
}