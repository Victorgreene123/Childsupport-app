const mongoose = require("mongoose");
const { Schema } = mongoose;

const peerSchema = new Schema({
    peer1Id : {
        type : mongoose.Schema.Types.ObjectId,  // Setting the data type as ObjectId
        ref: 'User' //  Referencing another User model
    },
    peer2Id : {
        type : mongoose.Schema.Types.ObjectId,  
        ref: 'User' 
    },
    peerDate : {
        type: Date, // Setting the data type as Date
        default: Date.now, // Optional default value
    }
})

module.exports = mongoose.model("Peer",peerSchema);