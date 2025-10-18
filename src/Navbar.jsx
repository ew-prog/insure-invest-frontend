// src/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">InsureInvest</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/partner-portal" className="hover:underline">
            Partner Portal
          </Link>
          <Link to="/submit-lead" className="hover:underline">
            Submit Lead
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Leads Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
