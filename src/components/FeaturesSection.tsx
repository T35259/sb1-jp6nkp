import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: "Qualified Decision Makers",
      description: "Connect directly with C-suite executives and key decision makers in your target market",
      icon: "👥"
    },
    {
      title: "Data-Driven Targeting",
      description: "Advanced analytics ensure your leads match your ideal customer profile",
      icon: "📊"
    },
    {
      title: "Ready to Convert",
      description: "Pre-qualified leads with genuine interest and budget authority",
      icon: "🎯"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Why Top Companies Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="hover-card bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}