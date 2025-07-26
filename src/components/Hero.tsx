import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroInterior from '@/assets/hero-interior.jpg';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroInterior})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Fallback gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building <span className="text-accent">Dreams</span> into<br />
            <span className="text-accent">Reality</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            PentaArch Infra Services - Your trusted partner for comprehensive design solutions. 
            From Vastu-compliant layouts to premium finishes, we create spaces that inspire and endure.
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto group hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="h-5 w-5" />
                  Book a Site Visit
                  <motion.div 
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white !text-white hover:bg-white hover:!text-primary font-medium hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>

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
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;