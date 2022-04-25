import express from 'express';
import mongoose from 'mongoose';

import users from '../models/users.js';

const router = express.Router();

export const getsupervisor = async (req, res) => {
    try {
        const supervisor = await supervisors.find();

        res.status(200).json(supervisor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getsupervisor = async (req, res) => {
    const { id } = req.params;
    try {
        const supervisor = await supervisors.findById(id);


        res.status(200).json(supervisor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addsupervisor = async (req, res) => {
    const { supervisorId, email, password, firstname, lastname, telephone, supervisorType} = req.body;

    const newsupervisors = new supervisors({ supervisorId, email, password, firstname, lastname, telephone, supervisorType })

    try {
        await newsupervisors.save();

        res.status(201).json(newsupervisors );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatesupervisor = async (req, res) => {
    const { id } = req.params;
    const { supervisorId, email, password, firstname, lastname, telephone, supervisorType } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatesupervisor = {  supervisorId, email, password, firstname, lastname, telephone, supervisorType, _id: id };

    await users.findByIdAndUpdate(id, updateuser, { new: true });

    res.json(updatedsupervisor);
}

export const deletesupervisor = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await users.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



export default router;