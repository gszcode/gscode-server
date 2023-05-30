const UserAdmin = require('../models/authModel')

const verifyRole = async (req, res, next) => {
  try {
    const userRole = await UserAdmin.findById(req.user)

    if (userRole.role !== 'admin') throw new Error('Sin Autorización')

    return next()
  } catch (error) {
    return res.json({ error: error.message })
  }
}

module.exports = verifyRole
