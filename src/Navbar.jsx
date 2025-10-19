import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-primary text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">InsureInvest</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/insurance" className="hover:text-accent">Products</Link>
          <Link to="/partner-portal" className="hover:text-accent">Partner Portal</Link>
          <Link to="/dashboard" className="hover:text-accent">Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
