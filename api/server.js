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
app.use("/api/user",require("./routes/userRoute")); // user related :: create new user, login user
app.use("/api/peerRequest/",require("./routes/peerRequestRoute")); // create new peer req, delete peer req, fetch all peer requests of user
app.use("/api/peer",require("./routes/peerRoute")); 
app.get("/get-token", (req, res) => {
    const API_KEY = process.env.VIDEOSDK_API_KEY;
    const SECRET_KEY = process.env.VIDEOSDK_SECRET_KEY;
  
    const options = { expiresIn: "10m", algorithm: "HS256" };
  
    const payload = {
      apikey: API_KEY,
      permissions: ["allow_join", "allow_mod"], // also accepts "ask_join"
    };
  
    const token = jwt.sign(payload, SECRET_KEY, options);
    res.json({ token });
  });
  
  //
  app.post("/create-meeting/", (req, res) => {
    const { token, region } = req.body;
    const url = `${process.env.VIDEOSDK_API_ENDPOINT}/v1/meetings`;
    const options = {
      method: "POST",
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify({ region }),
    };
  
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => res.json(result)) // result will contain meetingId
      .catch((error) => console.error("error", error));
  });
  
  //
  app.post("/validate-meeting/:meetingId", (req, res) => {
    const token = req.body.token;
    const meetingId = req.params.meetingId;
  
    const url = `${process.env.VIDEOSDK_API_ENDPOINT}/api/meetings/${meetingId}`;
  
    const options = {
      method: "POST",
      headers: { Authorization: token },
    };
  
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => res.json(result)) // result will contain meetingId
      .catch((error) => console.error("error", error));
  });
const port = process.env.PORT || 5000 ;

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})