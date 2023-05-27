const jwt = require('jsonwebtoken')

const generateToken = (id, res) => {
  const expiresIn = 60 * 60 * 24 * 30

  const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: '1d'
  })

  return res
    .cookie('token', token, {
      httpOnly: false,
      secure: false,
      expires: new Date(Date.now() + expiresIn * 1000)
    })
    .json(token)
}

module.exports = generateToken
