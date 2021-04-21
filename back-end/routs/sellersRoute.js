const router = require(`express`).Router()
const signIn = require("../controllers/sellersController/slogin.js")
const sRegister = require("../controllers/sellersController/sregistration.js")

module.exports = () => {
    router.post("/signin", signIn)
    router.post("/signup", sRegister)
    return router
}