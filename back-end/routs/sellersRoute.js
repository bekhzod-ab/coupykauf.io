const router = require(`express`).Router()
const fs = require("fs")
const dir = "./images"
const signIn = require("../controllers/sellersController/slogin.js")
const sRegister = require("../controllers/sellersController/sregistration.js")
const DisplayProfile = require("../controllers/sellersController/sprofile.js")
const UpdateProfile = require("../controllers/sellersController/sprofileupdate.js")
const validator = require("../middleware/autorized.js")


//Global end points related to companys. It's taking its roots in server.js where we declared app.use("/company")
//We are exporting the endpoints and pass them as middleware to ("/company/... --> our declared endpoints")
module.exports = () => {
    router.post("/login", signIn)
    router.post("/signup", sRegister)
    router.get("/profile",validator,DisplayProfile)
    router.post("/profile",validator,UpdateProfile)

    //  1) If there is no folder -> Create subfolder naming accordingly
    //  2) append req.files.imageUrl init in any case
    // /images/{ident from res.locals}


        router.post("/image", validator, async(req,res) => {
            console.log(req.files)
            if(!fs.existsSync(`images/${res.locals.email}`)) {
                fs.mkdirSync(`images/${res.locals.email}`)
                console.log("there is ")}
            fs.writeFileSync(`images/${res.locals.email}/${req.files.gallery_Url.name}`, req.files.gallery_Url.data, {mode: 0o755})    
                
            // {fs.mkdir(dir, res.locals.email)}
            // fs.appendFile(path.join(__dirname, `images/${dir}`, req.body.image))
        })






    return router
}