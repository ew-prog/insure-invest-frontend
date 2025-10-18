import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
        Welcome to InsureInvest
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
        Your one-stop platform to manage, track, and submit insurance and
        investment leads seamlessly. Empowering agents, brokers, and partners
        to grow together.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Link
          to="/partner-portal"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          Partner Portal
        </Link>

        <Link
          to="/submit-lead"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-colors"
        >
          Submit a Lead
        </Link>

        <Link
          to="/dashboard"
          className="bg-green-100 text-green-700 px-6 py-3 rounded-lg border border-green-300 shadow hover:bg-green-200 transition-colors"
        >
          Leads Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Home
