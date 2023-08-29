const mongoose = require("mongoose");
const { Schema } = mongoose;

const peerReqSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,  // Setting the data type as ObjectId
        ref: 'User' //  Referencing another User model
    },
    reqUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    reqDate : {
        type: Date, // Setting the data type as Date
        default: Date.now, // Optional default value
    }
})

model.exports = mongoose.model("PeerRequests",peerReqSchema);