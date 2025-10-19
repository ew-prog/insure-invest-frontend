import React, { useState } from 'react'

const insuranceTypes = [
  { name: 'Unit Trust Funds', desc: 'Invest safely and grow your wealth with professional fund management.' },
  { name: 'Life Insurance', desc: 'Secure your family’s future with life protection plans.' },
  { name: 'Motor Insurance', desc: 'Comprehensive and third-party car insurance you can trust.' },
  { name: 'Travel Insurance', desc: 'Stay protected wherever your journey takes you.' },
  { name: 'Home Insurance', desc: 'Protect your home and valuables against unexpected events.' },
  { name: 'Medical Insurance', desc: 'Access quality healthcare through flexible medical plans.' },
]

function InsuranceMenu() {
  const [selected, setSelected] = useState(insuranceTypes[0])
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', product: '', other: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`✅ Thank you, ${form.name}! We'll contact you soon about ${form.product}.`)
    setForm({ name: '', email: '', phone: '', company: '', product: '', other: '' })
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Insurance Products</h2>

      {/* Horizontal Menu */}
      <div className="flex overflow-x-auto space-x-4 mb-6 pb-2 border-b border-gray-200">
        {insuranceTypes.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelected(item)}
            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
              selected.name === item.name
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-accent hover:text-white'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6 text-center">{selected.desc}</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg mx-auto">
        <input type="text" placeholder="Full Name" required
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-primary" />
        <input type="email" placeholder="Email" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-primary" />
        <input type="tel" placeholder="Phone Number" required
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-primary" />

        <select
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-primary"
          required
        >
          <option value="">Select Insurance Company</option>
          <option>Old Mutual</option>
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

        <input
          type="text"
          placeholder="Product or 'Any other product'"
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-primary"
        />

        <button type="submit" className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-accent transition">
          📞 Book a Call
        </button>
      </form>
    </div>
  )
}

export default InsuranceMenu
