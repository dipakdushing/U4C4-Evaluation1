
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const todo= require("../models/todo.models")

router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const todo = await todo.create(req.body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const todo = await todo.find()
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.get("",authenticate, async(req,res)=>{
    try {
        const todo=await todo.find()
        
    } catch (error) {
        return res.status(401).send({message:err.messege})
        
    }
})

router.delete("",authenticate, async(req,res)=>{
    try {
        const todo=await todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(todo);
    } catch (error) {
        return res.status(401).send({message:err.messege})
        
    }
})


router.patch("",authenticate, async(req,res)=>{
    try{
        const todo = await todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;