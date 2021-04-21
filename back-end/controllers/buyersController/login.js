require("dotenv").config()
const {login} = require("../../models/buyersModel.js")
const jwt = require("jsonwebtoken")

const logIn = async(req,res) => {
    if(await login(req.body.name, req.body.password)){
        const jwToken = jwt.sign(req.body.name, process.env.SECRET)
        res.cookie("Token", jwToken)
        res.status(200).send(`Success`)
    }else {
        res.status(404).send(`login or password is incorrect`)
    }
}

module.exports = logIn;