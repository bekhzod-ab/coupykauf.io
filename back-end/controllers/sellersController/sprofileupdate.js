const {profileInfoUpdate, profile} = require("../../models/sellersModel.js")



const UpdateProfile = async(req,res) => {
    const {Category, Address, Phone, Description, Gallery_Url, Links, Profile_imageUrl, Vouchers} = req.body
    await profileInfoUpdate(res.locals.email, Category, Address, Phone, Description, Gallery_Url, Links, Profile_imageUrl, Vouchers)
    res.status(200).json(await profile(res.locals.email))
}

module.exports = UpdateProfile;