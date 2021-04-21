const {addCompany} = require("../../models/sellersModel.js")


const sRegister = async (req,res) => {
    const added = await addCompany(req.body.company, req.body.reg_number, req.body.email,req.body.password)
    console.log({added})
    if (added === true) {
        res.status(200).send(`${req.body.company} was added and pending for verification`)
    }
        else {
            res.status(400).json(added)
        }
    
    // if(await addCompany(req.body.company, req.body.reg_number, req.body.email,req.body.password)){
    //     res.status(200).send(`${req.body.company} was added and pending for verification`)
    // }   else {
    //     res.status(400).send()
    // }
}


module.exports = sRegister;