import React from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImage from '@/assets/service-interior-design.jpg';
import decorativeImage from '@/assets/service-decorative-finishes.jpg';
import flooringImage from '@/assets/service-flooring.jpg';
import civilImage from '@/assets/service-civil-contracting.jpg';
import vastuImage from '@/assets/service-vastu.jpg';

const services = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    image: interiorImage,
    description: 'Transform your space with our expert interior design services that blend functionality with aesthetic appeal. We create environments that reflect your personality while maximizing comfort and efficiency.',
    features: [
      'Space Planning & Layout Design',
      'Furniture Selection & Procurement',
      'Lighting Design & Installation',
      'Color Consultation & Coordination'
    ],
    link: '/services/interior-design'
  },
  {
    id: 'decorative-finishes',
    title: 'Decorative Finishes',
    image: decorativeImage,
    description: 'Elevate your interiors with premium decorative finishes that add character and sophistication to any space. Our skilled craftsmen bring artistic vision to life through innovative finishing techniques.',
    features: [
      'Textured Paints & Specialty Coatings',
      'Premium Wall Papers & Coverings',
      'Custom Designer Panels',
      'Artistic Murals & Feature Walls'
    ],
    link: '/services/decorative-finishes'
  },
  {
    id: 'flooring',
    title: 'Premium Flooring',
    image: flooringImage,
    description: 'Discover our extensive range of premium flooring solutions that combine durability, beauty, and functionality. From classic hardwood to modern designer tiles, we have options for every style and budget.',
    features: [
      'Hardwood Floors & Engineered Timber',
      'Luxury Vinyl Planks & Tiles',
      'Natural Stone & Marble',
      'Designer Ceramic & Porcelain Tiles'
    ],
    link: '/services/flooring'
  },
  {
    id: 'civil-contracting',
    title: 'Civil Contracting',
    image: civilImage,
    description: 'Complete civil contracting services from foundation to finish. Our experienced team handles everything from new construction to complex renovations with precision and quality assurance.',
    features: [
      'New Construction Projects',
      'Home Renovations & Extensions',
      'Structural Modifications',
      'Turnkey Project Management'
    ],
    link: '/services/civil-contracting'
  },
  {
    id: 'vastu-consultancy',
    title: 'Vastu Consultancy',
    image: vastuImage,
    description: 'Harmonize your living and working spaces with ancient Vastu principles. Our certified consultants help create balanced environments that promote prosperity, health, and positive energy flow.',
    features: [
      'Energy Balancing & Flow Analysis',
      'Directional Design & Orientation',
      'Space Alignment & Optimization',
      'Remedial Solutions & Corrections'
    ],
    link: '/services/vastu-consultancy'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-stone to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comprehensive design and construction solutions tailored to transform 
              your vision into reality with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="professional" size="lg" asChild>
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">
                        Enquire Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you create the perfect environment that reflects your style and meets your needs.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Services;