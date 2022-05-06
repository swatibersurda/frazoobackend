const express = require("express");

const Veg = require("../models/vegModel.js");

const router = express.Router();



router.get("", async(req,res)=>{
    try {

        const veg = await Veg.find().lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(veg);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }

})

module.exports = router
