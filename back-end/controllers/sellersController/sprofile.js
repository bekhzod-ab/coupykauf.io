
const {profile} = require("../../models/sellersModel.js")



const DisplayProfile = async(req,res) => {
    res.status(200).json(await profile(res.locals.email))
}


module.exports = DisplayProfile;