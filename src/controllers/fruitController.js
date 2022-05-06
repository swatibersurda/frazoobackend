const express = require("express");

const Fruit= require("../models/fruitModel");

const router = express.Router();



router.get("", async(req,res)=>{
    try {

        const fruits = await Fruit.find().lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(fruits);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }

})

module.exports = router
