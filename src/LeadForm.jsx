import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "InsureInvest",
    product: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log("Submitting form:", form);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "❌ Error submitting form");
      } else {
        setMessage("✅ Lead submitted successfully!");
        setForm({ name: "", email: "", phone: "", company: "InsureInvest", product: "" });
      }
    } catch (error) {
      console.error("Submit failed:", error);
      setMessage("❌ Error submitting form. Please check your backend or network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-light-green min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-brand-green mb-6 text-center">
            Submit Your Lead
          </h2>

          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
          />

          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
          />

          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
          />

          <label className="block mb-1 font-semibold">Product</label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-green"
          >
            <option value="">Select product</option>
            <option value="Home Insurance">Home Insurance</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value="Motor Insurance">Motor Insurance</option>
            <option value="Travel Insurance">Travel Insurance</option>
            <option value="Medical Insurance">Medical Insurance</option>
            <option value="Unit Trust Funds">Unit Trust Funds</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-green hover:bg-brand-dark-green text-white font-bold py-2 rounded transition"
          >
            {loading ? "Submitting..." : "Submit Lead"}
          </button>

          {message && (
            <p className={`mt-4 text-center ${message.includes("✅") ? "text-green-700" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
