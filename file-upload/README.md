# User Authentication and Profile Management System

This is a **Node.js and Express-based** user authentication system with **profile management**. Users can sign up, log in, upload profile pictures, and view their profiles.

## Features
- **User Authentication**: Register and log in using email and password.
- **JWT-Based Authorization**: Secure authentication with JSON Web Tokens.
- **Profile Management**: View and update profile details.
- **Profile Picture Upload**: Upload and display profile pictures using `Multer`.
- **Secure Routes**: Protected pages accessible only to authenticated users.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Token (JWT), bcrypt for password hashing
- **File Upload**: Multer for handling profile picture uploads
- **Frontend**: EJS for rendering views

## Installation
1. **Clone the repository**  
   ```sh
   git clone https://github.com/Rutuja1923/node-tasks
   cd node-tasks
   cd file-upload
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file and add:
   ```env
   SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the application**  
   ```sh
   npm start
   ```
   The server runs at `http://localhost:3000`.

## API Endpoints
| Method | Route                   | Description            |
|--------|-------------------------|------------------------|
| POST   | `/register`             | Register a new user    |
| POST   | `/login`                | User login             |
| GET    | `/profile`              | View user profile      |
| POST   | `/uploadProfilePic`     | Upload profile picture |

## Folder Structure
```
📂 project-root
│-- 📂 public          # Static files (CSS, images)
│-- 📂 uploads         # Profile picture uploads
│-- 📂 views           # EJS templates
│-- 📂 routes          # Express route handlers
│-- 📂 controllers     # Business logic
│-- 📂 middlewares     # Authorization & other middleware
│-- 📂 models          # Mongoose schemas
│-- server.js          # Main entry point
│-- .env               # Environment variables
│-- package.json       # Dependencies
│-- README.md          # Project documentation
```
