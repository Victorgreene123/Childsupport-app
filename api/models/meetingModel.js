const mongoose = require("mongoose");
const { Schema } = mongoose;

const meetingSchema = new Schema({
    title : {
        type : String // tittle of meeting
    },
    description : {
        type : String // description of meeting
    },
    startDate : {
        type: Date, // Setting the data type as Date
        default: Date.now, // starting date of meeting 
    }
})

module.exports = mongoose.model("Meeting",meetingSchema);