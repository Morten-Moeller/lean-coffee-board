const mongoose = require('mongoose')

const cardSchema = {
  title: { type: String, required: true },
  author: { type: String, required: true },
  votes: { type: Number, default: 0 },
}

module.exports = mongoose.model('Card', cardSchema)
