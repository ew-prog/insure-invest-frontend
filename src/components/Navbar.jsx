import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">InsureInvest</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-200">Home</Link>
        <Link to="/partner" className="hover:text-green-200">Partner Portal</Link>
        <Link to="/dashboard" className="hover:text-green-200">Leads Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar
