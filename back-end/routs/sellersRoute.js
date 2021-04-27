const router = require(`express`).Router()
const signIn = require("../controllers/sellersController/slogin.js")
const sRegister = require("../controllers/sellersController/sregistration.js")
const DisplayProfile = require("../controllers/sellersController/sprofile.js")
const validator = require("../middleware/autorized.js")


//Global end points related to companys. It's taking its roots in server.js where we declared app.use("/company")
//We are exporting the endpoints and pass them as middleware to ("/company/... --> our declared endpoints")
module.exports = () => {
    router.post("/login", signIn)
    router.post("/signup", sRegister)
    router.get("/profile",validator, DisplayProfile)
    return router
}