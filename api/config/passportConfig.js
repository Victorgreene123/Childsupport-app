const User = require("../models/userModel");
const bcrypt = require("bcrypt"); // to unhash & compare password
const localStrategy = require("passport-local").Strategy;


// the passport parameter will be used here & the this middleware will be used acrros application
module.exports = function (passport) {
    // --- Defining strategy starts ----
    passport.use(
        new localStrategy({
            usernameField: 'email', // Specify the field containing the email
            passwordField: 'password', // Specify the field containing the password
        }, async (userEmail, password, done) => {
            console.log("from strategy " + userEmail);
            try {
                const foundUser = await User.findOne({ email: userEmail });
                if (!foundUser) {
                    //no user found with email
                    return done(null, false)
                }
                // ---- user found  ---
                // compare the user password
                bcrypt.compareSync(password, foundUser.userDetails.password, (err, isPassMatched) => {
                    if (err) {
                        // if error
                        throw err
                    }
                    if (isPassMatched === true) {
                        // --- password matched & return user --
                        return done(null, foundUser)
                    } else {
                        //--- password not matched ---
                        return done(null, false)
                    }
                })
            } catch (error) {
               console.log(error);
            }

            //serach user
            // User.findOne({ email: userEmail }, (error, foundUser) => {
            //     if (error) {
            //         throw error
            //     }
            //     if (!foundUser) {
            //         //no user found with email
            //         return done(null, false)
            //     }
            //     // ---- user found  ---
            //     // compare the user password
            //     bcrypt.compareSync(password, foundUser.userDetails.password, (err, isPassMatched) => {
            //         if (err) {
            //             // if error
            //             throw err
            //         }
            //         if (isPassMatched === true) {
            //             // --- password matched & return user --
            //             return done(null, foundUser)
            //         } else {
            //             //--- password not matched ---
            //             return done(null, false)
            //         }
            //     })
            // })





            // User.findOne({ email: userEmail }, (error, foundUser) => {
            //     if (error) {
            //         throw error
            //     }
            //     if (!foundUser) {
            //         //no user found with email
            //         return done(null, false)
            //     }
            //     // ---- user found  ---
            //     // compare the user password
            //     bcrypt.compareSync(password, foundUser.userDetails.password, (err, isPassMatched) => {
            //         if (err) {
            //             // if error
            //             throw err
            //         }
            //         if (isPassMatched === true) {
            //             // --- password matched & return user --
            //             return done(null, foundUser)
            //         } else {
            //             //--- password not matched ---
            //             return done(null, false)
            //         }
            //     })
            // })






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