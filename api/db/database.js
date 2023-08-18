require('dotenv').config()
const mongoose = require("mongoose");
const mongoDbUrl = process.env.MONGODB_URL;

const connectToDataBase = async () => {
    try{
        await mongoose.connect(mongoDbUrl);
    }catch (error) {
        console.log(error);
    }
}

module.exports = connectToDataBase;