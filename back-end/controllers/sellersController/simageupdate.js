const {updateImage} = require("../../models/sellersModel.js")
const fs = require("fs")

//  1) If there is no folder -> Create subfolder naming accordingly
    //  2) append req.files.imageUrl init in any case
    // /images/{ident from res.locals}

const UpdateImage = async(req,res)  => {
    if(!fs.existsSync(`images/${res.locals.email}`)) {
        fs.mkdirSync(`images/${res.locals.email}`)
        console.log("there is ")}
    fs.writeFileSync(`images/${res.locals.email}/${req.files.gallery_Url.name}`, req.files.gallery_Url.data, {mode: 0o755})
    
    await updateImage(res.locals.email, `images/${res.locals.email}/${req.files.gallery_Url.name}`)
    res.status(200).send()
}


module.exports = UpdateImage;