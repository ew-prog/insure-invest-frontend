import React, { useState } from "react";
import LeadForm from "./LeadForm";
import LeadDashboard from "./LeadDashboard";

const PartnerPortal = () => {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>InsureInvest Leads Platform</h1>
      <h2>Partner Portal</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("form")}>Submit a Lead</button>
        <button onClick={() => setActiveTab("dashboard")}>Lead Dashboard</button>
      </div>

      {activeTab === "form" && (
        <div>
          <h3>Submit a Lead</h3>
          <LeadForm />
        </div>
      )}

      {activeTab === "dashboard" && (
        <div>
          <h3>Leads Dashboard</h3>
          <LeadDashboard />
        </div>
      )}
    </div>
  );
};

export default PartnerPortal;
