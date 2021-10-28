const routes = require('express').Router()
const AnnoucmentModel = require('../models/AnnoucmentModel')

routes.post('/api/announcements', (req, res) => {
    const announcement = new AnnoucmentModel({
        title: req.body.title,
        content: req.body.content,
    })
    announcement.save()

    res.json({ success: true })
})

module.exports = routes
