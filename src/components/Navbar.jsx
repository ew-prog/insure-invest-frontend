import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">InsureInvest Leads</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:bg-blue-600 px-3 py-2 rounded">Dashboard</Link>
        <Link to="/leads" className="hover:bg-blue-600 px-3 py-2 rounded">Leads</Link>
        <Link to="/partner" className="hover:bg-blue-600 px-3 py-2 rounded">Partner Portal</Link>
      </div>
    </nav>
  );
}
