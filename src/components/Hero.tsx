import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroInterior from '@/assets/hero-interior.jpg';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroInterior})`
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision in Design.<br />
            <span className="text-accent">Perfection</span> in Execution.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Transform your spaces with PentaArch's expertise in interior design, 
            civil contracting, decorative finishes, and premium flooring solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to="/contact">
                <Calendar className="h-5 w-5" />
                Book a Site Visit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white !text-white hover:bg-white hover:!text-primary font-medium"
              asChild
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">9139979899 / 7219326600</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <p className="text-sm">
              Available for consultation Monday-Saturday, 9 AM - 7 PM
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;