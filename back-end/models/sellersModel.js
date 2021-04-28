const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Creating schema 
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
    },
    IBAN : {
        type: String,
        default: null
    },
    Vouchers: {
        type: Number,
        default: null
    },
    Category: {
        type: String,
        default: null
    },
    Address: {
        type: String,
        default: null
    },
    Phone: {
        type: Number,
        default: null
    },
    Profile_image: {
        type: String,
        default: null 
    },
    Description: {
        type: String,
        default: null
    },
    Gallery: {
        type: String,
        default: null
    },
    Links: {
        type: Array,
        default: null 
    }

})

// Storing the collection in constant with applied schema to it
const Sellers = mongoose.connection.model("sellers", sellerSchema)


//function to register new company accepting parameters from front-end and assign them to as values from schemas keys.
function addCompany(bodyName,bodyNumber,bodyEmail,bodyPassword) {
     const newSeller = new Sellers({
        company_name: bodyName,
        reg_number: bodyNumber,
        email: bodyEmail,
        // password is being encrypted with 12 level of hashing by bcrypt
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


// validating login, accepting email and password passed from front-end. 
async function signin(bodyEmail, bodyPassword) {
    const seller = await Sellers.findOne({email: bodyEmail})
    if(!seller) {
        return false
    }
    //data password being de-crypted by unhashing it and comparing to one that passed from front-end
    else if(bcrypt.compareSync(bodyPassword.toString(), seller.password)){
        return true
    }else {
        console.log('email or password does not match')
        return false
    }
}


async function profile(emailFromCookie){
    try {
        const result = await Sellers.findOne({email: emailFromCookie}).select("-password") 
        return result 
        }
    catch (err) {
        console.log(err.message)
    } 
}

async function profileInfoUpdate(cookiEmail, Category, Address, Phone, Description, Gallery, Links, Profile_image, Vouchers ) {
    try {
        const updated = await Sellers.findOneAndUpdate({email: cookiEmail} , {Category, Address, Phone, Description, Gallery, Links, Profile_image, Vouchers}, {new: true})
        return updated
    }
    catch(err){
        console.log(err.message)
    }
}



//Function are exported and called in controllers
module.exports = {
    addCompany,
    signin,
    profile,
    profileInfoUpdate
}