const {updateImage} = require("../../models/sellersModel.js")
const fs = require("fs")


//  1) If there is no folder -> Create subfolder naming accordingly
    //  2) append req.files.imageUrl init in any case
    // /images/{ident from res.locals}

const UpdateImage = async(req,res)  => {
    const path = `../front-end/public/images/${res.locals.email}`
    if(!fs.existsSync(`${path}`)) {
        fs.mkdirSync(`${path}`)
        console.log("there is ")}
    console.log("req.files", req.files)
    const arrayOfimages = [null, null, null]
     Object.keys(req.files).map(key => {
         if(req.files[key]){
             
             fs.writeFileSync(`${path}/${req.files[key].name}`, req.files[key].data, {mode: 0o755})
             switch (key) {
                case "gallery_Url1":
                    arrayOfimages[0] = (`images/${res.locals.email}/${req.files[key].name}`)
                    break;
                case "gallery_Url2":
                    arrayOfimages[1] = (`images/${res.locals.email}/${req.files[key].name}`)
                    break;
                case "gallery_Url3":
                    arrayOfimages[2] = (`images/${res.locals.email}/${req.files[key].name}`)
                    break;
            
                default:
                    break;
            }
        
         } 
        
    })
       
    
    // fs.writeFileSync(`${path}/${req.files.gallery_Url1.name}`, req.files.gallery_Url1.data, {mode: 0o755})
    // fs.writeFileSync(`${path}/${req.files.gallery_Url2.name}`, req.files.gallery_Url2.data, {mode: 0o755})
    // fs.writeFileSync(`${path}/${req.files.gallery_Url3.name}`, req.files.gallery_Url3.data, {mode: 0o755})
    
    await updateImage(res.locals.email, arrayOfimages)
    res.status(200).send()
}


module.exports = UpdateImage;