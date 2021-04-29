const {profileInfoUpdate, profile} = require("../../models/sellersModel.js")



const UpdateProfile = async(req,res) => {
    const {category, address, phone, description, gallery_Url, links_1, profile_imageUrl, vouchers} = req.body
    await profileInfoUpdate(res.locals.email, Category, Address, Phone, Description, Gallery_Url, Links, Profile_imageUrl, Vouchers)
    res.status(200).json(await profile(res.locals.email))
}

module.exports = UpdateProfile;