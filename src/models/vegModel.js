const mongoose = require("mongoose");

const vegSchema = new mongoose.Schema(
    {
      
            
            id:{type:Nubmer, required:true},
            name:{type:String, required:true},
            Quantity:{type:Number,required:true,default:0},
            price:{type:Number,required:true}
            
    
    }

)

module.exports = mongoose.model("veg", vegSchema);