require("dotenv").config()
const {signin} = require("../../models/sellersModel.js")
const jwt = require("jsonwebtoken")

//Controller is handling request by running a fuction, and once validation is succeed response with according status is sent
const signIn = async(req,res) => {
    if (await signin(req.body.email,req.body.password)) {
        const jwToken = jwt.sign({email : req.body.email}, process.env.SECRET)
        // res.cookie("Stoken",jwToken)
        res.json({"Stoken" : jwToken})
        res.status(200).send(`Success`)
    } else {
        res.status(400).send(`email or pass`)
    }
}

// Controller is exported to routs, where it's being called 

module.exports = signIn;