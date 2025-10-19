import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Detailed product descriptions
const productDescriptions = {
  "Home Insurance":
    "Home Insurance protects your property, personal belongings, and valuables against risks such as fire, theft, natural disasters, and accidental damage. Our comprehensive coverage ensures you can recover financially from unexpected events, giving you peace of mind knowing your home and possessions are safe. Policies can be tailored to suit your specific property type and location.",
  
  "Life Insurance":
    "Life Insurance provides financial security for your loved ones in the event of an untimely death. It helps cover living expenses, mortgage payments, education fees, and other financial obligations, ensuring your family’s lifestyle and future plans remain uninterrupted. Flexible policy options allow you to choose coverage that fits your long-term financial goals.",
  
  "Motor Insurance":
    "Motor Insurance protects your vehicle against accidental damage, theft, fire, and third-party liabilities. Our plans offer comprehensive coverage, including roadside assistance, replacement vehicle options, and claims support, so you can drive confidently. You can customize your coverage based on your car type and usage.",
  
  "Travel Insurance":
    "Travel Insurance provides protection during both local and international trips. Coverage includes medical emergencies, trip cancellations, lost luggage, flight delays, and personal liability. This ensures you can travel with confidence, knowing you are financially protected against unforeseen events that could disrupt your travel plans.",
  
  "Medical Insurance":
    "Medical Insurance guarantees access to quality healthcare services when you need them most. Coverage includes hospitalization, consultations, surgeries, prescriptions, and preventive care. Our plans are designed to minimize your out-of-pocket medical costs and ensure that you and your family receive timely, professional healthcare.",
  
  "Unit Trust Funds":
    "Unit Trust Funds allow you to invest in a diversified portfolio of assets, managed by professional fund managers. They provide a simple and flexible way to grow your wealth over time while spreading risk. Whether you are a beginner or an experienced investor, our funds offer options tailored to your risk profile, investment goals, and financial planning needs."
};

export default function ProductPage({ productName }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceCo: "",
    product: productName || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Product Header */}
        <h2
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: "#007847" }}
        >
          {productName} Lead Form
        </h2>

        {/* Product Description */}
        <p className="mb-6 text-center text-gray-700 max-w-lg">
          {productDescriptions[productName]}
          <br />
          <span className="mt-2 block">
            To learn more or invest in {productName} at your convenience, please
            fill in the form below to schedule a call with one of our
            professional advisors.
          </span>
        </p>

        {/* Lead Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
        >
          <label className="block mb-1 font-semibold" style={{ color: "#00843D" }}>
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

          <label className="block mb-1 font-semibold" style={{ color: "#00843D" }}>
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

          <label className="block mb-1 font-semibold" style={{ color: "#00843D" }}>
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

          <label className="block mb-1 font-semibold" style={{ color: "#00843D" }}>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#007847] hover:bg-[#005c35] text-white font-bold py-2 rounded transition"
          >
            {loading ? "Submitting..." : "Book a Call"}
          </button>

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

      <Footer />
    </div>
  );
}
