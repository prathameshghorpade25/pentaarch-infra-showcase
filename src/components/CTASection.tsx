import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Experience the PentaArch Difference?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Join 500+ satisfied clients who have transformed their spaces with our comprehensive design and construction expertise. 
          From Vastu-compliant layouts to premium finishes, we bring your vision to life.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
                Get Free Consultation
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
                Call Now: 9139979899 / 7219326600
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Calendar,
              title: 'Free Site Visit',
              description: 'Complimentary consultation and site assessment'
            },
            {
              icon: MessageCircle,
              title: 'Expert Guidance', 
              description: 'Professional advice from certified designers'
            },
            {
              icon: ArrowRight,
              title: 'Quick Response',
              description: 'Get detailed quotation within 24 hours'
            }
          ].map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;