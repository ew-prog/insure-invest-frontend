import React, { useEffect, useState } from "react";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`);
      const data = await response.json();
      if (data.success) {
        setLeads(data.leads);
      } else {
        alert("Failed to fetch leads");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Could not fetch leads.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Leads Dashboard</h1>

      {loading ? (
        <p>Loading leads...</p>
      ) : leads.length === 0 ? (
        <p>No leads submitted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">#</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Phone</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">ZIP</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={lead.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-3 px-6 text-sm text-gray-800">{index + 1}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{lead.name}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{lead.email}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{lead.phone}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{lead.product}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{lead.zip || "-"}</td>
                  <td className="py-3 px-6 text-sm text-gray-800">{new Date(lead.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
