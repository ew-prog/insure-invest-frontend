import React, { useState } from "react";
import LeadForm from "./LeadForm";

function App() {
  const [leads, setLeads] = useState([]);

  const handleAddLead = (newLead) => {
    setLeads([...leads, newLead]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Navbar */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">InsureInvest</h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-green-200">Home</a>
            <a href="#portal" className="hover:text-green-200">Partner Portal</a>
            <a href="#leads" className="hover:text-green-200">Leads Dashboard</a>
          </div>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="text-center py-12 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <h2 className="text-3xl font-semibold mb-2">InsureInvest Leads Platform</h2>
        <p className="text-lg opacity-90">
          Manage, track, and submit leads seamlessly.
        </p>
      </header>

      {/* 🔹 Partner Portal Section */}
      <section id="portal" className="max-w-4xl mx-auto mt-10 p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Partner Portal</h3>
        <LeadForm onAddLead={handleAddLead} />
      </section>

      {/* 🔹 Leads Dashboard Section */}
      <section id="leads" className="max-w-6xl mx-auto mt-10 p-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Leads Dashboard</h3>

        {leads.length === 0 ? (
          <p className="text-gray-600 text-center">No leads available yet.</p>
        ) : (
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left py-2 px-4 border-b">Name</th>
                <th className="text-left py-2 px-4 border-b">Email</th>
                <th className="text-left py-2 px-4 border-b">Phone</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="hover:bg-green-50">
                  <td className="py-2 px-4 border-b">{lead.name}</td>
                  <td className="py-2 px-4 border-b">{lead.email}</td>
                  <td className="py-2 px-4 border-b">{lead.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* 🔹 Footer */}
      <footer className="mt-auto bg-green-700 text-white py-4 text-center">
        <p>© 2025 InsureInvest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
