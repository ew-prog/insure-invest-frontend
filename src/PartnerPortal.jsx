import React from 'react'

function PartnerPortal() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Welcome to Partner Portal
      </h2>

      <div className="flex flex-col gap-4">
        {/* Your existing content goes here */}
        <p className="text-gray-700">
          Submit your leads or contact us for more support.
        </p>
      </div>

      {/* WhatsApp link fixed inside the div */}
      <div className="mt-6 text-center">
        <a
          href={`https://wa.me/256774905936?text=${encodeURIComponent(
            'Hello let us help you'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-100 text-green-800 font-medium rounded-lg hover:bg-green-200 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default PartnerPortal
