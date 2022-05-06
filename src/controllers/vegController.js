const express = require("express");

const Veg = require("../models/vegModel");

const router = express.Router();



router.get("", async(req,res)=>{
    try {

        const vegs = await Veg.find().lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(vegs);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(400).send(err.massage);
    }

})

router.post("", async(req,res)=>{
    try {

        const vegs= await Veg.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(vegs);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(400).send(err.massage);
    }

})
     

module.exports = router
