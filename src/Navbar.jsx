import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-600 text-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-xl">InsureInvest</h1>

        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation links */}
        <div className={`sm:flex flex-col sm:flex-row gap-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/partner-portal" className="hover:underline">Partner Portal</Link>
          <Link to="/dashboard" className="hover:underline">Leads Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
