import express from 'express';
import mongoose from 'mongoose';

import Users from '../models/users.js';


const router = express.Router();

export const login = async (req, res) => {
    try {

        const {email, password} = req.body;
        const user = await Users.findOne({user_email: email});

        if (user == null) throw new Error('invalid email');

        if (user.user_password === password) {
            user.user_password = '';
            res.status(200).json(user);
            return;
        }
        res.status(401).json({message: 'password is incorrect'});

    } catch (error) {
        console.log('ERROR OCCURRED')
        console.error(error);
        res.status(404).json({message: error.message});
    }
}

export const getusers = async (req, res) => {
    try {
        const user = await Users.find();

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getuser = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await Users.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const adduser = async (req, res) => {
    const {user_id, user_role, user_email, user_password} = req.body;

    const newusers = new Users(req.body)

    try {
        await newusers.save();

        res.status(201).json(newusers);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updateuser = async (req, res) => {
    const {id} = req.params;
    const {user_id, user_role, user_email, user_password} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateduser = {user_id, user_role, user_email, user_password, _id: id};

    await Users.findByIdAndUpdate(id, updateuser, {new: true});

    res.json(updateduser);
}

export const deleteuser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Users.findByIdAndRemove(id);

    res.json({message: "Post deleted successfully."});
}


export const getUsersFromGroup = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await Users.find({user_groups: id}).select('_id user_email user_Fname user_Lname user_designation user_avatar');
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}



export default router;