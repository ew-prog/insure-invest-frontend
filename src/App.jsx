import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<ProductPageWrapper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// wrapper extracts param and maps to display name
import { useParams } from "react-router-dom";
function ProductPageWrapper() {
  const { productName } = useParams();
  const mapName = decodeURIComponent(productName);
  // you can map slugs to nicer names here if needed
  const niceName = mapName
    .replace(/-/g, " ")
    .split(" ")
    .map(w => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
  return <ProductPage productName={niceName} />;
}
