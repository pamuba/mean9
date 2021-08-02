const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Video = require('../models/video');

const db = "mongodb://localhost:27017/videoplayer";
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to the Database")
    }
})

//locahost:3000/api
router.get('/', (req, res)=>{
    res.send('API Works')
})

//locahost:3000/api/videos
router.get('/videos', (req, res)=>{
    console.log("Get all videos")

})

module.exports = router;