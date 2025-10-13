import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LeadsDashboard from './LeadsDashboard';
import LeadForm from './LeadForm';
import PartnerPortal from './PartnerPortal';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LeadsDashboard />} />
          <Route path="/leads" element={<LeadForm />} />
          <Route path="/partner" element={<PartnerPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
