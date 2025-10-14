import React, { useState } from 'react'

function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('') // success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault()

    const apiUrl = import.meta.env.VITE_API_URL || 'https://insure-invest-backend-1.onrender.com/api/v1/leads'

    if (!apiUrl) {
      setStatus('Backend URL not set. Contact admin.')
      return
    }

    setStatus('Submitting lead...')

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })

      if (!response.ok) throw new Error('Failed to submit lead')

      const data = await response.json()
      console.log('Lead submitted:', data)
      setStatus('✅ Lead submitted successfully!')
      setName('')
      setEmail('')
      setPhone('')
    } catch (err) {
      console.error(err)
      setStatus('❌ Failed to submit lead. Please try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Submit a Lead
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Lead
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm font-medium text-gray-700">
          {status}
        </p>
      )}

      <div className="mt-6 text-center">
        <a
          href="https://wa.me/256774905936"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-100 text-green-800 font-medium rounded-lg hover:bg-green-200 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default LeadForm
