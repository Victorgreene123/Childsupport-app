require('dotenv').config()
const mongoose = require("mongoose");
const mongoDbUrl = process.env.MONGODB_URL;

const connectToDataBase = async () => {
    try{
        await mongoose.connect(mongoDbUrl,{
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useUnifiedTopology: true
        });
        console.log("db connected")
    }catch (error) {
        console.log("unable to connect database");
    }
}

module.exports = connectToDataBase;