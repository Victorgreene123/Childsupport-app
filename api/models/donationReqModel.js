const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationReqSchema = new schema({
    title : {
        type : String
    },
    recipientId : {
        type : mongoose.Schema.Types.ObjectId
    },
    amount : {
        type : Number
    },
    donationDate : {
        type : Date,
        default: Date.now, // Optional default value
    }
})