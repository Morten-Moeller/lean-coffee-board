const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/lean-coffee-board',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB (lean-coffee-board')
)

// express likes to call the server "app"
const app = express()

app.use('/', express.json()) // add middleware for json data
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))
app.use(require('./routes/error.js'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
