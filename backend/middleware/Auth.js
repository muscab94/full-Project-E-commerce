const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (req,res,next) => {
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({message: "no token provided"})
    }

    try {
         const decoded = jwt.verify(token.split( " " ) [1], process.env.JWT_Secret )
         req.user = decoded
         next()
    } catch (error) {
         res.status(401).json({message: "Invalid token"})
    }
     
}
 
const isAdmin = (req,res,nex) => {
    if(req.user.role !== "Admin"){
        return res.status(403).json({message: "Admin Only"})
    }
    nex()
}


module.exports = {verifyToken, isAdmin}