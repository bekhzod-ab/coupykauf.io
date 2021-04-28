const {profileInfoUpdate, profile} = require("../../models/sellersModel.js")



const UpdateProfile = async(req,res) => {
    const {Category, Address, Phone, Description, Gallery, Links, Profile_image, Vouchers} = req.body
    await profileInfoUpdate(res.locals.email, Category, Address, Phone, Description, Gallery, Links, Profile_image, Vouchers)
    res.status(200).json(await profile(res.locals.email))
}

module.exports = UpdateProfile;