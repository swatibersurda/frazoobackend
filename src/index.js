const express = require("express");
const cors = require("cors");
const connect = require("./configs/db")




//----------------product page controllers-----------------//
const vegController = require("./controllers/vegController");
const fruitController = require("./controllers/fruitController");

const userController = require("./controllers/userController");
//-------------------//------------------------------//----------//

const app = express();

app.use(express.json());
app.use(cors());




//----------------product page use controllers------------------//
app.use("/fruits", fruitController);
app.use("/veg", vegController);
app.use("/register",userController);


//-------------------//---------------------------//---------------//



app.listen(process.env.PORT || 5500, async function () {
  try {
    await connect();
    console.log("app is listening on port 5500");
  } catch (err) {
    console.log(err.message);
  }
});








// ------------------

// const { Route } = require("express")
// const express = require("express")
// const cors = require("cors")

// const app = express()

// const mongoose = require("mongoose")
// app.use(express.json())

// //connect to mongoose

// mongoose.connect("mongodb+srv://fastrack:fastrack1.@cluster0.mwv9a.mongodb.net/fastrack")

// //require route

// app.use("/", require("./Routes/productRoute"))

// app.listen(3001,function(){
//     console.log("express is running on 3001")
// })


