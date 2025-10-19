import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">InsureInvest</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-brand-light-green">Home</a>
        <a href="/insurance" className="hover:text-brand-light-green">Products</a>
        <a href="/dashboard" className="hover:text-brand-light-green">Leads Dashboard</a>
        <a href="/" className="hover:text-brand-light-green">Contact</a>
      </div>
    </nav>
  );
}
