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
    },
    IBAN : {
        type: String,
        default: null
    },
    BIC : {
        type: String,
        default: null
    },
    amountof10: {
        type: Number,
        default: null
    },
    amountof20: {
        type: Number,
        default: null
    },
    amountof30: {
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
    images_array: [{
        type:String
    }],
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
    if(!seller) {
        return false
    }

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

async function profileInfoUpdate(cookiEmail, category, address, phone, description, links_1, profile_imageUrl, amountof10, amountof20,amountof30 ) {
    try {
        const updated = await Sellers.findOneAndUpdate({email: cookiEmail} , {category, address, phone, description, links_1, profile_imageUrl, amountof10,amountof20,amountof30}, {new: true})
        return updated
    }
    catch(err){
        console.log(err.message)
    }
}



async function updateImage(localsemail,images) {

    const seller = await Sellers.findOne({email: localsemail})
    const newImages = [];
    console.log("seller",seller);
    console.log("images",images);
    images.forEach((image, idx) => {
        if(image){
            newImages.push(image)
        } else {
            newImages.push(seller.images_array[idx])
        }
    });
    await Sellers.findOneAndUpdate({email: localsemail}, {images_array: newImages}, {new: true, setDefaultsOnInsert: true})
}



async function showAll(){
    const result = await Sellers.find({})
    return result
}


async function voucherBuy(bodyname,amountof10,amountof20,amountof30) {
    const cret = {}
    if(amountof10)  cret.amountof10 = -Number(amountof10);
    if(amountof20)  cret.amountof20 = -Number(amountof20);
    if(amountof30)  cret.amountof30 = -Number(amountof30);
    return await Sellers.findOneAndUpdate({company_name: bodyname}, {$inc: {...cret}})
}




async function updateIban(localsemail, bodyNumber,bodyIban,bodyBic) {
    try {
        await Sellers.findOneAndUpdate({email: localsemail},
            {
                reg_number: bodyNumber,
                IBAN: bodyIban,
                BIC: bodyBic  
            } )
        }

    catch(err){
            console.log(err.message)
        }
}

async function deleteAccount(locasemail) {
    try {
        await Sellers.findOneAndDelete({email: locasemail})
    }
    catch(err) {
        console.log(err.message)
    }
}



//Function are exported and called in controllers
module.exports = {
    addCompany,
    signin,
    profile,
    profileInfoUpdate,
    updateImage,
    voucherBuy,
    showAll,
    updateIban,
    deleteAccount
}