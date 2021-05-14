const { check, validationResult} = require("express-validator")


const valid = (req,res, next) => {
    
    if([
        check("name").isLength({min: 3}).isString(),
        check("email").isEmail(),
        check("password").isLength({min: 3})   
    ]) {
        next()
    }else {
        const error = validationResult(req)
        return res.status(422).json({error: error.array()})
    }
};

module.exports = valid;