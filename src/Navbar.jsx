import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-brand-green text-white px-6 py-4 flex justify-between items-center flex-wrap">
      <h1 className="font-bold text-lg">InsureInvest</h1>
      <ul className="flex space-x-4 mt-2 md:mt-0 flex-wrap">
        <li><a href="/product/unit-trust" className="hover:text-brand-light-green font-medium">Unit Trust</a></li>
        <li><a href="/product/motor" className="hover:text-brand-light-green font-medium">Motor</a></li>
        <li><a href="/product/home" className="hover:text-brand-light-green font-medium">Home</a></li>
        <li><a href="/product/life" className="hover:text-brand-light-green font-medium">Life Insurance</a></li>
        <li><a href="/product/travel" className="hover:text-brand-light-green font-medium">Travel</a></li>
        <li><a href="/product/medical" className="hover:text-brand-light-green font-medium">Medical</a></li>
      </ul>
    </nav>
  );
}
