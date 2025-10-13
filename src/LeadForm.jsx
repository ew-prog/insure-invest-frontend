import React, { useState } from 'react'

function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would send data to backend API
    alert(`Lead submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Submit a Lead</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit Lead
        </button>
      </form>
    </div>
    <a
  href="https://wa.me/256700123456?text=Hello%2C%20I%20am%20interested%20in%20your%20insurance%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-600 font-bold underline"
>
  Contact us on WhatsApp
</a>

  )
}

export default LeadForm
