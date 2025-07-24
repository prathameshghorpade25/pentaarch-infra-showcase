import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Palette, 
  Square, 
  Building, 
  Compass,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Transform your spaces with our contemporary and functional interior design solutions.',
    features: ['Space Planning', 'Furniture Selection', 'Lighting Design', 'Color Consultation'],
    href: '/services#interior'
  },
  {
    icon: Palette,
    title: 'Decorative Finishes',
    description: 'Premium wall finishes and decorative treatments that add character to your spaces.',
    features: ['Textured Paints', 'Wall Papers', 'Designer Panels', 'Custom Murals'],
    href: '/services#finishes'
  },
  {
    icon: Square,
    title: 'Premium Flooring',
    description: 'High-quality flooring solutions for residential and commercial spaces.',
    features: ['Hardwood Floors', 'Luxury Vinyl', 'Natural Stone', 'Designer Tiles'],
    href: '/services#flooring'
  },
  {
    icon: Building,
    title: 'Civil Contracting',
    description: 'Complete construction and renovation services with attention to detail.',
    features: ['Home Construction', 'Renovations', 'Structural Work', 'Project Management'],
    href: '/services#civil'
  },
  {
    icon: Compass,
    title: 'Vastu Consultancy',
    description: 'Traditional Vastu principles integrated with modern design aesthetics.',
    features: ['Site Analysis', 'Layout Planning', 'Energy Flow', 'Design Integration'],
    href: '/services#vastu'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design and construction services 
            that bring your vision to life with precision and artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline-accent" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  asChild
                >
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="professional" size="lg" className="px-8 py-4 text-lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;