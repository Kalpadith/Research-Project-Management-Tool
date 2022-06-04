 import express from 'express';
import mongoose from 'mongoose';

import Chats from "../models/chat.js";

const router = express.Router();

export const getChats = async (req, res) => {
    try {
        res.status(200).json(await Chats.find());
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getChat = async (req, res) => {
    const {id} = req.params;
    try {
        res.status(200).json(await Chats.findById(id));
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getChatByGroupId = async (req, res) => {
    const {id} = req.params;
    try {


        const ret = await Chats.find({studentGroup: id})
            .populate('user', '_id user_Fname user_Lname user_role user_avatar')
            .select("message user createdAt");



        res.status(200).json(ret);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addMessage = async (req, res) => {


    try {
        const newChats = new Chats(req.body);
        await newChats.save();

        res.status(201).json(newChats);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updateChat = async (req, res) => {
    const {id} = req.params;
    const {studentGroupId, userId, role, message} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedChat = {studentGroupId, userId, role, message, _id: id};

    await Chats.findByIdAndUpdate(id, updatedChat, {new: true});

    res.json(updatedChat);
}

export const deleteChat = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Chats.findByIdAndRemove(id);

    res.json({message: "Post deleted successfully."});
}


export default router;
