const routes = require('express').Router()
const AnnoucmentModel = require('../models/AnnoucmentModel')

routes.post('/api/announcements', (req, res) => {
    const announcement = new AnnoucmentModel({
        title: 'Yeah',
        content: 'boii',
    })
    announcement.save()

    res.json({ success: true })
})

module.exports = routes
