const express = require("express");
const multer = require("multer");
const { handleGetProfile, handleUploadProfile } = require("../controllers/userController");
const {authorizeAccess} = require("../middlewares/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage });

router.get("/profile", authorizeAccess, handleGetProfile);
router.post("/uploadProfilePic", authorizeAccess, upload.single("profileImage"), handleUploadProfile);

module.exports = router;
