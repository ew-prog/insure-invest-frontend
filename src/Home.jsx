import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [zip, setZip] = useState("");
  const [prod, setProd] = useState("unit-trust");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const products = [
    { slug: "unit-trust", label: "Unit Trust" },
    { slug: "motor", label: "Motor" },
    { slug: "home", label: "Home" },
    { slug: "life", label: "Life" },
    { slug: "travel", label: "Travel" },
    { slug: "medical", label: "Medical" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, product: prod, zip })
      });

      const data = await response.json();
      if (data.success) {
        alert("Lead submitted successfully!");
        setName(""); setEmail(""); setPhone(""); setZip(""); setProd("unit-trust");
      } else {
        alert("Failed to submit lead: " + (data.error || ""));
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8">
          {/* Left: text + form */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Compare Insurance & Investment Options in Real-Time and Save.
            </h1>
            <p className="text-lg text-[#dbe7ff] mb-8 max-w-xl">
              Invest safely and grow your wealth with professional fund management and trusted insurance partners.
            </p>

            {/* Product buttons */}
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

            {/* Lead form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-stretch gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md p-3 w-full sm:flex-1"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md p-3 w-full sm:flex-1"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-md p-3 w-full sm:flex-1"
                required
              />
              <select
                value={prod}
                onChange={(e) => setProd(e.target.value)}
                className="rounded-md p-3 w-full sm:w-48 bg-white/10 border border-white/20"
              >
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.label}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="ZIP Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="rounded-md p-3 w-full sm:flex-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
              >
                {loading ? "Submitting..." : "Compare quotes →"}
              </button>
            </form>

            {/* trust / ratings */}
            <div className="mt-6 text-sm text-white/80">
              Excellent · Trusted partners · Fast quotes
            </div>
          </div>

          {/* Right: hero image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-md w-full relative">
              <img
                src="https://via.placeholder.com/520x420.png?text=Hero+Image"
                alt="hero"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute right-0 top-8 hidden md:block">
                <img
                  src="https://via.placeholder.com/180x360.png?text=Mobile+Mock"
                  alt="phone mock"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick product grid */}
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
