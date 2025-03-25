const dotenv = require("dotenv");
dotenv.config();
const path = require('path');
const express = require('express');
const multer = require('multer');
const cookieParser = require("cookie-parser");

const {connectMongoDB} = require('./connection');
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

const url = process.env.MONGO_URI;
connectMongoDB(url);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded( { extended: false } ));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));


app.get('/', (req, res) => {
    return res.render('homepage');
});

app.use("/", authRoutes);
app.use("/", userRoutes);

app.listen(PORT , () => {
    console.log("Server is listening on PORT : 3000");
});