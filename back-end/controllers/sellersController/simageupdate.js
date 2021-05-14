const {updateImage} = require("../../models/sellersModel.js")
const fs = require("fs")
const { clearScreenDown } = require("readline")

//  1) If there is no folder -> Create subfolder naming accordingly
    //  2) append req.files.imageUrl init in any case
    // /images/{ident from res.locals}

const UpdateImage = async(req,res)  => {
    const path = `images/${res.locals.email}`
    if(!fs.existsSync(`${path}`)) {
        fs.mkdirSync(`${path}`)
        console.log("there is ")}
    console.log(req.files)
     Object.keys(req.files).filter(key => typeof key.name !== "undefined").map(key => {
        fs.writeFileSync(`${path}/${req.files[key].name}`, req.files[key].data, {mode: 0o755})
    })
       
    
    // fs.writeFileSync(`${path}/${req.files.gallery_Url1.name}`, req.files.gallery_Url1.data, {mode: 0o755})
    // fs.writeFileSync(`${path}/${req.files.gallery_Url2.name}`, req.files.gallery_Url2.data, {mode: 0o755})
    // fs.writeFileSync(`${path}/${req.files.gallery_Url3.name}`, req.files.gallery_Url3.data, {mode: 0o755})
    
    await updateImage(res.locals.email, `${path}/${req.files.gallery_Url1.name}`,`${path}/${req.files.gallery_Url2.name}`,`${path}/${req.files.gallery_Url3.name}` )
    res.status(200).send()
}


module.exports = UpdateImage;