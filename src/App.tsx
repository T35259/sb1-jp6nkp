import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FeaturesBenefits from './components/FeaturesBenefits';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FeaturesBenefits />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

export default App;