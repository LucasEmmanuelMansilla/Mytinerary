const Joi = require('joi')

const validator = {
    validateAccount: (req, res, next) => {

        const schema = Joi.object({
        userName: Joi.string().trim().required().email({tlds:{allow: false}}),
        password: Joi.string().trim().required().pattern(/(?=.*\d)(?=.*\D)/),
        name: Joi.string().trim().required().min(2).max(15),
        lastName: Joi.string().trim().required().min(2).max(10),
        country: Joi.string().trim().required(),
        profilePic: Joi.string().uri().required()
        })     
        
        const validation = schema.validate(req.body, {abortEarly: false})
        if(!validation.error){
            next()
        }else{
            res.json({success: false, errores: validation.error})
        }
    }
}


module.exports = validator