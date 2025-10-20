import React, { useEffect, useState } from "react";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

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

  const filteredLeads = leads
    .filter((lead) =>
      filter === "All" ? true : lead.product === filter
    )
    .filter(
      (lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.product.toLowerCase().includes(search.toLowerCase())
    );

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Product", "Created At"];
    const rows = filteredLeads.map((lead) => [
      lead.name,
      lead.email,
      lead.phone,
      lead.company,
      lead.product,
      new Date(lead.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "insureinvest_leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    "All",
    "Home Insurance",
    "Life Insurance",
    "Motor Insurance",
    "Travel Insurance",
    "Medical Insurance",
    "Unit Trust Funds",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#007847" }}>
        InsureInvest Leads Dashboard
      </h2>

      {/* Search + Export */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 max-w-6xl mx-auto gap-3">
        <input
          type="text"
          placeholder="🔍 Search by name, email, or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#007847]"
        />

        <div className="flex gap-3 mt-2 sm:mt-0">
          <button
            onClick={fetchLeads}
            className="bg-[#007847] hover:bg-[#005c35] text-white px-4 py-2 rounded-lg font-semibold"
          >
            Refresh
          </button>
          <button
            onClick={exportToCSV}
            className="bg-[#00AEEF] hover:bg-[#008FCC] text-white px-4 py-2 rounded-lg font-semibold"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Product Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {products.map((prod) => (
          <button
            key={prod}
            onClick={() => setFilter(prod)}
            className={`px-4 py-2 rounded-full border ${
              filter === prod
                ? "bg-[#007847] text-white border-[#007847]"
                : "bg-white text-[#007847] border-[#007847]"
            } transition`}
          >
            {prod}
          </button>
        ))}
      </div>

      {/* Table */}
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
                <tr key={index} className="hover:bg-gray-100 transition duration-150">
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
