import React from 'react';

export default function StatsSection() {
  const stats = [
    { number: "95%", label: "Close Rate" },
    { number: "10x", label: "ROI Increase" },
    { number: "24h", label: "Response Time" },
    { number: "500+", label: "Leads Generated" }
  ];

  return (
    <div className="bg-slate-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}