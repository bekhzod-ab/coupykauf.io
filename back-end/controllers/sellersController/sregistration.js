const {addCompany} = require("../../models/sellersModel.js")


const sRegister = (req,res) => {
    await addCompany(req.body.company, req.body.reg_number, req.body.email,req.body.password)
    res.status(200).send(`${req.body.company} was added and pending for verification`)
}


module.exports = sRegister;