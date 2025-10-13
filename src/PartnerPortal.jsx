import React from 'react';

export default function PartnerPortal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm text-center">
        <h3 className="font-semibold text-blue-700">Assigned Leads</h3>
        <p className="text-2xl font-bold mt-2">50</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm text-center">
        <h3 className="font-semibold text-green-700">New Leads</h3>
        <p className="text-2xl font-bold mt-2">10</p>
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-sm text-center">
        <h3 className="font-semibold text-yellow-700">Conversion Rate</h3>
        <p className="text-2xl font-bold mt-2">60%</p>
      </div>
    </div>
  );
}
