const express = require('express')
const mongoose = require('mongoose')
const schedule = require('node-schedule')
const AnnoucmentModel = require('./models/AnnoucmentModel')

const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use(cors({ origin: '*' }))

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

//data removing every midnight
schedule.scheduleJob('0 0 * * *', () => {
    mongoose.AnnoucmentModel.remove({}, () => {
        console.log('All colletion data removed')
    })
})

app.listen(PORT, () => {
    console.log('Listerning on port:', PORT)
})
