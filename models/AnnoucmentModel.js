const mongoose = require('mongoose')

const AnnoucmentSchema = mongoose.Schema({
    title: String,
    content: String,
})

module.exports = mongoose.model('annoucments', AnnoucmentSchema)
