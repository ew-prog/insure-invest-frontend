export default function PartnerPortal() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2">Partner Portal</h2>
      <p className="text-gray-600 mb-4">
        Access your partner dashboard, track leads, and manage referrals.
      </p>
      <a
        href="/portal"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Portal
      </a>
    </div>
  );
}
