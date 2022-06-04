import mongoose from 'mongoose';
const presentationSchema =mongoose.Schema({
    studentGroup_number: {
        type: String,
        required: true
    },
    presentationDate: {
        type: String,
        required: true   
    },
    results: {
        type: String,
        required: true   
    },
    panel_no: {
        type: String,
        required: true   
    },
    feedback: {
        type: String,
        required: true   
    }
})
var presentation = mongoose.model('presentation', presentationSchema);

export default presentation;
