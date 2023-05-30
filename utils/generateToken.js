const jwt = require('jsonwebtoken')

const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: '1d'
  })

  return res.json({ token: token })
}

module.exports = generateToken
