import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { name: "Unit Trust", path: "/product/unit-trust" },
    { name: "Motor Insurance", path: "/product/motor" },
    { name: "Home Insurance", path: "/product/home" },
    { name: "Life Insurance", path: "/product/life" },
    { name: "Travel Insurance", path: "/product/travel" },
    { name: "Medical Insurance", path: "/product/medical" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
      {/* Hero Section */}
      <section className="bg-white w-full shadow-md py-16 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#007847" }}>
          Welcome to InsureInvest
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: "#00843D" }}>
          Invest safely and grow your wealth with professional fund management.
        </p>
      </section>

      {/* Products Quick Links */}
      <section className="mt-12 w-full flex flex-wrap justify-center gap-6 px-6">
        {products.map((product) => (
          <Link
            key={product.name}
            to={product.path}
            className="bg-white shadow-lg rounded-lg px-6 py-4 font-semibold text-lg transition hover:bg-[#007847] hover:text-white"
          >
            {product.name}
          </Link>
        ))}
      </section>

      {/* Optional Hero Image */}
      <section className="mt-12 mb-12 w-full flex justify-center">
        <img
          src="https://via.placeholder.com/800x300.png?text=InsureInvest+Hero+Image"
          alt="InsureInvest"
          className="rounded-lg shadow-lg"
        />
      </section>
    </div>
  );
}
