const {updateIban} = require("../../models/sellersModel.js")


const paymentDetails = async(req,res) => {
    const {postRnumber, postIban, postBic} = req.body
    res.status(200).send(await updateIban(res.locals.email, postRnumber, postIban, postBic ))
}


module.exports = paymentDetails;