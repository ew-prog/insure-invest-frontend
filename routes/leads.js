import express from 'express'
import Lead from '../models/Lead.js'
import { sendEmailNotification } from '../utils/mailer.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// Middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Unauthorized' })
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch { res.status(401).json({ message: 'Invalid token' }) }
}

router.get('/', authenticate, async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 })
  res.json(leads)
})

router.post('/', authenticate, async (req, res) => {
  const { name, email, phone } = req.body
  const lead = await Lead.create({ name, email, phone, submittedBy: req.user.id })
  await sendEmailNotification(lead)
  res.json(lead)
})

export default router
