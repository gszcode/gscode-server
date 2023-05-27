const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    trim: true,
    required: true
  }
})

module.exports = model('Blog', blogSchema)
