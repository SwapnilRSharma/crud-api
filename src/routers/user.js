const express = require('express')
const router = express.Router()
const User = require('../models/user')

//Read all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Create user
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        return res.status(201).send(user)
    } catch (error) {
        res.status(401).send(error)
    }
})

//Read a user
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send()
        }

        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

//Update a user
router.patch('/users/:id', async (req, res) => {
    const updates = req.body

    try {
        const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true })
        if (!user) {
            return res.status(404).send()
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

//Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        await user.remove()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router