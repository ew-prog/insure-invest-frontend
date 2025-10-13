import { useState } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, notes }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Lead submitted successfully!");
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
      } else {
        setMessage(data.error || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting lead");
    }
  };

  return (
    <div>
      <h2>Submit a Lead</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Submit Lead</button>
      </form>
    </div>
  );
}
