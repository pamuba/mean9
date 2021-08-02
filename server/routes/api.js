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
    Video.find({})
        .exec(function(err, videos){
            if(err){
                console.log(err)
            }
            else{
                res.json(videos)
            }
        })
});
//Uodate video by id
router.put('/video/:id', function(req, res){
    console.log("Updating a videos");
    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error Updating a Video");
            }
            else{
                res.json(updatedVideo);
            }
        }
    )
});

//Get video by id
router.get('/videos/:id', function(req, res){
    console.log("Get Request for a videos");

    Video.findById(req.params.id)
         .exec(function(err, video){
             if(err){
                 console.log("Error retrieving videos");
             }
             else{
                 res.json(video);
             }
         });
});

//Insert a video
router.post('/video', function(req, res){
    console.log("Post a videos");

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error Saving videos");
        }
        else{
            res.json(insertedVideo);
        }
    })
   
});

//delete a video
router.delete('/video/:id', function(req, res){
    console.log("Deleting a videos");

    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        
        if(err){
            res.send("Error deleting a Video");
        }
        else{
            res.json(deletedVideo);
        }
    }
    )
});

module.exports = router;