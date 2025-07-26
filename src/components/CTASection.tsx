import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Experience the PentaArch Difference?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join 500+ satisfied clients who have transformed their spaces with our comprehensive design and construction expertise. 
          From Vastu-compliant layouts to premium finishes, we bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <Link to="/contact">
              <Calendar className="h-5 w-5" />
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="tel:+919139979899">
              <Phone className="h-5 w-5" />
              Call Now: 9139979899 / 7219326600
            </a>
          </Button>
        </div>

        {/* Quick Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free Site Visit</h3>
            <p className="text-white/80">Complimentary consultation and site assessment</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
            <p className="text-white/80">Professional advice from certified designers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
            <p className="text-white/80">Get detailed quotation within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;