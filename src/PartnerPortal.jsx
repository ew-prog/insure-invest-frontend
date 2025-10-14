import { useState, useEffect } from "react";
import LeadForm from "./LeadForm";

export default function PartnerPortal() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/leads`);
      const data = await res.json();
      setLeads(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          InsureInvest Leads Platform
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Partner Portal
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowForm(true)}
            className={`px-4 py-2 rounded-lg text-white ${
              showForm ? "bg-indigo-600" : "bg-gray-400"
            }`}
          >
            Submit a Lead
          </button>
          <button
            onClick={() => setShowForm(false)}
            className={`px-4 py-2 rounded-lg text-white ${
              !showForm ? "bg-indigo-600" : "bg-gray-400"
            }`}
          >
            Lead Dashboard
          </button>
        </div>

        {showForm ? (
          <div className="border-t pt-4">
            <LeadForm onLeadSubmitted={fetchLeads} />
          </div>
        ) : (
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">Leads Dashboard</h3>

            {loading ? (
              <p className="text-gray-500">Loading leads...</p>
            ) : leads.length === 0 ? (
              <p className="text-gray-500">No leads yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition"
                  >
                    <h4 className="font-bold text-indigo-700">{lead.name}</h4>
                    <p className="text-sm text-gray-700">{lead.email}</p>
                    <p className="text-sm text-gray-700">{lead.phone}</p>
                    {lead.notes && (
                      <p className="text-sm text-gray-600 mt-2 italic">
                        {lead.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
