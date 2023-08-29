require("dotenv").config();
const express = require("express");
const router = express.Router(); // to handle different request in user route
const mongoose = require("mongoose"); // to perform various operation to MONGODB
const user = require("../models/userModel"); // user schema
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // to hash password
const saltRounds = 10; // will generate difficult password i.e. more stronger
const isUserAuthenticated = require("../middlewares/checkAuthentication")

//---------------- ROUTE 1 : Creation of new user --------------
router.post(
    "/createUser",
    async (req, res) => {
        // getting credentials from body
        const { firstName, lastName, email, password } = req.body;
        try {
            // check if user previously exist
            const findUser = await user.findOne({ email: email });
            if (findUser) {
                // user already exist
                res.status(409).json({
                    "success": false,
                    "message": "user already exists with same email",
                })
            } else {
                //------ create new user ----------

                //step 1 : Encrypt  password(Hashing)
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashedPassword = bcrypt.hashSync(password, salt);

                //step 2 : Create new user & save
                const newUser = new user({
                    email: email,
                    userDetails: { firstName, lastName, password: hashedPassword },
                });
                await newUser.save();
                // ---- create JWT -----
                const data = { id: newUser._id }
                const token = jwt.sign(data, process.env.JWT_SIGN_SECRET)
                return res.json({
                    success: true,
                    message: "user created!",
                    createdUser: newUser,
                    token
                });
            }
        } catch (error) {
            // any error 
            res.status(500).json({
                "success": false,
                "message": "Some internal server error occurred. try later ",
                "error": error,
            });
        }
    }
);

//---------------- ROUTE 2 : Login  user --------------
router.post("/loginUser", async (req, res) => {
    try {
        const { password, email } = req.body;
        const isExists = await user.findOne({ email });
        if (isExists) {
            // check password
            const validUser = bcrypt.compareSync(password, isExists.userDetails.password);
            if (validUser) {
                // --- PASSWORD MATCHED ----
                //--- create token ---
                const data = { id: isExists._id };
                const token = jwt.sign(data, process.env.JWT_SIGN_SECRET)
                res.json({
                    success: true,
                    message: "user logedIn",
                    token
                })
            } else {
                res.status(500).json({
                    success: false,
                    message: "Incorrect credentials"
                })
            }
        } else {
            res.status(404).json({
                success: false,
                message: "user does not exist"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error. try after some time",
            error
        })
    }
})

//---------------- ROUTE 3 : get user details --------------
router.get("/getUser", isUserAuthenticated ,async (req,res)=>{
   const userId = req.userId;
   res.json({
    success : true,
    message : " getting user details"
   })
})

module.exports = router;
