import React from 'react'
import PartnerPortal from './PartnerPortal'
import LeadForm from './LeadForm'
import LeadsDashboard from './LeadsDashboard'

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">InsureInvest Leads Platform</h1>
      <PartnerPortal />
      <LeadForm />
      <LeadsDashboard />
    </div>
  )
}

export default App
