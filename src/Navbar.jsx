import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white px-6 py-4 flex justify-between items-center flex-wrap">
      {/* Smaller logo */}
      <h1 className="font-bold text-lg" style={{ color: "#007847" }}>
        InsureInvest
      </h1>
      <ul className="flex space-x-4 mt-2 md:mt-0 flex-wrap">
        <li>
          <Link to="/product/unit-trust" className="hover:text-brand-light-green font-medium">
            Unit Trust
          </Link>
        </li>
        <li>
          <Link to="/product/motor" className="hover:text-brand-light-green font-medium">
            Motor
          </Link>
        </li>
        <li>
          <Link to="/product/home" className="hover:text-brand-light-green font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product/life" className="hover:text-brand-light-green font-medium">
            Life Insurance
          </Link>
        </li>
        <li>
          <Link to="/product/travel" className="hover:text-brand-light-green font-medium">
            Travel
          </Link>
        </li>
        <li>
          <Link to="/product/medical" className="hover:text-brand-light-green font-medium">
            Medical
          </Link>
        </li>
      </ul>
    </nav>
  );
}
