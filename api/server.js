const express = require("express");
const app = express();
const dbFunction = require("./db/database");
const bodyParser = require("body-parser"); // to get form data
app.use(express.json());// to send back data as response in json format
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");

// ---- DATABASE CONNECTION ---
dbFunction();

// Allowing all ORIGINS -> Will change after deployment
app.use(cors());

// checking home route
app.get("/", (req,res)=>{
    const responseData = {
        "status" : "Healthy",
        "message" : "Welcome to home api",
        "project name" : "child support"
    }
    res.json(responseData)
})

// ------ ALll Routes ----
// USER ROUTE( APIs : create new user, login, logout, delete user)
app.use("/api/user",require("./routes/userRoute"));


const port = process.env.PORT || 5000 ;

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})