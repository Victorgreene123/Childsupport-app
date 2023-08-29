require("dotenv").config();
const express = require("express");
const app = express();
const dbFunction = require("./db/database"); // database connection function
const bodyParser = require("body-parser"); // to get form data
const cors = require("cors");
// ----------------- END OF IMPORTING ---------------------


// ----------------- DATABASE CONNECTION -------------------
dbFunction();

// ----------------- ALL ROUTE MIDDLEWARES ------------------
app.use(express.json());// to send back data as response in json format
app.use(bodyParser.urlencoded({ extended: true }));
// Allowing all ORIGINS -> Will change after deployment
app.use(cors({
    origin : process.env.ALLOWED_ORIGIN_URL1,
    credentials : true
}));


// -------------- END OF ALL ROUTE MIDDLEWARES -----------------------


// ------------------- HOME API TESTING ---------------------------
app.get("/", (req,res)=>{
    const responseData = {
        "status" : "Healthy",
        "message" : "Welcome to home api",
        "project name" : "child support"
    }
    res.json(responseData)
})

// ------------------ ALll Routes Path ------------------
// 1 :: USER ROUTE( APIs : create new user, login, logout, delete user)
app.use("/api/user",require("./routes/userRoute"));
app.use("/api/peerRequest/",require("./routes/peerRequestRoute"));

const port = process.env.PORT || 5000 ;

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})