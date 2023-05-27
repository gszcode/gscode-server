const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const { token } = req.cookies

  try {
    if (!token) throw new Error('Sin Autorización')

    const { id } = jwt.verify(token, process.env.SECRET_TOKEN)
    req.user = id

    next()
  } catch (error) {
    return res.status(403).json({ error: error.message })
  }
}

module.exports = verifyToken
