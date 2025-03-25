const User = require('../models/User');

async function handleGetProfile(req, res) {
    try {
        const user = await User.findById( req.user.id );

        if (!user) {
            return res.status(404).json(
                { 
                    status: "Error", 
                    message: "User not found" 
                }
            );
        }

        return res.render("profile", { user });
    }
    catch (error){
        return res.status(500).json(
            {
                status : "Error",
                message : "Failed to Fetch Profile",
            }
        );
    }
}

async function handleUploadProfile(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json(
                { 
                    status: "Error", 
                    message: "No file uploaded" 
                }
            );
        }        
        const user = await User.findById( req.user.id );

        if (!user) {
            return res.status(404).json(
                { 
                    status: "Error", 
                    message: "User not found" 
                }
            );
        }
        
        user.profileImage = `/uploads/${req.file.filename}`;
        await user.save();

        return res.redirect('/profile');
    }
    catch (error){
        return res.status(500).json(
            {
                status : "Error",
                message : "Failed to Upload Profile Picture",
            }
        );
    }
}

module.exports = {handleGetProfile, handleUploadProfile} ;