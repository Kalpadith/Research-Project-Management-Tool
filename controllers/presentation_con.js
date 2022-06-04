import express from 'express';
import mongoose from 'mongoose';


import presentation from '../models/presentation.js';

const router = express.Router();

export const getpresentations = async (req, res) => { 
    try {
        const Presentation = await presentation.find();
       // console.log(Presentation);        
        res.status(200).json(Presentation)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getpresentation = async (req, res) => { 
    const { id } = req.params;

    try {
        const Presentation = await presentation.findById(id);
        
        res.status(200).json(Presentation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addpresentation = async (req, res) => {
    const { studentGroup_number, presentationDate, results, panel_no, feedback} = req.body;

    const newp = new presentation({studentGroup_number, presentationDate, results, panel_no, feedback })

    try {
        await newp.save();

        res.status(201).json(newp );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatepresentation = async (req, res) => {
    const { id } = req.params;
    const {studentGroup_number, presentationDate, results, panel_no, feedback} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No presentation with id: ${id}`);

    const updatepresentation = {studentGroup_number, presentationDate, results, panel_no, feedback, _id: id };

    await presentation.findByIdAndUpdate(id, updatepresentation, { new: true });

    res.json(updatepresentation);
}

export const deletepresentation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No presentation with id: ${id}`);

    await presentation.findByIdAndRemove(id);

    res.json({ message: "Presentation deleted successfully." });
}



export default router;