const {voucherBuy} = require("../../models/sellersModel.js")
const fs = require("fs")
const emailSender = require('../../models/emailSender')
const ejs = require('ejs')
const date = new Date()


const voucherPurchase = async(req,res) => {
    const {quantity1, quantity2, quantity3 } = req.body
    const quantities= [quantity1, quantity2, quantity3]
    try {
        
        await voucherBuy(req.body.company,Number(quantity1),Number(quantity2), Number(quantity3))
        var first = "10 euro voucher"
        var second = "20 euro voucher"
        var third = "30 euro voucher"
        function nominance(array){
            if(array[0] > 0) {
                return `${array[0]} stk of ${first}`
            }else if(array[1] > 0) {
                return `${array[1]} stk of ${second}`
            }else if (array[2] > 0) {
                return `${array[2]} stk of ${third}`
            }
        }
        const html = fs.readFileSync(__dirname + '/invoce.ejs', 'ascii')
        const message = ejs.render(html, {
            company: req.body.company,
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            voucherTypeandAmount: nominance(quantities)
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