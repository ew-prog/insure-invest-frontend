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
        headers: {
          "Content-Type": "application/json"
        },
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Submit a Lead</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-2 mb-2 border rounded"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-2 mb-2 border rounded"
      />

      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full p-2 mb-2 border rounded"
      />

      <select
        name="product"
        value={form.product}
        onChange={handleChange}
        required
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="">Select Product</option>
        <option value="Life Insurance">Life Insurance</option>
        <option value="Medical Insurance">Medical Insurance</option>
        <option value="Motor Insurance">Motor Insurance</option>
        <option value="Travel Insurance">Travel Insurance</option>
        <option value="Home Insurance">Home Insurance</option>
        <option value="Unit Trust Funds">Unit Trust Funds</option>
      </select>

      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
        Submit
      </button>

      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
