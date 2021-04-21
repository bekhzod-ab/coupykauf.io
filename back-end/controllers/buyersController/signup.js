const {addBuyer} = require("../../models/buyersModel.js")

const signUp = async(req,res) => {
    await addBuyer(req.body.name, req.body.email, req.body.password)
    res.send(`${req.body.name} is added`)
}


module.exports = signUp;