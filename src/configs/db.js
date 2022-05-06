// const mongoose = require("mongoose");
// module.exports = () => {
//   return mongoose.connect(
//     "mongodb+srv://skale0181:sagar@@cluster0.wqpjq.mongodb.net/Urben-Outfitters?retryWrites=true&w=majority"
//   );
// }
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://fastrack:fastrack1.@cluster0.mwv9a.mongodb.net/fastrack"
    // "mongodb+srv://fastrack:fastrack1.@cluster0.mwv9a.mongodb.net/fastrack?retryWrites=true&w=majority"
    );
}





