import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';

// Placeholder components – replace with real ones later
const Home = () => <div className="text-center py-20">Home Page</div>;
const InsurancePage = () => <div className="text-center py-20">Insurance Menu</div>;
const PartnerPortal = () => <div className="text-center py-20">Partner Portal</div>;
const LeadsDashboard = () => <div className="text-center py-20">Leads Dashboard</div>;
const Login = () => <div className="text-center py-20">Login Page</div>;

// AuthRoute wrapper
function AuthRoute({ children }) {
  return localStorage.getItem('token') ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Navbar />

        <div className="container mx-auto px-4 py-6 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/partner-portal"
              element={
                <AuthRoute>
                  <PartnerPortal />
                </AuthRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <LeadsDashboard />
                </AuthRoute>
              }
            />
          </Routes>
        </div>

        <footer className="text-center py-4 border-t mt-8 text-sm text-gray-600">
          © 2025 InsureInvest. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
