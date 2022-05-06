const express = require("express");

const User= require("../models/userModel");

const router = express.Router();

router.post("",(req,res)=>{
    const {first_name,last_name,email,mobileno}=req.body
    User.findOne({email:email},(err,user)=>{
     if(user){
         res.send({message:"User already registered"})
     }
     else{
 
         const user = new User({
             first_name,
             last_name,
             email,
             mobileno
         })
         user.save(err=>{
             if(err){
                 res.send(err)
             }else{
                 res.send({message:"Succesfully Register"})
             }
         })
         }
    })
 })
 
 router.get("",(req,res)=>{
     const {mobileno} = req.body
     User.findOne({mobileno:mobileno},(err,user)=>{
         if(user){
             if(mobileno==user.mobileno ){
                 res.send({message:"Login Successfull", user: user})
             }else{
                 res.send({message:"Incorrect MobileNO."})
             }
         }
         else{
             res.send({message:"User Not Registered"})
         }
     })
 })
 module.exports = router