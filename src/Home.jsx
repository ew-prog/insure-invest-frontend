import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        InsureInvest Leads Platform
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Manage, track, and submit leads seamlessly.<br />
        Connect clients to the best Life, General, and Investment solutions.
      </p>
      <Link
        to="/partner"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Get Started
      </Link>
    </div>
  )
}

export default Home
