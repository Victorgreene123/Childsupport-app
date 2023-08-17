const express = require("express");
const app = express();




app.get("/", (req,res)=>{
    const responseData = {
        status : "Healthy",
        msg : "Welcome to home api"
    }
    res.json(responseData)
})




const port = process.env.PORT || 5000 ;

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})