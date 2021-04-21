
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

//Creating buyers schema

const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//Applying schema to collection and storing it in constant

const Buyers = mongoose.connection.model("buyers", buyerSchema)

//Function to create a buyer

function addBuyer(bodyName, bodyEmail, bodyPassword) {
    const newBuyer = new Buyers({
        name: bodyName,
        email:bodyEmail,
        password: bcrypt.hashSync(bodyPassword,12)
    })
    newBuyer.save()
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
}


//Function to process login and validate hashed passwords

async function login(bodyName,bodyPassword) {
    const buyer = await Buyers.findOne({name: bodyName})
    if (bcrypt.compareSync(bodyPassword.toString(), buyer.password)) {
        return true
    }else {
        console.log('login or pass is incorrect')
        return false
    }
}


module.exports = {
    addBuyer,
    login
}