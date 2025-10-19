import React, { useState } from 'react'

function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [insuranceCompany, setInsuranceCompany] = useState('')
  const [product, setProduct] = useState('')
  const [otherProduct, setOtherProduct] = useState('')

  const API_BASE = import.meta.env.VITE_API_BASE_URL

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      name,
      email,
      phone,
      insuranceCompany,
      product: product || otherProduct,
    }

    try {
      const response = await fetch(`${API_BASE}/api/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Failed to submit lead')

      alert('Lead submitted successfully!')
      setName(''); setEmail(''); setPhone(''); setInsuranceCompany(''); setProduct(''); setOtherProduct('')
    } catch (err) {
      console.error(err)
      alert('Submission failed. Check backend connection or .env settings.')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" required />
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" required />
        <select value={insuranceCompany} onChange={e => setInsuranceCompany(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" required>
          <option value="">Select Insurance Company</option>
          <option>OldMutual</option>
          <option>Sanlam</option>
          <option>Allianz</option>
          <option>Prudential</option>
          <option>Britam</option>
          <option>ICEA General</option>
          <option>Goldstar</option>
          <option>Mayfair</option>
          <option>AAR</option>
          <option>Any</option>
        </select>
        <input type="text" placeholder="Product" value={product} onChange={e => setProduct(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" />
        <input type="text" placeholder="Any Other Product" value={otherProduct} onChange={e => setOtherProduct(e.target.value)} className="p-3 border rounded focus:ring-2 focus:ring-green-400" />
        <button type="submit" className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
          Book a Call
        </button>
      </form>
    </div>
  )
}

export default LeadForm
