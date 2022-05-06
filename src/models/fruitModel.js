const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
    {
      
            
            id:{type:Nubmer, required:true},
            name:{type:String, required:true},
            Quantity:{type:Number,required:true},
            price:{type:Number,required:true}
            
    
    }

)

module.exports = mongoose.model("fruit", fruitSchema);