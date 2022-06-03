import Users from '../models/users.js';
import mongoose from "mongoose";
import ResearchProject from "../models/researchProject.js";
import SubmissionType from "../models/submissionType.js";

export const assignUserForGroup = async (req, res) => {
    const {group_id, user_id} = req.body;
    try {
        const result = await Users.findByIdAndUpdate(user_id,
            {
                $push: {user_groups: group_id}
            }, {
                new: true,
                useFindAndModify: false
            });

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}




export const removeUserFromGroup = async (req, res) => {
    const {group_id, user_id} = req.body;
    try {
        const result = await Users.findByIdAndUpdate(user_id,
            {
                $pull: {user_groups: group_id}
            }, {
                new: true,
                useFindAndModify: false
            });

        res.status(201).json(result);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getUserGroups = async (req, res) => {

    const {id} = req.query;
    console.log(id);
    try {
        const result = await Users.findById(id).populate('user_groups');
        console.log(result);
        res.status(200).json(result.user_groups);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

export const acceptTopic = async (req, res) => {
    const { id } = req.body;

    try {
        const sub = await ResearchProject.findById(id);
        sub.supervisor_approval = 'Approved';
        await ResearchProject.findByIdAndUpdate(id, sub, {new: true});

        res.status(200).json(sub);
    }catch(error){
        res.status(404).json({message: error.message});
    }


}
