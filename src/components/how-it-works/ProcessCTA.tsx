import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, ArrowRight, Download, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProcessCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 10,0 L 10,60 M 0,10 L 60,10" stroke="currentColor" strokeWidth="1"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join 500+ clients who've chosen PentaArch for seamless execution. 
            Start your 5-step journey today and experience the difference.
          </p>

          {/* Main CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary hover:shadow-2xl transition-all duration-300 group"
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
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <a href="tel:+919139979899">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  Call Now
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">
                  <ArrowRight className="h-5 w-5" />
                  Explore Our Projects
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Secondary Options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Brochure</h3>
              <p className="text-white/80 text-sm mb-4">
                Download our detailed process guide and project examples
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href="#" download>
                  Download PDF
                </a>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-white/80 text-sm mb-4">
                Quick consultation via WhatsApp for immediate assistance
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href="https://wa.me/919139979899" target="_blank" rel="noopener noreferrer">
                  Start Chat
                </a>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Callback</h3>
              <p className="text-white/80 text-sm mb-4">
                Our team will call you at your preferred time
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link to="/contact">
                  Schedule Now
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="font-medium">9139979899 / 7219326600</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30"></div>
              <div className="text-center md:text-left">
                <p className="text-sm">
                  Available for consultation Monday-Saturday, 9 AM - 7 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-medium">★★★★★ 4.9/5 Rating</div>
            <div className="text-sm font-medium">500+ Projects</div>
            <div className="text-sm font-medium">15+ Years Experience</div>
            <div className="text-sm font-medium">98% Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCTA;
