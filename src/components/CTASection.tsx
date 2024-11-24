import React from 'react';

export default function CTASection() {
  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Ready to Scale Your Sales?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Get access to our premium lead generation system and start closing more deals today.
        </p>
        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <div>
              <p className="text-purple-400 mb-2">Email:</p>
              <a href="mailto:terry@qiklaunchmarketing.com" className="text-white hover:text-blue-400 transition-colors">
                terry@qiklaunchmarketing.com
              </a>
            </div>
            <div>
              <p className="text-purple-400 mb-2">Location:</p>
              <p className="text-white">Auckland CBD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}