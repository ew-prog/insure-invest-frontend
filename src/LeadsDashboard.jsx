import React from 'react';

export default function LeadsDashboard() {
  const leads = [
    { name: 'Eddy', email: 'ewanyama@gmail.com', phone: '0774905936' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="py-2 px-4">{lead.name}</td>
              <td className="py-2 px-4">{lead.email}</td>
              <td className="py-2 px-4">{lead.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
