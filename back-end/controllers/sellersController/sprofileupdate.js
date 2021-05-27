const {profileInfoUpdate, profile} = require("../../models/sellersModel.js")




const UpdateProfile = async(req,res) => {
    const {category, address, phone, description, links_1, profile_imageUrl, amountof10,amountof20,amountof30} = req.body
    await profileInfoUpdate(res.locals.email,category, address, phone, description, links_1, profile_imageUrl, amountof10,amountof20,amountof30)
    res.status(200).json(await profile(res.locals.email))
}

module.exports = UpdateProfile;