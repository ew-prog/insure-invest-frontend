import React, { useState } from 'react';

export default function LeadForm() {
  const [lead, setLead] = useState({ name: '', email: '', phone: '', notes: '' });

  const handleChange = (e) => setLead({ ...lead, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Lead submitted:\n${JSON.stringify(lead, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="notes"
        placeholder="Notes"
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="col-span-full flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
        >
          Submit Lead
        </button>
      </div>
    </form>
  );
}
