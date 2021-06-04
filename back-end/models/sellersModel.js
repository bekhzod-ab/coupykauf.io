const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer")
const pdf = require("pdf-creator-node")
const fs = require("fs")
// const html = fs.readFileSync("template.html", "utf8");

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
    // if(!gallery_Url2 || !gallery_Url3 ) {
    //     return Sellers.findOneAndUpdate({email: localsemail}, {gallery_Url1})
    // }
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


async function voucherBuy(bodyname,input_number1,input_number2,input_number3) {
    return await Sellers.findOneAndUpdate({company_name: bodyname}, {$inc: {amountof10: -input_number1, amountof20: -input_number2, amountof30:-input_number3}})
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








async function createPdf(bodyuuId,reslocals){
    let options = {
        format: "A5",
        orientation: "landscape",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Coupykauf</div>'
        }}

    let voucher = {
        voucherId: bodyuuId
    }

    let document = {
        
        data: {
          voucher: voucher,
        },
        path: `../front-end/public/vouchers/${reslocals}.pdf`,
        type: "",
      };

    pdf.create(document, options)
    .then((res) => {
    console.log(res);
    })
    .catch((error) => {
    console.error(error);
    });      
}










async function sendEmail(bodyEmail) {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {user: "coupykauf@gmail.com", pass: "2021"}
    })
    let mailOptions = {
        from: "coupykauf@gmail.com",
        to: bodyEmail,
        subject: `coupon from ${company_name}`,
        text: "Hello user",
        attachments: [{"filename": `../front-end/public/vouchers/${res.locals.email}`, "content" : data}] 
    }
    transporter.sendMail(mailOptions, (err,info)=>{
        if(err) {
            console.log(err)
        }else console.log(info.response)
    })
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
    deleteAccount,
    sendEmail,
    createPdf
}