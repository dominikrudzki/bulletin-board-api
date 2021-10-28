const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.json())

// db connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('error', (err) => {
    console.log('err', err)
})
mongoose.connection.on('connected', (err, res) => {
    console.log('mongoose is connected')
})

// routes
const routes = require('./routes/router')
app.use(routes)

app.listen(PORT, () => {
    console.log('Listerning on port:', PORT)
})
