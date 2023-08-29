const express = require("express");
const router = express.Router();
const authCheck = require("../middlewares/checkAuthentication")
const Peer = require("../models/peerModel")

router.post("/pair/:reqUserId", authCheck ,async (req,res)=>{
    const reqUserId = req.params.reqUserId; //who sent a request (peer1)
    const userId = req.userId; // who approved a request (The current user who is hitting the api) -> (peer2)
    try {
        // first check if pair is already exists
        const allPairedList = await Peer.find({peer2Id : userId}) ; // returns []
        let isPairedAlready = false;
        for (let i = 0; i < allPairedList.length; i++) {
            if (allPairedList[i].peer1Id === reqUserId) {
                isPairedAlready = true;
                break;
            }
        }
        if (isPairedAlready) {
            res.status(400).json({
                success : false,
                message : "already paired"
            })
        }else{
            // create new pair
            const newPeer = new Peer({
                peer1Id : reqUserId,
                peer2Id : userId
            })
            await newPeer.save();
            res.json({
                success : true,
                message : "new peer created"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            message : "hello error"
        })
    }
});
router.delete("/delete/:reqUserId", authCheck,async (req,res)=>{
    const reqUserId = req.params.reqUserId; //who sent a request (peer1)
    const userId = req.userId; // who approved a request (The current user who is hitting the api) -> (peer2)
    try {
        const allPairedList = await Peer.find({peer2Id : userId}) ; // returns []
    } catch (error) {
        
    }
})






module.exports = router;