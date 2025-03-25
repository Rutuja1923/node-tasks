const jwt = require('jsonwebtoken');

function authorizeAccess(req, res, next) {
    console.log(req.headers);
    const token = req.cookies?.token; 

    if (!token) {
        return res.status(401).json(
            {
                status : "Error",
                message : "Unauthorized Access",
            }
        );
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    }
    catch (error){
        return res.status(401).json(
            {
                status : "Error",
                message : "Invalid Token",
            }
        );
    }
}

module.exports = {authorizeAccess}