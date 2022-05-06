const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
    {
      
            
           
        name:{type:String, required:true},
        img:{type:String,required:true},
        price:{type:Number,required:true},
        qty:{type:Number,required:true},
        id:{type:Number,required:true}
            
    
    },{
        timestamps : true,
        versionKey : false,
    }

)

module.exports = mongoose.model("fruit", fruitSchema);