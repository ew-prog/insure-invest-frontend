import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">InsureInvest</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-brand-light-green transition">Home</a></li>
        <li><a href="/products" className="hover:text-brand-light-green transition">Products</a></li>
        <li><a href="/leads" className="hover:text-brand-light-green transition">Leads Dashboard</a></li>
        <li><a href="/contact" className="hover:text-brand-light-green transition">Contact</a></li>
      </ul>
    </nav>
  );
}
