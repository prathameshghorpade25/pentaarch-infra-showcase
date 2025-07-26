import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Eye, 
  Users, 
  Shield, 
  Clock,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';

const trustFeatures = [
  {
    icon: MapPin,
    title: "Free Site Visit",
    description: "No-obligation consultation to explore options and understand your space",
    color: "text-blue-500"
  },
  {
    icon: Eye,
    title: "3D Visualization",
    description: "Immersive renders and virtual walkthroughs before execution begins",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Certified Experts",
    description: "Experienced Vastu consultants, civil engineers, and interior designers",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "ISO Certified Process",
    description: "Quality assurance in materials, processes, and service delivery",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "24-hr Inquiry Response",
    description: "We reply fast. Always. Your queries never go unanswered",
    color: "text-red-500"
  }
];

const badges = [
  { icon: Star, text: "★★★★★ Google Reviews", subtext: "4.9/5 rating" },
  { icon: Shield, text: "ISO Certified", subtext: "Quality assured" },
  { icon: Award, text: "500+ Projects", subtext: "Successfully completed" },
  { icon: CheckCircle, text: "98% Satisfaction", subtext: "Happy clients" }
];

const TrustBuilders = () => {
  return (
    <section className="py-20 bg-stone/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Our Process?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparency, expertise, and quality at every step. Here's what makes our approach different.
          </p>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-stone/20 rounded-full flex items-center justify-center shadow-lg">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Trusted by 500+ Clients Across India
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3">
                    <badge.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-primary text-sm mb-1">
                    {badge.text}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {badge.subtext}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Process Guarantee</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                <span>Fixed timeline commitment</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                <span>No hidden costs policy</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                <span>1-year warranty coverage</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBuilders;
