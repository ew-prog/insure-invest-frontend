import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body
  const hashed = await bcrypt.hash(password, 10)
  try {
    const user = await User.create({ name, email, password: hashed, role })
    res.json({ message: 'User registered', userId: user._id })
  } catch (err) { res.status(400).json({ message: 'Registration failed', error: err.message }) }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(401).json({ message: 'User not found' })
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return res.status(401).json({ message: 'Invalid password' })
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' })
  res.json({ token, name: user.name, role: user.role })
})

export default router
