import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PartnerPortal from './pages/PartnerPortal'
import LeadsDashboard from './pages/LeadsDashboard'
import Login from './pages/Login'

// AuthRoute wrapper for protected routes
const AuthRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token')
  return isAuthenticated ? element : <Navigate to="/login" replace />
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/partner-portal"
              element={<AuthRoute element={<PartnerPortal />} />}
            />
            <Route
              path="/dashboard"
              element={<AuthRoute element={<LeadsDashboard />} />}
            />
          </Routes>
        </main>
        <footer className="text-center text-gray-500 py-4 border-t mt-6">
          © {new Date().getFullYear()} InsureInvest. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
