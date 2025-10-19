import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:productName" element={<ProductWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to get productName from URL
import { useParams } from "react-router-dom";
function ProductWrapper() {
  const { productName } = useParams();
  return <ProductPage productName={decodeURIComponent(productName)} />;
}
