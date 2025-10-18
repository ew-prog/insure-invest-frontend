import React, { useState } from "react";

function LeadForm({ onAddLead }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) throw new Error("Failed to submit lead");

      const newLead = await response.json();
      onAddLead(newLead);

      setName("");
      setEmail("");
      setPhone("");
      alert("✅ Lead submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit lead. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-green-700 mb-4">Submit a Lead</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Lead
        </button>
      </form>

      <div className="mt-4 text-center">
        <a
          href="https://wa.me/256774905936?text=Hello%20InsureInvest!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-100 text-green-700 font-medium rounded-lg hover:bg-green-200"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default LeadForm;
