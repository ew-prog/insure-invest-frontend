import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import PartnerPortal from './PartnerPortal.jsx'
import LeadsDashboard from './LeadsDashboard.jsx'
import Login from './Login.jsx'

// ✅ AuthRoute component to protect private routes
function AuthRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token')
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        {/* ✅ Navbar always visible */}
        <Navbar />

        {/* ✅ Main Content Area */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
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
        </main>

        {/* ✅ Single consistent footer */}
        <footer className="text-center py-4 border-t text-sm text-gray-600">
          © {new Date().getFullYear()} InsureInvest. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
