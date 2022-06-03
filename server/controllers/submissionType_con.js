import express from "express";
import mongoose from "mongoose";
import SubmissionType from "../models/submissionType.js";
import Users from "../models/users.js";


const router = express.Router();

export const getsubs = async (req, res)  => {
    try{
        const sub = await SubmissionType.find();
        res.status(200).json(sub);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getsub = async (req,res) => {
    const { id } = req.params;
    try{
        const sub = await SubmissionType.findById(id);

        res.status(200).json(sub);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}
// export const getsubmission = async (req,res) => {
//     const { id } = req.params;
//     try{
//         const sub = await submissionType.findById(id);
//
//         res.status(200).json(sub);
//     }catch(error){
//         res.status(404).json({message: error.message});
//
//     }
// }

export const addsub = async (req,res) => {
    const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no} = req.body;
    const newsub = new SubmissionType ({submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no})
    try{
        await newsub.save();
        res.status(200).json(newsub);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const addEvaluation = async (req,res) => {
    try {
        const {id, marks, comment} = req.body;
        const sub = await SubmissionType.findById(id);
        sub.marks = marks;
        sub.comment = comment;
        await SubmissionType.findByIdAndUpdate(id, sub, {new: true});

        res.status(200).json(sub);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatesub = async (req,res) => {
    const { id } = req.params;
    const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatesub = {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no, _id: id};
    await SubmissionType.findById(id, updatesub, {new: true});
    res.json(updatesub);

}

export const updatesubmission = async (req,res) => {
    const { id } = req.params;
    const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no,marks,comment} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatesubmission = {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no,marks,comment, _id: id};
    await SubmissionType.findById(id, updatesub, {new: true});
    res.json(updatesubmission);

}




// export const updatesub = async (req,res) => {
//     const { id } = req.params;
//     const {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no} = req.body;
//
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//
//     const updatesub = {submission_id, submission_name, Submission_category, document, due_date,submission,studentgroup_no, _id: id};
//     await submissionType.findById(id, updatesub, {new: true});
//     res.json(updatesub);
//
// }

export const deletesub = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id:${id}`);
    
    await SubmissionType.findByIdAndRemove(id);

    res.jason({message: "Submission type deleted successfully."});
}

export default router;

