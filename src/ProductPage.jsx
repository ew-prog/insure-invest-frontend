import React, { useState } from "react";

export default function ProductPage({ productName }) {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceCo: "",
    product: productName || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // List of insurance companies
  const insuranceCompanies = [
    "Sanlam",
    "Allianz",
    "Old Mutual",
    "Britam",
    "ICEA",
    "Mayfair",
    "Prudential",
    "Goldstar",
  ];

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.insuranceCo,
            product: form.product,
          }),
        }
      );

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        setMessage(data.message || "❌ Error submitting form");
      } else {
        setMessage("✅ Lead submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          insuranceCo: "",
          product: productName || "",
        });
      }
    } catch (error) {
      console.error("Submit failed:", error);
      setMessage(
        "❌ Error submitting form. Please check your backend or network connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Page Header */}
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "#007847" }}
      >
        {productName} Lead Form
      </h2>

      {/* Lead Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        {/* Name */}
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00843D" }}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007847]"
        />

        {/* Email */}
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00843D" }}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007847]"
        />

        {/* Phone */}
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00843D" }}
        >
          Phone No
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007847]"
        />

        {/* Insurance Company */}
        <label
          className="block mb-1 font-semibold"
          style={{ color: "#00843D" }}
        >
          Insurance Company
        </label>
        <select
          name="insuranceCo"
          value={form.insuranceCo}
          onChange={handleChange}
          required
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#007847]"
        >
          <option value="">Select company</option>
          {insuranceCompanies.map((co) => (
            <option key={co} value={co}>
              {co}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#007847] hover:bg-[#005c35] text-white font-bold py-2 rounded transition"
        >
          {loading ? "Submitting..." : "Book a Call"}
        </button>

        {/* Submission Message */}
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("✅") ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      {/* Photo Section */}
      <div className="mt-8 w-full max-w-md flex justify-center">
        <img
          src="https://via.placeholder.com/350x150.png?text=Insurance+Image"
          alt="Insurance"
          className="rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}
