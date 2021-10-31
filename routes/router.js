const routes = require('express').Router()
const mongoose = require('mongoose')
const AnnoucmentModel = require('../models/AnnoucmentModel')

routes.post('/api/add-announcement', (req, res) => {
    const announcement = new AnnoucmentModel({
        title: req.body.title,
        content: req.body.content,
    })
    announcement.save()

    res.json({ success: true })
})

routes.get('/api/get-announcement', async (req, res) => {
    const allAnnouncements = await AnnoucmentModel.find({})
    res.json(allAnnouncements)
})

module.exports = routes
