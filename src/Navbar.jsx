import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      {/* Brand */}
      <div className="font-bold text-xl">
        <Link to="/">InsureInvest</Link>
      </div>

      {/* Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/insurance" className="hover:underline">
          Insurance
        </Link>
        <Link to="/partner-portal" className="hover:underline">
          Partner Portal
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Leads Dashboard
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
