const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true, 
    },
    password : {
        type : String, 
        requird : true,
    },
    about : {
        type : String,
    },
    profileImage : {
        type : String, 
        default : '/default.png',
    }
});

module.exports = mongoose.model("User", userSchema);