const {deleteAccount} = require("../../models/sellersModel.js")


const deleteProfile = async(req,res) => {
    try {
        await deleteAccount(res.locals.email)
        res.status(200).send("acc deleted")
    }
    catch(err) {
        console.log(err.message)
        res.status(400).send("something went wrong")
    }
}

module.exports = deleteProfile;