require("dotenv").config()
const jwt = require("jsonwebtoken")


const validator = (req,res,next) => {

    console.log(req)
    if (!req.cookies.Stoken) {
        return res.status(401).send("permission denied")
    }
    jwt.verify(req.cookies.Stoken, process.env.SECRET, (err,decoded) => {
        if(err) return res.status(401).send("tokens don't match")
        console.log(decoded.email)
        res.locals.email = decoded.email
    })
    
    next()
}

module.exports = validator;