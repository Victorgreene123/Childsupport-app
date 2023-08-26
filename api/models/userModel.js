const mongoose = require("mongoose");
const { Schema } = mongoose;

// user Schema 
const userSchema = new Schema({
    email : {
      type : String,
      unique : true
    },
    userDetails : {
         firstName : String,
         lastName : String,
         password : String,
         otherThings :{}
    }
 });
 
module.exports = mongoose.model("User",userSchema);