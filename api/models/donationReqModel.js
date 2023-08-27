const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationReqSchema = new Schema({
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

module.exports = mongoose.model("DonationReq",donationReqSchema);