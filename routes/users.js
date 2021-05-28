const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res, next) => {
  const users = await User.find()
  res.json(users)
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await User.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params

  res.json(await User.findByIdAndUpdate(id, req.body, { new: true }))
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params

  res.sendStatus(204).json(User.findByIdAndDelete(id))
})

module.exports = router
