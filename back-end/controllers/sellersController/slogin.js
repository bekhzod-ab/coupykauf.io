require("dotenv").config()
const {signin} = require("../../models/sellersModel.js")
const jwt = require("jsonwebtoken")

const signIn = async(req,res) => {
    if (await signin(req.body.email,req.body.password)) {
        const jwToken = jwt.sign(req.body.email, process.env.SECRET)
        res.cookie("Stoken",jwToken)
        res.status(200).send()
    } else {
        res.status(400).send(`email or pass`)
    }
}

module.exports = signIn;