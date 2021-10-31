const routes = require('express').Router()
const mongoose = require('mongoose')
const AnnoucmentModel = require('../models/AnnoucmentModel')

routes.post('/api/announcements', (req, res) => {
    const announcement = new AnnoucmentModel({
        title: req.body.title,
        content: req.body.content,
    })

    if (req.body.title.trim() === '' || req.body.content.trim() === '') {
        res.json({ success: false })
    } else {
        announcement.save()
        res.json({ success: true })
    }
})

routes.get('/api/announcements', async (req, res) => {
    const allAnnouncements = await AnnoucmentModel.find({})
    res.json(allAnnouncements)
})

module.exports = routes
