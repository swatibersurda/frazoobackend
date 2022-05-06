const mongoose = require("mongoose");

const vegSchema = new mongoose.Schema(
    {
      
            
            
            name:{type:String, required:true},
            img:{type:String,required:true},
            price:{type:Number,required:true},
            qty:{type:Number,required:true},


            
    
    }

)

module.exports = mongoose.model("veg", vegSchema);