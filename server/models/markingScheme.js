import mongoose from 'mongoose';

const markingSchemeSchema = mongoose.Schema({
   
    scheme_id: {
        type: String,
        required: true
    },
    scheme_details: {
        type: String,
        required: true   
    },
    submission_id: {
        type: String,
        required: true   
    }
})

var markingScheme = mongoose.model('markingScheme', markingSchemeSchema);

export default markingScheme;