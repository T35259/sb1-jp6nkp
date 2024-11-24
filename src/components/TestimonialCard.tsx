import React from 'react';

interface TestimonialProps {
  name: string;
  company: string;
  content: string;
}

export default function TestimonialCard({ name, company, content }: TestimonialProps) {
  return (
    <div className="hover-card bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20">
      <div className="flex flex-col h-full">
        <p className="text-gray-300 italic mb-6">"{content}"</p>
        <div className="mt-auto">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-blue-400">{company}</p>
        </div>
      </div>
    </div>
  );
}