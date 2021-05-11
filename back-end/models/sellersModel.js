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
    vouchers: {
        type: Number,
        default: null
    },
    category: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        default: null
    },
    profile_imageUrl: {
        type: String,
        default: null 
    },
    description: {
        type: String,
        default: null
    },
    gallery_Url1: {
        type: String,
        default: null
    },
    gallery_Url2: {
        type: String,
        default: null
    },
    gallery_Url3: {
        type: String,
        default: null
    },
    links_1: {
        type: String,
        default: null 
    },
    links_2: {
        type: String, 
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

async function profileInfoUpdate(cookiEmail, category, address, phone, description, links_1, profile_imageUrl, vouchers ) {
    try {
        const updated = await Sellers.findOneAndUpdate({email: cookiEmail} , {category, address, phone, description, links_1, profile_imageUrl, vouchers}, {new: true})
        return updated
    }
    catch(err){
        console.log(err.message)
    }
}

async function updateImage(localsemail,gallery_Url1,gallery_Url2,gallery_Url3) {
    return await Sellers.findOneAndUpdate({email: localsemail}, {gallery_Url1,gallery_Url2,gallery_Url3})
}


//Function are exported and called in controllers
module.exports = {
    addCompany,
    signin,
    profile,
    profileInfoUpdate,
    updateImage
}