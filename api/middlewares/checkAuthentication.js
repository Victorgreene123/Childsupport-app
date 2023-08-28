require("dotenv").config();
const jwt = require('jsonwebtoken');

const checkAuth = async(req,res,next)=>{
    const authToken = req.headers.authtoken;
    // token not found
    if (!authToken) {
        res.status(401).json({
            success: false,
            message : "unauthorized access",
        })
    } else {
        //token found -> check token
        const tokenData = jwt.verify(authToken, process.env.JWT_SIGN_SECRET, function (err, decoded) {
            return err ? "not verified" : decoded;
        });
        console.log(tokenData.id);
        // token data looks something like bellow after jwt verify
        //tokenData = { id: '64ece6173b49e65733af30a7', iat: 1693247934 }
        if (tokenData === "not verified") {
            res.status(401).json({
                success: false,
                message: "unauthorized access"
            })
        }else{
            // user verified and userId added to request
            req.userId = tokenData.id;
            next()
        }
    }
}

module.exports = checkAuth ;