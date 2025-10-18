import React, { useEffect, useState } from 'react'

function LeadsDashboard() {
  const [leads, setLeads] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`)
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Leads Dashboard</h2>
      {leads.length === 0 ? (
        <p className="text-gray-600">No leads available yet.</p>
      ) : (
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-sm">
          <thead className="bg-green-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{lead.name}</td>
                <td className="p-2">{lead.email}</td>
                <td className="p-2">{lead.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default LeadsDashboard
