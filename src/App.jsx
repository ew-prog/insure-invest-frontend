import React, { useEffect, useState } from "react"
import LeadForm from "./LeadForm"
import PartnerPortal from "./PartnerPortal"

function App() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch leads from backend API
  const fetchLeads = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL)
      if (!response.ok) throw new Error("Failed to fetch leads")
      const data = await response.json()
      setLeads(data)
    } catch (err) {
      console.error("Error fetching leads:", err)
      setError("Could not load leads. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-green-700 text-white shadow-md fixed top-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">InsureInvest</h1>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#" className="hover:text-green-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#partner" className="hover:text-green-200 transition">
                Partner Portal
              </a>
            </li>
            <li>
              <a href="#leadform" className="hover:text-green-200 transition">
                Submit Lead
              </a>
            </li>
            <li>
              <a href="#leads" className="hover:text-green-200 transition">
                Leads Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16 container mx-auto px-6">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            InsureInvest Leads Platform
          </h2>
          <p className="text-gray-600">
            Manage, track, and submit leads seamlessly.
          </p>
        </section>

        {/* Partner Portal */}
        <section id="partner" className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <PartnerPortal />
          </div>
        </section>

        {/* Lead Form */}
        <section id="leadform" className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <LeadForm />
          </div>
        </section>

        {/* Leads Dashboard */}
        <section id="leads" className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Leads Dashboard
            </h3>

            {loading && <p className="text-gray-500">Loading leads...</p>}
            {error && (
              <p className="text-red-500 font-medium mt-2">{error}</p>
            )}

            {!loading && !error && leads.length === 0 && (
              <p className="text-gray-500">No leads available yet.</p>
            )}

            {!loading && leads.length > 0 && (
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-green-100 text-green-700">
                  <tr>
                    <th className="p-3 border-b text-left">Name</th>
                    <th className="p-3 border-b text-left">Email</th>
                    <th className="p-3 border-b text-left">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{lead.name}</td>
                      <td className="p-3 border-b">{lead.email}</td>
                      <td className="p-3 border-b">{lead.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        © 2025 InsureInvest. All rights reserved.
      </footer>
    </div>
  )
}

export default App
