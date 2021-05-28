const {voucherBuy,sendEmail,createPdf} = require("../../models/sellersModel.js")
const fs = require("fs")



const voucherPurchase = async(req,res) => {
    try {
        await voucherBuy(req.body.company_name, req.body.number)
        await createPdf(req.body.uuid, res.locals.email)
        await sendEmail(req.body.email)
        res.status(200).send("OK")
    }
        catch(err) {
            res.status(404).send(err.message)
    }
}


module.exports = voucherPurchase;