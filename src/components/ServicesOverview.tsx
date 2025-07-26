import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sofa, 
  PaintBucket, 
  Layers, 
  Hammer, 
  Compass,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Sofa,
    title: 'Interior Design',
    description: 'Crafting personalized living and working environments that reflect your unique style while maximizing functionality.',
    features: ['Custom Space Planning', 'Bespoke Furniture Design', 'Ambient Lighting Systems', 'Material & Color Curation'],
    href: '/services#interior'
  },
  {
    icon: PaintBucket,
    title: 'Decorative Finishes',
    description: 'Artisan-quality wall treatments and surface finishes that transform ordinary walls into design statements.',
    features: ['Venetian Plaster', 'Specialty Paint Effects', '3D Wall Panels', 'Hand-painted Murals'],
    href: '/services#finishes'
  },
  {
    icon: Layers,
    title: 'Premium Flooring',
    description: 'Superior flooring installations using premium materials, combining durability with aesthetic excellence.',
    features: ['Engineered Hardwood', 'Italian Marble', 'Luxury Vinyl Plank', 'Artisan Tiles'],
    href: '/services#flooring'
  },
  {
    icon: Hammer,
    title: 'Civil Contracting',
    description: 'Full-scale construction and renovation expertise with meticulous attention to structural integrity and timeline adherence.',
    features: ['Residential Construction', 'Commercial Renovations', 'Structural Engineering', 'End-to-End Project Management'],
    href: '/services#civil'
  },
  {
    icon: Compass,
    title: 'Vastu Consultancy',
    description: 'Ancient Vastu Shastra wisdom seamlessly integrated with contemporary architectural principles for harmonious spaces.',
    features: ['Comprehensive Site Analysis', 'Vastu-Compliant Planning', 'Energy Optimization', 'Modern-Traditional Fusion'],
    href: '/services#vastu'
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Five Pillars of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PentaArch's comprehensive approach combines traditional Indian wisdom with contemporary design innovation. 
            Each service reflects our commitment to creating spaces that are both beautiful and harmonious.
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