import mongoose from 'mongoose';

const researchProjectSchema = mongoose.Schema({

    researchgrp_id: {
        type: String,
        
    },
    research_name: {
        type: String,

    },
    requested_supervisor: {
        type: String,

    },
    topic_approval: {
        type: String,
       
    },
    supervisor_approval: {
        type: String,
       
    }
})

const researchProject = mongoose.model('researchProject', researchProjectSchema);

export default researchProject;
