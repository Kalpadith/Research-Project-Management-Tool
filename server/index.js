import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';


import userRoutes from './routes/user_r.js'
import chatsRoutes from './routes/chats_r.js'
import evaluation from './routes/evaluation_r.js'
import researchRoutes from './routes/research_r.js'
import groupRoutes from './routes/group_r.js'
import markingRoutes from './routes/marking_r.js'
import submissiontypeRoutes from './routes/submissionType_r.js'
import presentationRoutes from './routes/presentation_r.js'

import http from 'http';
import { Server } from "socket.io";
import Chats from "./models/chat.js";
const app = express()
    , httpServer = http.createServer(app)
    , io = new Server(httpServer,{
        cors:{
            origin: "*",
            methods: "*"
        }
});


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/users', userRoutes);
app.use('/chats', chatsRoutes);
app.use('/evaluations', evaluation);
app.use('/research', researchRoutes);
app.use('/groups', groupRoutes);
app.use('/marking', markingRoutes);
app.use('/submissionType', submissiontypeRoutes);
app.use('/presentation', presentationRoutes);


const URL = 'mongodb+srv://MisharaSamadhi:hewage123@researchprojectmanageme.n1iby.mongodb.net/Project_Management_Tool?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


io.on('connection', async (socket) => {


    socket.on('sendMessage', async messageObj => {

        const newChats = new Chats(messageObj);
        await newChats.save();

        const ret = await Chats.find({studentGroup: messageObj.studentGroup})
            .populate('user', '_id user_Fname user_Lname user_role user_avatar')
            .select("message user createdAt");


        io.emit(messageObj.studentGroup, ret);
    })

    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});



mongoose.connect(URL).then(() => {
    console.log(`Server is running on port`);
    httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error)
})





