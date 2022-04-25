import mongoose from 'mongoose';

const supervisorSchema = mongoose.Schema({

    supervisorId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    supervisorType: {
        type: String,
        required: true
    }
})

const supervisors = mongoose.model('supervisor', supervisorSchema);
