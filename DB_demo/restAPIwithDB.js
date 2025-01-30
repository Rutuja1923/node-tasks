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

//create a User model from the schema
const User = mongoose.model('user', userSchema);

//middleware
app.use(express.urlencoded({extended: false}));

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

//REST API routes
//to get all user information
app.get('/api/users', async (req,res) => {
    const users = await User.find();
    return res.json(users);
});

// to create a new user -> send data in request body
app.post('/api/users',async(req,res) => {
    const body = req.body;

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json(
            {
                "status": "Error",
                "message": "All fields are needed!"
            }
        );
    }
    try {
        const newUser = await User.create(
            {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                gender: body.gender,
                job_title: body.job_title
            }
        );
        console.log(`Result: ${newUser}`);
        return res.status(201).json(
            {
                status: 'Success',
                message: 'User added successfully!',
                userId: newUser.id
            }
        );
    }
    catch (err) {
        console.error(`Server error: ${err.message}`)
        res.status(500).json(
            { 
                status: 'Error', 
                message: 'Failed to create user' 
            }
        );
    } 
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app
    .route('/api/users/:id')
    //to get user information about an user with specified id
    .get(async (req,res) => {
        const id = req.params.id;
        try {     
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json(
                    {   
                        status : `Not found`,
                        message: `No user found with ID : ${id}`
                    }
                );
            }
            return res.json(user);
        }
        catch (err) {
            res.status(500).json(
                {
                    status: 'Error', 
                    message: 'Invalid user ID' 
                }
            );
        }    
    })
    //to get change a user information -> send data in request body
    .patch( async (req,res) => {
        const id = req.params.id;
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { 
                    new: true,
                }
            );
            if (!updatedUser){
                return res.status(404).json(
                    {
                        status: 'Error',
                        message: `User with ${id} not found.`
                    }
                );
            }
            return res.status(200).json(
                {
                    status: 'Success',
                    message: 'User updated successfully!',
                    user: updatedUser
                }
            );
        }
        catch (err) {
            console.eorror(`Server Error: ${err.message}`);
            res.status(500).json(
                { 
                    status: 'Error', 
                    message: 'Failed to update user' 
                }
            );
        }
    });