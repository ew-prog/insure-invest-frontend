import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadFormPage from "./pages/LeadFormPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadFormPage />} />
      </Routes>
    </Router>
  );
}
