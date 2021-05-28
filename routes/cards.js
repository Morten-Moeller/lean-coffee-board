const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    title: 'New Titel Jane',
    author: 'Jane Doe',
    votes: 0,
    id: '0',
  },
  {
    title: 'New Titel John',
    author: 'John Doe',
    votes: 0,
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const foundCard = cards.find(card => card.id === id)
  foundCard ? res.json(foundCard) : next()
})

router.post('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuidv4() }
  cards.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const card = cards[index]
  const updateCard = { ...card, ...req.body }
  cards.splice(index, 1, updateCard)
  res.json(updateCard)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
