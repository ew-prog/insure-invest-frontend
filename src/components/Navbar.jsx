// src/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">InsureInvest</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="#portal" className="hover:text-gray-200">Partner Portal</a>
          <a href="#leadform" className="hover:text-gray-200">Submit Lead</a>
          <a href="#leads" className="hover:text-gray-200">Leads Dashboard</a>
        </div>
      </div>
    </nav>
  );
}
