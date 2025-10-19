import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"; // optional home page component
import ProductPage from "./ProductPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productName" element={<ProductWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// Wrapper component to extract productName from URL
function ProductWrapper() {
  const { productName } = useParams();
  const formattedProductName = formatProductName(productName);
  return <ProductPage productName={formattedProductName} />;
}

// Optional: format URL-friendly names to readable names
function formatProductName(name) {
  switch (name.toLowerCase()) {
    case "unit-trust": return "Unit Trust";
    case "motor": return "Motor Insurance";
    case "home": return "Home Insurance";
    case "life": return "Life Insurance";
    case "travel": return "Travel Insurance";
    case "medical": return "Medical Insurance";
    default: return name;
  }
}
