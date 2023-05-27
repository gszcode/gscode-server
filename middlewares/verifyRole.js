const UserAdmin = require('../models/authModel')

const verifyRole = (req) => {
  console.log(req.user)
}

module.exports = verifyRole
