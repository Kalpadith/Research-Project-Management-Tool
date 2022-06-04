import express from "express";
import mongoose from "mongoose";
import markingScheme from "../models/markingScheme.js";

const router = express.Router();

export const getschemes = async (req, res)  => {
    try{
        const scheme = await markingScheme.find();
        res.status(200).json(scheme);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getscheme = async (req,res) => {
    const { id } = req.params;
    try{
        const scheme = await markingScheme.findById(id);

        res.status(200).json(scheme);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addscheme = async (req,res) => {
    const {scheme_id, scheme_details, submission_id} = req.body;
    const newscheme = new markingScheme ({scheme_id, scheme_details, submission_id})
    try{
        await newscheme.save();
        res.status(200).json(newscheme);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatescheme = async (req,res) => {
    const { id } = req.params;
    const {scheme_id, scheme_details, submission_id} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No marking scheme with id: ${id}`);

    const updatescheme = {scheme_id, scheme_details, submission_id, _id: id};
    await markingScheme.findById(id, updatescheme, {new: true});
    res.json(updatescheme);

}

export const deletescheme = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No marking scheme with id:${id}`);
    
    await markingScheme.findByIdAndRemove(id);

    res.json({message: "Marking Scheme deleted successfully."});
}

export default router;

