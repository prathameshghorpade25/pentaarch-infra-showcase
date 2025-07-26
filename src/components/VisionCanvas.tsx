import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Compass, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroInterior from '@/assets/hero-interior.jpg';

const VisionCanvas = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90">
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroInterior})` }}
      />
      
      {/* Golden Ratio Sections */}
      <div className="relative z-10 min-h-screen flex">
        {/* Main Content - 61.8% (Golden Ratio) */}
        <div className="w-full lg:w-[61.8%] flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              {/* Brand Philosophy */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <span className="text-accent font-medium tracking-wider uppercase text-sm">
                    Architectural Philosophy
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] mb-6">
                  <span className="block">DESIGN</span>
                  <span className="block text-accent">HARMONY</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-light opacity-80">
                    through tradition
                  </span>
                </h1>
              </div>

              {/* Value Proposition */}
              <div className="mb-12 space-y-6">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Where ancient Vastu wisdom meets contemporary innovation. 
                  PentaArch transforms spaces into sanctuaries of purpose and beauty.
                </p>
                
                {/* Unique Selling Propositions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
                  <div className="flex items-center gap-3 text-white/80">
                    <Building className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">500+ Spaces Transformed</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Compass className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Vastu-Compliant Design</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">15+ Years Mastery</span>
                  </div>
                </div>
              </div>

              {/* Action Zone */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold rounded-none border-2 border-accent hover:border-accent/90 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link to="/contact">
                      Begin Your Journey
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-10 py-6 text-lg font-semibold rounded-none border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                    asChild
                  >
                    <Link to="/about">
                      Our Philosophy
                    </Link>
                  </Button>
                </div>

                {/* Direct Contact */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <span className="text-white/70 text-sm">Direct Line:</span>
                  <a 
                    href="tel:+919139979899"
                    className="text-accent font-bold text-lg hover:text-accent/80 transition-colors"
                  >
                    9139979899
                  </a>
                  <span className="text-white/50">|</span>
                  <a 
                    href="tel:+917219326600"
                    className="text-accent font-bold text-lg hover:text-accent/80 transition-colors"
                  >
                    7219326600
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel - 38.2% (Golden Ratio) */}
        <div className="hidden lg:block w-[38.2%] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-primary/40" />
          <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
            <div className="space-y-8">
              {/* Architectural Quote */}
              <blockquote className="text-white/90 text-lg italic font-light leading-relaxed">
                "Architecture is a visual art, and the buildings speak for themselves."
                <footer className="text-accent text-sm mt-4 not-italic">
                  — Our Design Philosophy
                </footer>
              </blockquote>
              
              {/* Vertical Divider */}
              <div className="h-24 w-0.5 bg-accent/50 mx-auto" />
              
              {/* Consultation Hours */}
              <div className="text-white/80 space-y-2">
                <p className="text-sm font-medium">Consultation Hours</p>
                <p className="text-xs">Monday - Saturday</p>
                <p className="text-accent font-bold">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Architectural Element */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
        <div className="w-8 h-8 border border-white/50 rotate-45 flex items-center justify-center">
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
        </div>
        <span className="text-white/60 text-xs uppercase tracking-wider">Explore Below</span>
      </div>
    </section>
  );
};

export default VisionCanvas;
