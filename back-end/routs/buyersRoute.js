const router = require(`express`).Router()

const logIn = require("../controllers/buyersController/login.js")
const signUp = require("../controllers/buyersController/signup.js")
const voucherPurchase = require("../controllers/sellersController/svoucherbuy.js")




module.exports = () => {
    router.post("/login", logIn)
    router.post("/signup", signUp)
    router.post("/invoice", voucherPurchase)
    return router
} 