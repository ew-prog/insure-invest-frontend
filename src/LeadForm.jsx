import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setStatus(`❌ Error: ${errorData.message || response.statusText}`);
        return;
      }

      setStatus("✅ Lead submitted successfully!");
      setForm({ name: "", email: "", phone: "", product: "" });

    } catch (error) {
      setStatus(`❌ Network or backend error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-bold text-blue-700">InsureInvest</h1>
        <p className="text-gray-600 mt-1">Invest safely and grow your wealth with professional fund management.</p>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Submit a Lead</h2>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Product</option>
          <option value="Life Insurance">Life Insurance</option>
          <option value="Medical Insurance">Medical Insurance</option>
          <option value="Motor Insurance">Motor Insurance</option>
          <option value="Travel Insurance">Travel Insurance</option>
          <option value="Home Insurance">Home Insurance</option>
          <option value="Unit Trust Funds">Unit Trust Funds</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          📞 Book a Call
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </form>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © 2025 InsureInvest. All rights reserved.
      </footer>
    </div>
  );
}
