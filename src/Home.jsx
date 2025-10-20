import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [zip, setZip] = useState("");
  const [prod, setProd] = useState("unit-trust");

  const products = [
    { slug: "unit-trust", label: "Unit Trust" },
    { slug: "motor", label: "Motor" },
    { slug: "home", label: "Home" },
    { slug: "life", label: "Life" },
    { slug: "travel", label: "Travel" },
    { slug: "medical", label: "Medical" }
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8">
          {/* left text & controls */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Compare Insurance & Investment Options in Real-Time and Save.
            </h1>
            <p className="text-lg text-[#dbe7ff] mb-8 max-w-xl">
              Invest safely and grow your wealth with professional fund management and trusted insurance partners.
            </p>

            {/* product buttons (like small cards) */}
            <div className="flex flex-wrap gap-3 mb-6">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/product/${encodeURIComponent(p.slug)}`}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm border border-white/10"
                >
                  {p.label}
                </Link>
              ))}
            </div>

            {/* CTA: product select + zip + button */}
            <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-stretch">
              <select
                value={prod}
                onChange={(e) => setProd(e.target.value)}
                className="rounded-md p-3 w-full sm:w-48 bg-white/10 border border-white/20"
              >
                {products.map(p => <option key={p.slug} value={p.slug}>{p.label}</option>)}
              </select>

              <input
                placeholder="Enter your ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="rounded-md p-3 w-full sm:flex-1"
              />

              <Link
                to={`/product/${encodeURIComponent(prod)}`}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
                onClick={() => {/* could attach analytics */}}
              >
                Compare quotes →
              </Link>
            </div>

            {/* trust / ratings */}
            <div className="mt-6 text-sm text-white/80">
              Excellent · Trusted partners · Fast quotes
            </div>
          </div>

          {/* right hero image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-md w-full relative">
              <img src="https://via.placeholder.com/520x420.png?text=Hero+Image" alt="hero" className="rounded-lg shadow-2xl" />
              {/* mock phone overlay */}
              <div className="absolute right-0 top-8 hidden md:block">
                <img src="https://via.placeholder.com/180x360.png?text=Mobile+Mock" alt="phone mock" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick product grid below hero (cards) */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <Link key={p.slug} to={`/product/${encodeURIComponent(p.slug)}`} className="bg-white rounded-lg shadow p-6 hover:shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{p.label}</h3>
              <p className="text-sm text-gray-600">Quick summary about {p.label} and why it matters.</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
