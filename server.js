const express = require('express') 
const cors = require('cors')
const router = require('./routes/index.js')
require('dotenv').config()
require('./config/database')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)


const port = proccess.env.PORT
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log("App listening on port 4000"))


