const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userAdmin = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: { type: String, required: true, trim: true },
  role: {
    type: String,
    default: 'admin',
    trim: true
  }
})

// Hash Password
userAdmin.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }

  next()
})

userAdmin.methods.comparePasswords = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = model('Admin', userAdmin)
