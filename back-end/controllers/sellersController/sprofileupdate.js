const {profileInfoUpdate, profile} = require("../../models/sellersModel.js")



const UpdateProfile = async(req,res) => {
    console.log(req.body)
    const {category, address, phone, description, gallery_Url, links_1, profile_imageUrl, vouchers} = req.body
    await profileInfoUpdate(res.locals.email,category, address, phone, description, gallery_Url, links_1, profile_imageUrl, vouchers)
    res.status(200).json(await profile(res.locals.email))
}

module.exports = UpdateProfile;