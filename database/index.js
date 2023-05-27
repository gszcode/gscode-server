const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectDB = () => {
  return mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Base de Datos Conectada')
    })
    .catch((err) => {
      console.log(`error: ${err}`)
    })
}

module.exports = connectDB
