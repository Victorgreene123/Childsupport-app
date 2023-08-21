require("dotenv").config();
const express = require("express");
const router = express.Router(); // to handle different request in user route
const mongoose = require("mongoose"); // to perform various operation to MONGODB
const user = require("../models/userModel"); // user schema
const { body, validationResult } = require('express-validator'); // to validate user credentials
const bcrypt = require('bcrypt'); // to has password
const saltRounds = 10; // will generate difficult password i.e. more stronger
// ROUTE 1 : Creation of new user
router.post(
    "/createUser",
    // first validate credentials using express-validator
    [
        body("firstName", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Enter password of at least 5 characters")
            .notEmpty()
            .isLength({ min: 5 }),
    ],
    async (req, res) => {
        const isBadCredentials = validationResult(req);
        // checking is there any credential error
        if (isBadCredentials.errors.length !== 0) {
            //some error in credentials
            res.json({
                "success": false,
                "message": "Invalid credentials",
                "error": isBadCredentials.errors
            })
        } else {
            // no error in credentials
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
                        userDetails: { firstName, lastName, email, password : hashedPassword },
                    });
                    await newUser.save();
                    res.json({
                        "success": true,
                        "message": "user created",
                        "createdUser": newUser,
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
    }
);

module.exports = router;
