const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function handleUserSignup(req, res) {
    try {
        const { fullName, email, password, about } = req.body;

        let existingUser = await User.findOne( {email} );

        if (existingUser) {
            return res.render("signup-failed", { 
                message: "User Already Exists. Please use a different email to register." 
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            password : hashedPassword,
            about
        });

        return res.redirect("/login");
        
    }
    catch (error){
        return res.status(500).json(
            {
                status : "Error",
                message : "Failed to sign up",
            }
        );
    }
}

async function handleUserLogin(req, res) {
    try {
        const {email, password} = req.body;
        console.log(process.env.SECRET)

        const user = await User.findOne( {email} );

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.render("login-failed", { 
                message: "Oops! Invalid Email or Password. Please sign up if not registered or login with correct details."
            });
        }

        const token = jwt.sign ( 
            { id : user._id },
            process.env.SECRET,
            { expiresIn : "1h"}
        );


        res.cookie("token", token, { httpOnly: true });

        res.redirect("/profile");
    }
    catch ( error ) {
        return res.status(401).json(
            {
                status : "Error",
                message : "Invalid Token",
            }
        );
    }
}
    
module.exports = {handleUserSignup, handleUserLogin};
