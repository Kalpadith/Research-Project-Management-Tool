import express from 'express';
import mongoose from 'mongoose';
import Submission from '../models/submission.js';

const router = express.Router();

export const getSubmissionsTypes = async (req, res) => {
    try {
        const rp = await Submission.find();

        res.status(200).json(rp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSubmissionType = async (req, res) => {
    const { id } = req.params;

    try {
        const rp = await Submission.findById(id);

        res.status(200).json(rp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addSubmissionTypes = async (req, res) => {
    console.log(req.body)
    const newsubmissiontypes = new Submission(req.body)

    try {
        await newsubmissiontypes.save();

        res.status(201).json(newsubmissiontypes );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSubmissionType = async (req, res) => {
    const { id } = req.params;
    const {submission_id, submission_name, Submission_category, document, due_date, studentgroup_no} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No researchProject with id: ${id}`);

    const updatsubmissiontype = {submission_id, submission_name, Submission_category, document, due_date, studentgroup_no, _id: id };

    await submission.findByIdAndUpdate(id, updatsubmissiontype, { new: true });

    res.json(updatsubmissiontype);
}

export const deleteSubmissionType = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await submission.findByIdAndRemove(id);

    res.json({ message: "submission deleted successfully." });
}



export default router;
