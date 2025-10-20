import React, { useEffect, useState } from "react";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`);
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#007847" }}>
        Leads Dashboard
      </h2>

      <div className="flex justify-between items-center mb-4 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search by name, email, or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-[#007847]"
        />
        <button
          onClick={fetchLeads}
          className="ml-4 bg-[#007847] hover:bg-[#005c35] text-white px-4 py-2 rounded-lg font-semibold"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading leads...</p>
      ) : filteredLeads.length === 0 ? (
        <p className="text-center text-gray-500">No leads found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-[#007847] text-white">
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Company</th>
                <th className="py-2 px-4 border">Product</th>
                <th className="py-2 px-4 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-150"
                >
                  <td className="py-2 px-4 border">{lead.name}</td>
                  <td className="py-2 px-4 border">{lead.email}</td>
                  <td className="py-2 px-4 border">{lead.phone}</td>
                  <td className="py-2 px-4 border">{lead.company}</td>
                  <td className="py-2 px-4 border">{lead.product}</td>
                  <td className="py-2 px-4 border">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
