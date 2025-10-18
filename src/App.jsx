import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import PartnerPortal from './PartnerPortal'
import LeadsDashboard from './LeadsDashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partner-portal" element={<PartnerPortal />} />
            <Route path="/dashboard" element={<LeadsDashboard />} />
          </Routes>
        </div>
        <footer className="text-center py-4 border-t mt-8 text-sm text-gray-600">
          © 2025 InsureInvest. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
