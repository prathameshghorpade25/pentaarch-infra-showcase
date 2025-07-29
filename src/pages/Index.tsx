import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <CTASection />
      </main>
    </div>
  );
};

export default Index;
