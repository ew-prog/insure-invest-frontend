import React, { useState } from "react";
import LeadForm from "./LeadForm";
import LeadsDashboard from "./LeadsDashboard";
import Success from "./Success";

function App() {
  const [view, setView] = useState("home");
  const [submittedLead, setSubmittedLead] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Navbar */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setView("home")}>
            InsureInvest
          </h1>
          <div className="space-x-6">
            <button onClick={() => setView("home")} className="hover:text-green-200">Home</button>
            <button onClick={() => setView("form")} className="hover:text-green-200">Partner Portal</button>
            <button onClick={() => setView("dashboard")} className="hover:text-green-200">Leads Dashboard</button>
          </div>
        </div>
      </nav>

      {/* 🔹 Main content */}
      <main className="flex-grow">
        {view === "home" && (
          <header className="text-center py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
            <h2 className="text-3xl font-semibold mb-2">InsureInvest Leads Platform</h2>
            <p className="text-lg opacity-90">
              Manage, track, and submit leads seamlessly.
            </p>
          </header>
        )}

        {view === "form" && (
          <div className="max-w-4xl mx-auto mt-10 p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Partner Portal</h3>
            <LeadForm
              onSuccess={(lead) => {
                setSubmittedLead(lead);
                setView("success");
              }}
            />
          </div>
        )}

        {view === "success" && (
          <Success lead={submittedLead} onBack={() => setView("dashboard")} />
        )}

        {view === "dashboard" && (
          <div className="max-w-6xl mx-auto mt-10 p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Leads Dashboard</h3>
            <LeadsDashboard />
          </div>
        )}
      </main>

      {/* 🔹 Footer */}
      <footer className="mt-auto bg-green-700 text-white py-4 text-center">
        <p>© 2025 InsureInvest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
