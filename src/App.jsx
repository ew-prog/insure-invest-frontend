import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ProductPage from "./ProductPage";

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Only once at top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productName" element={<ProductWrapper />} />
      </Routes>
      <Footer /> {/* Only once at bottom */}
    </Router>
  );
}

// Wrapper to extract productName from URL
function ProductWrapper() {
  const { productName } = useParams();
  const formattedProductName = formatProductName(productName);
  return <ProductPage productName={formattedProductName} />; // No Navbar/Footer here
}

// Format URL-friendly names to readable names
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
