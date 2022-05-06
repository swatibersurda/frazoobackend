const mongoose = require("mongoose");

const vegSchema = new mongoose.Schema(
    {
      
            
            
            name:{type:String, required:true},
            price:{type:Number,required:true},
            img:{type:String,required:true},
            qty:{type:Number,required:true},


            
    
    },{
        timestamps : true,
        versionKey : false,
    }

)

module.exports = mongoose.model("veg", vegSchema);