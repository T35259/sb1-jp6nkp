import React from 'react';

export default function FeaturesBenefits() {
  const benefits = [
    {
      title: "Advanced Lead Targeting",
      description: "Our data-driven approach helps identify potential clients actively seeking labor hire services",
      icon: "🎯"
    },
    {
      title: "Market Intelligence",
      description: "Stay informed about industry trends and potential opportunities in your target market",
      icon: "📊"
    },
    {
      title: "Time Optimization",
      description: "Focus your resources on prospects most likely to convert based on behavioral data",
      icon: "⏱️"
    },
    {
      title: "Strategic Positioning",
      description: "Stand out in the market with tailored messaging that resonates with decision-makers",
      icon: "💡"
    },
    {
      title: "Lead Insights",
      description: "Detailed analytics about prospect engagement and market response patterns",
      icon: "📈"
    },
    {
      title: "Continuous Optimization",
      description: "Regular refinement of targeting parameters based on performance data",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Features & Benefits
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Our approach combines industry expertise with data-driven insights to help you connect with potential clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="hover-card bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 flex flex-col"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}