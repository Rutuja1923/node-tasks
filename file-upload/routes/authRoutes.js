const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/authController");
const router = express.Router();

router.get('/signup', (req,res) => {
    return res.render('signup');
});

router.get('/login', (req,res) => {
    return res.render('login');
});

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
