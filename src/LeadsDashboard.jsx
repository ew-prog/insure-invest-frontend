import React, { useEffect, useState } from 'react'

function LeadsDashboard() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/leads`)
        if (!response.ok) throw new Error('Failed to fetch leads')
        const data = await response.json()
        setLeads(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()
  }, [])

  if (loading) return <p>Loading leads...</p>
  if (error) return <p className="text-red-500">Error: {error}</p>

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Leads Dashboard</h2>
      {leads.length === 0 ? (
        <p>No leads yet.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{lead.name}</td>
                <td className="px-4 py-2 border">{lead.email}</td>
                <td className="px-4 py-2 border">{lead.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default LeadsDashboard
