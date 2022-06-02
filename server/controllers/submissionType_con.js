import express from "express";
import mongoose from "mongoose";
import submissionType from "../models/submissionType.js";


const router = express.Router();

export const getsubs = async (req, res)  => {
    try{
        const sub = await submissionType.find();
        res.status(200).json(sub);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getsub = async (req,res) => {
    const { id } = req.params;
    try{
        const sub = await submissionType.findById(id);

        res.status(200).json(sub);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addsub = async (req,res) => {
    const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no} = req.body;
    const newsub = new submissionType ({submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no})
    try{
        await newsub.save();
        res.status(200).json(newsub);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatesub = async (req,res) => {
    const { id } = req.params;
    const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatesub = {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no, _id: id};
    await submissionType.findById(id, updatesub, {new: true});
    res.json(updatesub);

}

export const deletesub = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id:${id}`);
    
    await submissionType.findByIdAndRemove(id);

    res.jason({message: "Submission type deleted successfully."});
}

export default router;

