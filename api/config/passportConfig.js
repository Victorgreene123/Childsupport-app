const User = require("../models/userModel");
const bcrypt = require("bcrypt"); // to unhash & compare password
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose"); // to perform various operation to MONGODB

// the passport parameter will be used here & the this middleware will be used acrros application
module.exports = function (passport) {
    // --- Defining strategy starts ----
    passport.use(
        new localStrategy({
            usernameField: 'email', // Specifying the field containing the email on re.body object
            passwordField: 'password', // Specifying the field containing the password re.body object
        }, async (userEmail, password, done) => {
            try {
                const foundUser = await User.findOne({ email: userEmail });
                if (!foundUser) {
                    //no user found with email
                    return done(null, false)
                }
                // ---- user found  ---
                // compare the user password
                bcrypt.compare(password, foundUser.userDetails.password, function(err, result) {
                    if (err) {
                        // if error
                        return done(err, false)
                    }
                    if (result === true) {
                        // --- password matched & return user --
                        return done(null, foundUser)
                    } else {
                        //--- password not matched ---
                        return done(null, false)
                    }
                });
            } catch (error) {
               return done(error); // Pass the error to Passport
            }
        })
    )
    // --- Defining strategy ends ----

    //--- serialising user :: Helps to store the cookie inside the browser of user
    passport.serializeUser((foundUser, done) => {
        // creating a cookie using users id
        done(null, foundUser._id); // here foundUser will come from above passport.use() method
    });

    //--- Deserialising user :: Helps to destroy the cookie inside the browser of user
    passport.deserializeUser((_id, done) => {
        User.findById(_id, (err, user) => {
            done(err, user);
        });
    });
}