
// Modules

require("dotenv").config();
const cors = require("cors")

const path = require("path")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const express = require("express")
const fileupload = require("express-fileupload")


const app = express()
const port = process.env.PORT
// const buyers = require("./routs/buyersRoute.js")
const sellers = require("./routs/sellersRoute.js")

//Running server and connection to DB

mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(() => {
    console.log(`Connected to Database`)
    app.listen(port, () => {
        console.log(`App is running on http://localhost:${port}`)
    })
})


//Apply modules to global routs

app.use(cors({credentials:true}))
app.use(fileupload())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))



// End points 

//Home page
app.get("/", (req,res) => {
    res.status(200).send("Main Page")
})


app.use("/images", express.static(path.join(__dirname, "images")))




// Buyers starting endpoint
// app.use("/buyer", buyers())


//Sellers starting endpoint and then going to sellers() routing where we have all the rest APIs 
app.use("/company", sellers())


//Serving front-end within this file