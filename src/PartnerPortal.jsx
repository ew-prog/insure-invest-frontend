import { useState, useEffect } from "react";
import LeadForm from "./LeadForm";

export default function PartnerPortal() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

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
    <div>
      <h1>Partner Portal</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => { setShowForm(true); setShowDashboard(false); }}>
          Submit a Lead
        </button>
        <button onClick={() => { setShowForm(false); setShowDashboard(true); }}>
          Lead Dashboard
        </button>
      </div>

      {showForm && <LeadForm />}
      {showDashboard && (
        <div>
          <h2>Lead Dashboard</h2>
          {loading ? (
            <p>Loading leads...</p>
          ) : leads.length === 0 ? (
            <p>No leads yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
