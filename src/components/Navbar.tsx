import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/logo.svg" alt="QikLaunch" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-2 bg-black/20 rounded-full p-1">
            <a href="#services" className="nav-link">Services</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}