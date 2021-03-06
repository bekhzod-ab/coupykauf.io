const router = require(`express`).Router()
const signIn = require("../controllers/sellersController/slogin.js")
const sRegister = require("../controllers/sellersController/sregistration.js")
const DisplayProfile = require("../controllers/sellersController/sprofile.js")
const UpdateImage = require("../controllers/sellersController/simageupdate.js")
const UpdateProfile = require("../controllers/sellersController/sprofileupdate.js")
const voucherPurchase = require("../controllers/sellersController/svoucherbuy.js")
const validator = require("../middleware/autorized.js")
const paymentDetails = require("../controllers/sellersController/updateIban.js")
const deleteProfile = require("../controllers/sellersController/deleteprofile.js")
const logOut = require("../controllers/sellersController/logout.js")

//Global end points related to companys. It's taking its roots in server.js where we declared app.use("/company")
//We are exporting the endpoints and pass them as middleware to ("/company/... --> our declared endpoints")
module.exports = () => {
    router.post("/login", signIn)
    router.post("/signup", sRegister)
    router.get("/profile", validator, DisplayProfile)
    router.post("/profile", validator, UpdateProfile)
    router.post("/image", validator, UpdateImage)
    router.post("/vouchers/purchase", voucherPurchase)
    router.post("/profile/payments",validator, paymentDetails)
    router.delete("/profile/delete", validator , deleteProfile)
    router.get("/logout", logOut)
    
    return router
}