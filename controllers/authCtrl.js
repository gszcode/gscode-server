const UserAdmin = require('../models/authModel')
const generateToken = require('../utils/generateToken')

const register = async (req, res) => {
  const newAdmin = new UserAdmin(req.body)
  await newAdmin.save()

  return res.json('Admin Creado')
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) throw new Error('Campos Incompletos')

    const admin = await UserAdmin.findOne({ email })

    if (!admin || !(await admin.comparePasswords(password)))
      throw new Error('Credenciales Incorrectas')

    generateToken(admin.id, res)
  } catch (error) {
    return res.json({ error: error.message })
  }
}

module.exports = { login, register }
