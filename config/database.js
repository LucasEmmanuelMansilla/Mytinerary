const mongoose = require('mongoose')
require('dotenv').config()
//CONECTAR CON LA BASE DE DATOS
mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( ()=> console.log("Database connected"))
.catch(error => console.log(error))