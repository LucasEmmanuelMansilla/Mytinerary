const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    addUser: async (req, res) => {
        //VARIABLE QUE CAPTURA LOS ERRORES, SI HAY ALGUNO
        var errores = []
        const {userName, password, name, lastName, country, profilePic} = req.body
        //PEDIDO A LA BD PARA COMPROBAR SI EL USERNAME YA EXISTE
        const usuarioExistente = await User.findOne({userName : userName})
        if(usuarioExistente){
            errores.push('El usuario ya existe')
        }
        //ENCRIPTA LA CLAVE, PARA QUE NO QUEDE VISIBLE Y FÁCIL DE ROBAR DE LA BD
        if(errores.length === 0){
            const hashearPassword = bcryptjs.hashSync(password, 10)
            var userSave = new User({
                userName,
                password: hashearPassword,
                name,
                lastName,
                country,
                profilePic
            })
            var userSaved = await userSave.save()
            //GENERA UN TOKEN CON LOS DATOS DEL USUARIO
            var token = jwt.sign({...userSaved}, process.env.CLAVE_TOKEN, {})
        }
 
     return res.json({success: errores.length === 0 ? true : false,
                        errores: errores,
                        respuesta: errores.length === 0 && {token, name: userSaved.name, profilePic: userSaved.profilePic}
                    })
        
    },

    logInUser: async (req, res) => {
        //COMPRUEBA SI EL USUARIO QUE SE INTENTA LOGUEAR EXISTE
        var {userName, password} = req.body
        const usuarioExistente = await User.findOne({userName:userName})
    
        if(!usuarioExistente){
            return res.json({success: false, respuesta: 'Usuario y/o contraseña incorrectos'})
        }
        const passwordCompare = bcryptjs.compareSync(password, usuarioExistente.password)
        if(!passwordCompare){
            return res.json({success: false, respuesta: 'Usuario y/o contraseña incorrectos'})
        }
        var token = jwt.sign({...usuarioExistente},process.env.CLAVE_TOKEN, {})
        
        return res.json({success: true, respuesta: {token, name: usuarioExistente.name, profilePic: usuarioExistente.profilePic}})
    },
    //SI EL USUARIO RECARGA LA PÁGINA Y EL TOKEN ES CORRECTO, DEVUELVE AL FRONT CON LOS MISMOS DATOS QUE RECIBE, SIRVE PARA COMPROBAR SI ALGUIEN TOCA ALGO DEL TOKEN
    logFromLocalStorage: (req, res) => {
        res.json({success: true, respuesta: {token: req.body.token, name: req.user.name, profilePic: req.user.profilePic}})
    }

}

module.exports = userController