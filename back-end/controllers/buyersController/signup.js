const {addBuyer} = require("../../models/buyersModel.js")

const signUp = async(req,res) => {
    const buyer = await addBuyer(req.body.name, req.body.email, req.body.password)
    if (buyer === true){
        res.status(200).send(`${req.body.name} is added`)
    }else {
        res.status(400).json(buyer)
    }
}


module.exports = signUp;