const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();
const PORT = 3000;

//connection
mongoose
    .connect('mongodb://127.0.0.1:27017/employee')
    .then( () => {
        console.log(`MongoDB connected!`);
    })
    .catch( (err) => {
        console.error(`Mongo Error: ${err.message}`);
    });