const mongoose = require('mongoose')
//CONECTAR CON LA BASE DE DATOS
mongoose.connect('mongodb://LucasMansilla:12031203l@cluster0-shard-00-00.7alep.mongodb.net:27017,cluster0-shard-00-01.7alep.mongodb.net:27017,cluster0-shard-00-02.7alep.mongodb.net:27017/mytinerary?ssl=true&replicaSet=atlas-vvc8gc-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( ()=> console.log("Base de datos conectada"))
.catch(error => console.log(error))