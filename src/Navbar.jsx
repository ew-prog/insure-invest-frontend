import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const products = [
    "Unit Trust Funds",
    "Motor Insurance",
    "Home Insurance",
    "Life Insurance",
    "Travel Insurance",
    "Medical Insurance",
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Site Name */}
        <Link to="/" className="text-xl font-bold text-[#006442]">
          InsureInvest
        </Link>

        {/* Menu */}
        <ul className="flex space-x-4">
          {products.map((product) => (
            <li key={product}>
              <Link
                to={`/product/${encodeURIComponent(product)}`}
                className="text-gray-700 hover:text-[#007847] font-semibold"
              >
                {product.replace("Insurance", "").trim()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
