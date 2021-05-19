const {voucherBuy} = require("../../models/sellersModel.js")



const voucherPurchase = async(req,res) => {
    try {
        await voucherBuy(req.body.company_name, req.body.number)
        res.status(200).send("OK")
    }
        catch(err) {
            res.status(404).send(err.message)
    }
}


module.exports = voucherPurchase;