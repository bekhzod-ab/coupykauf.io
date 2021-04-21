const bcrypt = require("bcrypt");
const mongoose = require("mongoose");


const sellerSchema = new mongoose.Schema({

    company_name: {
        type: String,
        required: true,
        unique:true
    },
    reg_number: {
        type: Number,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }

})

const Sellers = mongoose.connection.model("sellers", sellerSchema)

function addCompany(bodyName,bodyNumber,bodyEmail,bodyPassword) {
     const newSeller = new Sellers({
        company_name: bodyName,
        reg_number: bodyNumber,
        email: bodyEmail,
        password: bcrypt.hashSync(bodyPassword,12)
    })
    return newSeller.save()
    .then(() => {
        console.log(`${newSeller.company_name} is registered`)
        return true
        })
    .catch(err => {
        console.log(err.message)
        return err.message
        })
}

async function signin(bodyEmail, bodyPassword) {
    const seller = await Sellers.findOne({email: bodyEmail})
    if(bcrypt.compareSync(bodyPassword.toString(), seller.password)){
        return true
    }else {
        console.log('email or password does not match')
        return false
    }
} 


module.exports = {
    addCompany,
    signin
}