import React, { useState } from "react";

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

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.message || "Error submitting form");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setMessage("✅ Lead submitted successfully!");
      setForm({ name: "", email: "", phone: "", company: "InsureInvest", product: "" });
    } catch (error) {
      console.error(error);
      setMessage("❌ Error submitting form. Please check your backend or network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Submit Your Lead</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <label>Product</label>
      <select name="product" value={form.product} onChange={handleChange}>
        <option value="">Select product</option>
        <option value="Home Insurance">Home Insurance</option>
        <option value="Life Insurance">Life Insurance</option>
        <option value="Motor Insurance">Motor Insurance</option>
        <option value="Travel Insurance">Travel Insurance</option>
        <option value="Medical Insurance">Medical Insurance</option>
        <option value="Unit Trust Funds">Unit Trust Funds</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Lead"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
