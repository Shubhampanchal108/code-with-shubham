const jwt = require("jsonwebtoken")
const env = require("dotenv").config()

const Admin_Auth = async(req, res, next)=>{
    try {
        const Token = req.headers['authorization'];

        if (!Token){
            return res.json({sucess: false, msg:"Unauthorized"})
        }

        const decoded = jwt.verify(Token, process.env.JWT_SECRET); // Replace with your secret key
        req.user = decoded; // Attach user info to the request object
        next();
    } catch (error) {
        console.log(error)
    }
}


module.exports = Admin_Auth