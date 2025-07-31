import { User } from "../models/userModel.js";
import { Chat } from "../models/chatModel.js";

export const registerUser = async (req, res) => {
    const { userId } = req.body;
    const friends = []
    const user = new User({ _id: userId, friends: friends });
    try {
        const result = await user.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error registering user",
            error: error
        })
    }
}

export const addToFriendsList = async (req, res) => {
    const { friendId } = req.params;
    const { userId } = req.headers;

    try {
        // const result = await User.find({ userId });
        // let friendsArr = [...result[0], friendId];
        const result = await User.findOneAndUpdate({ userId },
            { $addToSet: { friends: friendId } },
            { new: true });
        createChatBetweenUsers(friendId, userId); //handle it in different route
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: "Error adding as friend",
            error: error
        })
    }
}

const createChatBetweenUsers = async (friendId, userId) => {
    try {
        const members = [friendId, userId]; // req.header is not set therefore in db member array has one null value
        const chat = new Chat({ members: members });
        await chat.save();
    } catch (error) {

    }
}