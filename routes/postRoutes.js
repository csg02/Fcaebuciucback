const express = require('express');
const router = express.Router()
const postSchema = require("../models/post")

router.get("/posts", async(req,res) =>{
    const post = await postSchema.find({});
    try{
        res.send(post);
    }catch(err) {res.status(502).send(err);}
});


router.post("/posts", async(req,res) =>{
    const post = new postSchema(req,body);
    try{
        await post.save();
        res.send(post);
    }catch(err) {res.status(502).send(err);}
});

router.patch('/posts/:id', async(req,res)=>{
    try{
        const updatedPost = await postSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(updatedPost);
    }catch(err) {res.status(502).send(err);}
});

router.delete('/posts/:id', async(req,res)=>{
    try{
        const post = await postSchema.findByIdAndDelete(req.params.id);
        if(!post) res.status(404).send("Not found"),
        res.status(200).send();
    }catch(err) {res.status(502).send(err);}
});
module.exports = router;