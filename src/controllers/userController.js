const express = require("express");

const User= require("../models/userModel");

const router = express.Router();
// const app=express();


// router.post("",(req,res)=>{
//     const {first_name,last_name,email,mobileno}=req.body
//     User.findOne({email:email},(err,user)=>{
//      if(user){
//          res.send({message:"User already registered"})
//      }
//      else{
 
//          const user = new User({
//              first_name,
//              last_name,
//              email,
//              mobileno
//          })
//          user.save(err=>{
//              if(err){
//                  res.send(err)
//              }else{
//                  res.send({message:"Succesfully Register"})
//              }
//          })
//          }
//     })
//  })
 
// router.get("/:mobileno", async (req, res) => {
//     try {
//       const user = await User.findOne(req.params.mobileno)
//         .lean()
//         .exec();
//       return res.send(user);
//     } catch (err) {
//       return res.status(400).send(err.message);
//     }
//   });

  router.post("/",(req,res)=>{
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
router.get("/",(req,res)=>{
  const {mobileno} = req.body
  console.log("mobile",mobileno)
  User.findOne({mobileno:mobileno},(err,mobileno)=>{
      // if(user){
          if(mobileno){
              res.send({message:"Login Successfull", mobileno: mobileno})
          // }else{
          //     res.send({message:"Incorrect MobileNO."})
          // }
      // }
          }
      else{
          res.send({message:"User Not Registered"})
      }
  })
})



//  router.post("", async(req,res)=>{
//     try {

//         const users= await User.create(req.body);
//         // const user = await User.create(req.body);

//         return res.status(200).send(users);
        
//     } catch (err) {
//         console.log("error is : ", err);

//         return res.status(400).send(err.massage);
//     }

// })
 module.exports = router