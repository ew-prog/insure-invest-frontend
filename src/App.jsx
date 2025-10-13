import React from 'react';
import LeadForm from './LeadForm';
import LeadsDashboard from './LeadsDashboard';
import PartnerPortal from './PartnerPortal';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-blue-700 text-white p-4 shadow flex justify-between items-center">
        <h1 className="text-2xl font-bold">InsureInvest Leads Platform</h1>
        <nav className="space-x-4">
          <a href="#portal" className="hover:text-yellow-300">Partner Portal</a>
          <a href="#lead-form" className="hover:text-yellow-300">Submit Lead</a>
          <a href="#dashboard" className="hover:text-yellow-300">Dashboard</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6 space-y-10">
        {/* Partner Portal */}
        <section id="portal" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Partner Portal</h2>
          <p className="mb-4">Access your partner dashboard, track leads, and manage referrals.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            Go to Portal
          </button>
        </section>

        {/* Lead Form */}
        <section id="lead-form" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Submit a Lead</h2>
          <LeadForm />
        </section>

        {/* Dashboard */}
        <section id="dashboard" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Leads Dashboard</h2>
          <LeadsDashboard />
        </section>
      </main>

      <footer className="text-center py-4 bg-blue-700 text-white mt-10">
        © {new Date().getFullYear()} InsureInvest | All Rights Reserved
      </footer>
    </div>
  );
}
