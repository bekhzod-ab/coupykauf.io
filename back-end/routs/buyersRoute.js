const router = require(`express`).Router()
const {check, validationResult} = require("express-validator")
const valid = require("../middleware/expressvalidator.js")
const logIn = require("../controllers/buyersController/login.js")
const signUp = require("../controllers/buyersController/signup.js")

module.exports = () => {
    router.post("/login", logIn)
    router.post("/signup", signUp)
    return router
} 