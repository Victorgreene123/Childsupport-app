const express = require("express");
const router = express.Router();

router.post("/:reqUserId",(req,res)=>{
    const reqUserId = req.params.reqUserId;
    console.log(reqUserId);
    res.json({
        msg : "Hello",
    })
})






module.exports = router;