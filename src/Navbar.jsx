import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const products = [
    "unit-trust",
    "motor",
    "home",
    "life",
    "travel",
    "medical"
  ];
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-[#007847]">InsureInvest</Link>

        <ul className="hidden md:flex items-center space-x-6 text-gray-700">
          {products.map((p) => (
            <li key={p}>
              <Link
                to={`/product/${encodeURIComponent(p)}`}
                className="hover:text-[#00A550] capitalize"
              >
                {p.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-3">
          <a href="tel:+1234567890" className="text-sm text-gray-700 hidden md:inline">
            (888) 866-0849
          </a>
          <Link to="/" className="px-3 py-1 border rounded text-sm text-[#007847]">Sign In</Link>
          {/* mobile menu button placeholder */}
        </div>
      </div>
    </nav>
  );
}
