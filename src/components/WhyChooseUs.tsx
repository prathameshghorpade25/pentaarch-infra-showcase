import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Lightbulb,
  CheckCircle 
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Established Excellence',
    description: 'Over 15 years of transforming visions into reality, with 500+ successfully completed projects across residential and commercial sectors in India.'
  },
  {
    icon: Users,
    title: 'Multi-Disciplinary Expertise',
    description: 'Our team combines certified architects, Vastu consultants, interior designers, and master craftsmen to deliver holistic solutions.'
  },
  {
    icon: Clock,
    title: 'Promise-Driven Delivery',
    description: 'We honor our commitments with precision project management, ensuring timely completion while maintaining uncompromising quality standards.'
  },
  {
    icon: Shield,
    title: 'Premium Materials \u0026 Craftsmanship',
    description: 'Sourcing only the finest materials and employing time-tested construction techniques to ensure longevity and satisfaction.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Meets Tradition',
    description: 'Blending cutting-edge design trends with traditional Indian architectural wisdom, including authentic Vastu compliance.'
  },
  {
    icon: CheckCircle,
    title: 'Complete Project Stewardship',
    description: 'From conceptualization and design to construction and post-completion support, we are your single point of accountability.'
  }
];

const WhyChooseUs = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' },
    { number: 50, label: 'Expert Team Members', suffix: '+' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            The PentaArch Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Built on a foundation of trust, innovation, and heritage, PentaArch delivers more than just construction and design — 
            we create lasting legacies that blend timeless Indian architectural principles with modern living needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-md hover:shadow-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background animated gradient */}
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                'linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 100%)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {statsInView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;