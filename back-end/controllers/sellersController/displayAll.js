const {showAll} = require("../../models/sellersModel.js")


const displayAll = async(req,res) => {
    try {
        const result = await showAll() 
        res.status(200).json(result)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
}