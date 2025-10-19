import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadForm from "./LeadForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadForm />} />
      </Routes>
    </Router>
  );
}
