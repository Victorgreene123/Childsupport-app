require("dotenv").config();
const express = require("express");
const router = express.Router(); // to handle different request in user route
const mongoose = require("mongoose"); // to perform various operation to MONGODB
const user = require("../models/userModel"); // user schema
const bcrypt = require('bcrypt'); // to hash password

const passport = require("passport"); // used
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser"); //used

const saltRounds = 10; // will generate difficult password i.e. more stronger

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
                    res.json({
                        "success": false,
                        "message": "user already exists with same mail",
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
                    return res.status(200).json({
                        success: true,
                        message: "user created!",
                        createdUser : newUser,
                    });
                }
            } catch (error) {
                // any error 
                res.json({
                    "success": false,
                    "message": "Some internal server error occurred. try later ",
                    "error": error,
                });
            }
        }
);

//---------------- ROUTE 2 : Login  user --------------
router.post("/loginUser", async (req, res, next) => {
    // console.log("Authenticate status " + req.isAuthenticated()); // expected false becoz user not logedIn
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred'
            });
        }
        // console.log(user);
        // if (!user) {
        if (user === false) {
            // console.log("Entering wrong password"); 
            return res.status(401).json({
                "success": false,
                "message": "Invalid email or password"
            })
        }
        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'An error occurred'
                });
            }
            // console.log("Authenticate status " + req.isAuthenticated()); // expected true
            //console.log("after successfull login" + req.user); // user is saved to req.user object
            return res.status(200).json({
                success: true,
                message: 'Login successful!'
            });
        });
    })(req, res, next)
})

router.post("/logoutUser",(req,res)=>{
    try {
        // req.logout(); // Log out the user
        // console.log(req.signedCookies);
        console.log(req.rawHeaders);
        // console.log(req.isAuthenticated());
        res.status(200).json({ 
            success:true,
            message: 'Logout successful' 
        });
    } catch (error) {
        res.status(500).json({ 
            success:false,
            message: 'Unable to logout. Try after some time' 
        });
    }
})

module.exports = router;
