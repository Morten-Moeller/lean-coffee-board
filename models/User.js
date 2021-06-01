const mongoose = require('mongoose')

const userSchema = {
  name: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    min: [16, 'Age have to be at least 16'],
  },
  email: {
    type: String,
    required: true,
    validate: [/^\S+@\S+\.\S+$/, 'Please enter a valid email adress'],
  },
}

module.exports = mongoose.model('User', userSchema)
