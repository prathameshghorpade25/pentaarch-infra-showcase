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
    title: '15+ Years Experience',
    description: 'Proven track record in delivering exceptional design and construction projects across residential and commercial sectors.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified architects, interior designers, and skilled craftsmen working together to ensure quality execution.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Project management excellence ensures on-time completion without compromising on quality standards.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality checks and premium materials guarantee long-lasting results and customer satisfaction.'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Creative problem-solving and modern techniques combined with traditional craftsmanship for unique outcomes.'
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Service',
    description: 'From initial consultation to final handover, we manage every aspect of your project with dedication.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose PentaArch?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine artistic vision with technical expertise to deliver spaces that 
            are not just beautiful, but functional and built to last.
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