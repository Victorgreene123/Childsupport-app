const express = require("express");
const router = express.Router();
const authCheck = require("../middlewares/checkAuthentication")
const peerReq = require("../models/peerRequestModel")


// ---- ROUTER 1 : CREATE A NEW PEER REQUEST & SEND ALL PEER REQUEST
router.post("/send/:reqUserId", authCheck, async (req, res) => {
    const reqUserId = req.params.reqUserId;
    const userId = req.userId;
    // first check if the previous request is exists or not
    try {
        let allPeerReq = await peerReq.find({ userId: userId }); // [] array
        let isExist = false;
        for (let i = 0; i < allPeerReq.length; i++) {
            if (allPeerReq[i].reqUserId.toString() === reqUserId) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            // exist peer request
            res.status(409).json({
                success: false,
                message: "peer request already exist!"
            })
        } else {
            // create new peer request
            const newPeerReq = new peerReq({
                userId,
                reqUserId
            })
            await newPeerReq.save();
            //send all peer request
            allPeerReq = await peerReq.find({ userId: userId }); // [] array
            res.json({
                success: true,
                message: "new request added",
                allPeerReq
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error
        })
    }
})

//------ ROUTE 2 : DELETE A PEER REQUEST 
router.delete("/delete/:reqUserId", authCheck, async (req, res) => {
    const reqUserId = req.params.reqUserId;
    const userId = req.userId;
    try {
        let allPeerReq = await peerReq.find({ userId: userId }); // [] array
        let isDone = false;
        for (let i = 0; i < allPeerReq.length; i++) {
            if (allPeerReq[i].reqUserId.toString() === reqUserId) {
                // a peer request found now delete that request
                await peerReq.findByIdAndDelete(allPeerReq[i]._id)
                isDone = true;
                break;
            }
        }
        allPeerReq = await peerReq.find({ userId: userId }); // [] array
        if (isDone) {
            // :  
            res.json({
                success: true,
                message: "peer request deleted",
                allPeerReq // giving all existing peer requests of user
            })
        } else {
            // -- no deletion : no such request found
            res.status(404).json({
                success: false,
                message: "there is no such request",
                allPeerReq // giving all existing peer requests of user
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error
        })
    }
})


// ROUTER 3 : FETCH EXISTING PEER REQUESTS of USER 
router.get("/fetchAllPeerReq", authCheck, async (req, res) => {
    const userId = req.userId;
    try {
        let allPeerReq = await peerReq.find({ userId: userId }); // [] array
        res.json({
            success: true,
            message: "all peer requests sent",
            allPeerReq
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error
        })
    }
})



module.exports = router;