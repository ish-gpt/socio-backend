import { User } from "../models/userModel.js";
import { Message } from "../models/messageModel.js";

export const saveMessages = async (req, res) => {
    //configure how file is sent to backend complete this method 
    const reqBody = req.body.data;
    console.log("======", reqBody);

    res.send('Message Saved');
}