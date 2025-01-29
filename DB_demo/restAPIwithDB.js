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

//schema
const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true
        },
        job_title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

//routes
app.get('/',(req,res) => {
    const link = `http://localhost:${PORT}/api/users`;
    res.send(`Hey there! please try <a href='http://localhost:${PORT}/api/users'>http://localhost:${PORT}/api/users</a>`);
});

//to get list of all users
app.get('/users',async (req,res) => {
    const users = await User.find();
    const html = 
    `   <ul>
            ${users.map((user) =>
                    `<li>${user.first_name} ${user.last_name} (${user.job_title})</li>`
                ).join('')
            }
        </ul>
    `;
    res.send(html);
});
