const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
dotenv.config()

// Database
const database = require('./database/index')
database()

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// Routes
const authRoute = require('./routes/authRoute')
const blogRoute = require('./routes/blogRoute')

app.use('/api/auth', authRoute)
app.use('/api/blog', blogRoute)
app.use('/', (req, res) => {
  res.send('AHAHAHAHAH')
})

// Errors
const handleError = require('./middlewares/handleError')
app.use(handleError)

// Initialization
const PORT = process.env.PORT || 3000

app.listen(3000, () => {
  console.log(`Server en puerto: ${PORT}`)
})
