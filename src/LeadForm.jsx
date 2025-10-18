import React, { useState } from 'react'

function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })
      if (!response.ok) throw new Error('Failed to submit lead')
      alert('Lead submitted successfully!')
      setName(''); setEmail(''); setPhone('')
    } catch (err) {
      alert('Submission failed. Check your backend connection.')
      console.error(err)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-green-700 mb-4">Submit a Lead</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 border rounded focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Submit Lead
        </button>
      </form>
      <div className="mt-6 text-center">
        <a
          href="https://wa.me/256774905936?text=Hello%20InsureInvest%2C%20I%27d%20like%20to%20learn%20more"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-green-700 hover:underline"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default LeadForm
