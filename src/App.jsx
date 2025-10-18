import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PartnerPortal from './pages/PartnerPortal'
import LeadsDashboard from './pages/LeadsDashboard'
import Login from './pages/Login'

function AuthRoute({ children }) {
  return localStorage.getItem('token') ? children : <Navigate to="/login" />
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/partner-portal" element={<AuthRoute><PartnerPortal /></AuthRoute>} />
        <Route path="/dashboard" element={<AuthRoute><LeadsDashboard /></AuthRoute>} />
      </Routes>
    </Router>
  )
}

export default App
