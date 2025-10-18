import React from "react";

function Success({ lead, onBack }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">✅ Lead Submitted Successfully!</h2>
        <p className="mb-4">Thank you, {lead?.name}. We’ve received your details:</p>
        <ul className="text-left mb-4 text-gray-700">
          <li><strong>Email:</strong> {lead?.email}</li>
          <li><strong>Phone:</strong> {lead?.phone}</li>
        </ul>
        <button
          onClick={onBack}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Success;
