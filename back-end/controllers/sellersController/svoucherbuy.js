const {voucherBuy} = require("../../models/sellersModel.js")
const fs = require("fs")
const emailSender = require('../../models/emailSender')
const ejs = require('ejs')



const voucherPurchase = async(req,res) => {
    try {
        console.log(req.body);
        await voucherBuy(req.body.company,Number( req.body.quantity))
        const html = fs.readFileSync(__dirname + '/invoce.ejs', 'ascii')
        const message = ejs.render(html, {
            company: req.body.company,

        })


        emailSender.sendEmail(req.body.email, 'voucher', message, ok => {
            if(ok){
                 res.status(200).send("OK")
            } else {
                res.status(404).send('can not send the voucher via email')
            }
        })
       
    }
        catch(err) {
            console.log(err);
            res.status(404).send(err.message)
    }
}


module.exports = voucherPurchase;