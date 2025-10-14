// If Navbar.jsx is in src/components/
import Navbar from "./components/Navbar";
import LeadForm from "./LeadForm";
import LeadsDashboard from "./LeadsDashboard";
import PartnerPortal from "./PartnerPortal";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <header className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">InsureInvest Leads Platform</h1>
          <p className="text-gray-500">Manage, track, and submit leads seamlessly.</p>
        </header>

        <section id="portal" className="bg-white p-6 rounded-2xl shadow">
          <PartnerPortal />
        </section>

        <section id="leadform" className="bg-white p-6 rounded-2xl shadow">
          <LeadForm />
        </section>

        <section id="leads" className="bg-white p-6 rounded-2xl shadow">
          <LeadsDashboard />
        </section>
      </div>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} InsureInvest. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
