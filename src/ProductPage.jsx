import React, { useState } from "react";

export default function ProductPage({ productName }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    photo: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const productDescriptions = {
    "Unit Trust":
      "Unit Trusts are pooled investment funds managed by experts to help you grow your wealth over time. Whether you’re saving for a future goal, building a portfolio, or seeking stable returns, InsureInvest partners with leading fund managers for your success. If you’d like to start or learn more at your convenience, please fill in the form below and schedule a call.",
    "Motor":
      "Motor Insurance protects you and your vehicle against accidents, theft, and damage. Choose from comprehensive, third-party, or commercial coverage to suit your needs. If you’re interested in comparing motor plans or getting the best quote, please fill in the form below and schedule a call.",
    "Home":
      "Home Insurance safeguards your property and belongings from fire, burglary, and natural disasters. It ensures your peace of mind knowing your home and assets are protected. To get a tailored quote or more details, kindly fill in your details below and book a call with our advisor.",
    "Life":
      "Life Insurance provides financial security for your loved ones in case of unforeseen events. It can cover education, income protection, or inheritance planning. If you’d like to understand the best plan for your needs, please share your details below and schedule a call with our experts.",
    "Travel":
      "Travel Insurance covers you for medical emergencies, lost luggage, flight delays, or trip cancellations during your journeys. Whether for business or leisure, ensure you travel with confidence. To buy or learn more about travel insurance options, please fill in the form below and book a call.",
    "Medical":
      "Medical Insurance ensures access to quality healthcare locally and internationally. It covers hospitalisation, outpatient, dental, and specialist care. For a suitable plan for you or your family, please complete the form below and we’ll reach out for a consultation.",
  };

  const description =
    productDescriptions[productName] ||
    "Please complete the form below to learn more about this insurance product.";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          product: productName,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", company: "", photo: null });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please check your network.");
    }
    setLoading(false);
  };

  const companies = [
    "Sanlam",
    "Allianz",
    "Old Mutual",
    "Britam",
    "ICEA",
    "Mayfair",
    "Prudential",
    "Goldstar",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* header */}
      <div className="bg-gradient-to-r from-[#006442] to-[#007847] py-10 text-center text-white">
        <h1 className="text-3xl font-semibold mb-2">{productName} Insurance</h1>
        <p className="max-w-2xl mx-auto text-white/90 text-base">{description}</p>
      </div>

      {/* form */}
      <div className="max-w-lg mx-auto bg-white mt-10 shadow-md rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-[#006442] mb-4 text-center">
          {productName} Lead Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone No"
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />
          <select
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          >
            <option value="">Select Insurance Company</option>
            {companies.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* photo upload */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Upload a Photo (optional)
            </label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              accept="image/*"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#004225] text-white py-3 rounded-lg hover:bg-[#006442] font-semibold"
          >
            {loading
