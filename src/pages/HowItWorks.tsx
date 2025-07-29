import React from 'react';
import Navigation from '@/components/Navigation';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import ProcessSteps from '@/components/how-it-works/ProcessSteps';
import TrustBuilders from '@/components/how-it-works/TrustBuilders';
import ProcessTestimonials from '@/components/how-it-works/ProcessTestimonials';
import ProcessCTA from '@/components/how-it-works/ProcessCTA';

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <HowItWorksHero />
        <ProcessSteps />
        <TrustBuilders />
        <ProcessTestimonials />
        <ProcessCTA />
      </main>
    </div>
  );
};

export default HowItWorks;
