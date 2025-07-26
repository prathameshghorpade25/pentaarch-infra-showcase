import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The PentaArch Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on a foundation of trust, innovation, and heritage, PentaArch delivers more than just construction and design — 
            we create lasting legacies that blend timeless Indian architectural principles with modern living needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
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
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Expert Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;