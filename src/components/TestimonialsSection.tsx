import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "QikLaunch delivered exceptional leads that converted into major accounts. Their targeting is precise and effective.",
      author: "C. Irwin",
      role: "Director",
      company: "Global Personnel"
    },
    {
      content: "The quality of leads we receive has transformed our sales process. Our close rates have never been higher.",
      author: "W. Kang",
      role: "CEO",
      company: "Alchemist Group"
    },
    {
      content: "Their lead generation strategy helped us exceed our sales targets within the first quarter.",
      author: "T. Smart",
      role: "Sales Director",
      company: "Action Personnel"
    }
  ];

  return (
    <div id="testimonials" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="hover-card bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-purple-400">{testimonial.role}</p>
                <p className="text-blue-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}