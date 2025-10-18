import React, { useEffect, useState } from 'react'

function LeadsDashboard() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!import.meta.env.VITE_API_URL) {
      setError('Backend URL not set. Please check your .env or Render environment variables.')
      setLoading(false)
      return
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch leads: ${res.status}`)
        return res.json()
      })
      .then((data) => setLeads(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Leads Dashboard</h2>

      {loading ? (
        <p className="text-gray-600">Loading leads...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : leads.length === 0 ? (
        <p className="text-gray-600">No leads available yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={i} className="border-t hover:bg-green-50">
                  <td className="p-2">{lead.name}</td>
                  <td className="p-2">{lead.email}</td>
                  <td className="p-2">{lead.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default LeadsDashboard
