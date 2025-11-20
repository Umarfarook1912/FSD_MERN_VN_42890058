const express = require('express');
const mongoose = require('mongoose');
const app=express();
const cors=require('cors');
const userRouter=require('./routes/userRouter');

app.use(cors());
app.use(express.json());

app.use(userRouter);

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb+srv://root:root@smartbridge.fh53w73.mongodb.net/?appName=SmartBridge").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});