import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    studentGroup:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "researchProject",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Chats = mongoose.model('chat', chatSchema);

export default Chats;
