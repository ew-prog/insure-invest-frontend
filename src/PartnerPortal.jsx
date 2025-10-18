import React from 'react'
import LeadForm from './LeadForm'

function PartnerPortal() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">Partner Portal</h2>
      <p className="text-gray-700 mb-6">
        Collaborate with our expert advisors and track client submissions in real time.
      </p>

      <LeadForm />
    </div>
  )
}

export default PartnerPortal


