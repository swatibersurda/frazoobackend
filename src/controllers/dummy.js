const express=require("express")
const connect = require("./configs/db")
const mongoose = require("mongoose");
const cors= require("cors")

const app = express()
app.use(express.json());


//user model
const userSchema = new mongoose.Schema({
    first_name:{type : String, required : true},
    last_name:{type : String, required : true},
    email : {type : String, required : true, unique:true},
    mobileno: {type :Number, required : true,unique:true}
},{
    timestamps : true,
    versionKey : false,
})
const User = mongoose.model("user", userSchema)

//Routes
app.post("/register",(req,res)=>{
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

app.post("/login",(req,res)=>{
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

app.listen(5003, async()=>{
    try{
        await connect();
        console.log("listening on port 5003")
    }
    catch(err){
        console.log(err.message)
    }
})