const express = require('express') 
const cors = require('cors')
const router = require('./routes/index.js')

const app = express()



app.use(cors())

app.use('/api', router)

app.listen(4000, () => console.log("hola"))


