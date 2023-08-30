const express = require("express");
const router = express.Router();
const authCheck = require("../middlewares/checkAuthentication")
const Peer = require("../models/peerModel")


//-------- ROUTE 1 :: Pair A user one Another user 
router.post("/pair/:reqUserId", authCheck, async (req, res) => {
    const reqUserId = req.params.reqUserId; //who sent a request (peer1)
    const userId = req.userId; // who approved a request (The current user who is hitting the api) -> (peer2)
    try {
        // first check if pair is already exists
        let allPairedList = await Peer.find({ peer2Id: userId }); // returns []
        let isPairedAlready = false;
        for (let i = 0; i < allPairedList.length; i++) {
            if (allPairedList[i].peer1Id.toString() === reqUserId) {
                isPairedAlready = true;
                break;
            }
        }
        if (isPairedAlready === false) {
            allPairedList = await Peer.find({ peer1Id: userId }); // returns []
            for (let i = 0; i < allPairedList.length; i++) {
                if (allPairedList[i].peer2Id.toString() === reqUserId) {
                    isPairedAlready = true;
                    break;
                }
            }
        }
        if (isPairedAlready) {
            res.status(400).json({
                success: false,
                message: "already paired"
            })
        } else {
            // create new pair
            const newPeer = new Peer({
                peer1Id: reqUserId, // the person who actually sent the request
                peer2Id: userId  // person who approved pair
            })
            await newPeer.save();
            // --- RETURN EXISTING PAIR OF USER ---
            let existingPairs1 = await Peer.find({ peer1Id: userId }) // []
            let existingPairs2 = await Peer.find({ peer2Id: userId }) // []
            const allPairs = existingPairs1.concat(existingPairs2)
            // --- RETURN EXISTING PAIR OF USER ---
            res.json({
                success: true,
                message: "new peer created",
                existingPairs: allPairs
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error
        })
    }
});

//-------- ROUTE 2 :: Delete an existing Pair
router.delete("/delete/:reqUserId", authCheck, async (req, res) => {
    const reqUserId = req.params.reqUserId;  // with whom pair will be deleted
    const userId = req.userId; // The current user who is hitting the api
    try {
        let isPairExist = await Peer.findOne({
            peer2Id: userId,
            peer1Id: reqUserId
        }); // returns []
        if (isPairExist === null) {
            // if first search type does not exists
            isPairExist = await Peer.findOne({
                peer2Id: reqUserId,
                peer1Id: userId
            }); // returns []
        }
        if (isPairExist != null) {
            // peer pair exists & delete that pair
            await Peer.findByIdAndDelete(isPairExist._id);
            // --- RETURN EXISTING PAIR OF USER ---
            let existingPairs1 = await Peer.find({ peer1Id: userId }) // []
            let existingPairs2 = await Peer.find({ peer2Id: userId }) // []
            const allPairs = existingPairs1.concat(existingPairs2)
            // --- RETURN EXISTING PAIR OF USER ---
            res.json({
                success: true,
                message: "peer pair deleted",
                existingPairs: allPairs
            })
        } else {
            res.status(404).json({
                success: false,
                message: "pair not found",
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

//----- Route 3 :: Fetch all existing pairs of user 
router.get("/fetchAllPairs", authCheck, async (req, res) => {
    const userId = req.userId;
    try {
        let existingPairs1 = await Peer.find({ peer1Id: userId }) // []
        let existingPairs2 = await Peer.find({ peer2Id: userId }) // []
        const allPairs = existingPairs1.concat(existingPairs2)
        // --- RETURN EXISTING PAIR OF USER ---
        res.json({
            success: true,
            message: "all pairs sent",
            existingPairs: allPairs
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