import React, { useEffect, useState } from "react";

function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`);
        const data = await res.json();
        setLeads(data);
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading leads...</p>;

  return (
    <div>
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
    </div>
  );
}

export default LeadsDashboard;
