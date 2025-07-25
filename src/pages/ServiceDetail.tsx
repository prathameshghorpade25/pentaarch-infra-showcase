import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import interiorImage from '@/assets/service-interior-design.jpg';
import decorativeImage from '@/assets/service-decorative-finishes.jpg';
import flooringImage from '@/assets/service-flooring.jpg';
import civilImage from '@/assets/service-civil-contracting.jpg';
import vastuImage from '@/assets/service-vastu.jpg';

const serviceData: { [key: string]: any } = {
  'interior-design': {
    title: 'Interior Design',
    heroImage: interiorImage,
    overview: 'Transform your living or working space with our comprehensive interior design services. Our expert designers blend creativity with functionality to create environments that reflect your personality while optimizing comfort, efficiency, and aesthetic appeal.',
    keyOfferings: [
      'Space Planning & Layout Optimization',
      'Custom Furniture Design & Selection',
      'Lighting Design & Installation',
      'Color Consultation & Coordination',
      'Material & Texture Selection',
      '3D Visualization & Renderings'
    ],
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        title: 'Modern Living Room Transformation'
      },
      {
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        title: 'Contemporary Office Interior'
      }
    ],
    faqs: [
      {
        question: 'How long does an interior design project typically take?',
        answer: 'Project timelines vary based on scope, but most residential projects take 4-8 weeks from concept to completion.'
      },
      {
        question: 'Do you provide 3D visualizations?',
        answer: 'Yes, we provide detailed 3D renderings so you can visualize your space before implementation.'
      }
    ]
  },
  'decorative-finishes': {
    title: 'Decorative Finishes',
    heroImage: decorativeImage,
    overview: 'Elevate your interiors with premium decorative finishes that add character, depth, and sophistication to any space. Our skilled craftsmen specialize in innovative finishing techniques that transform ordinary walls into artistic focal points.',
    keyOfferings: [
      'Textured Paints & Specialty Coatings',
      'Premium Wall Papers & Coverings',
      'Custom Designer Panels & Moldings',
      'Artistic Murals & Feature Walls',
      'Venetian Plaster & Lime Finishes',
      'Metallic & Faux Finishes'
    ],
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1500673922987-e212871f11c22',
        title: 'Textured Feature Wall Design'
      },
      {
        image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e',
        title: 'Artistic Mural Installation'
      }
    ],
    faqs: [
      {
        question: 'What types of decorative finishes do you offer?',
        answer: 'We offer a wide range including textured paints, wallpapers, murals, Venetian plaster, and custom designer panels.'
      },
      {
        question: 'How do I maintain decorative finishes?',
        answer: 'Most finishes require minimal maintenance. We provide care instructions specific to each finish type.'
      }
    ]
  },
  'flooring': {
    title: 'Premium Flooring',
    heroImage: flooringImage,
    overview: 'Discover our extensive collection of premium flooring solutions that combine durability, beauty, and functionality. From classic hardwood to contemporary designer tiles, we offer materials and installation services that stand the test of time.',
    keyOfferings: [
      'Hardwood & Engineered Timber Flooring',
      'Luxury Vinyl Planks & Tiles',
      'Natural Stone & Marble Installation',
      'Designer Ceramic & Porcelain Tiles',
      'Laminate & Bamboo Flooring',
      'Custom Pattern & Inlay Work'
    ],
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
        title: 'Herringbone Hardwood Installation'
      },
      {
        image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151',
        title: 'Natural Stone Flooring'
      }
    ],
    faqs: [
      {
        question: 'Which flooring material is best for high-traffic areas?',
        answer: 'Porcelain tiles, luxury vinyl, and engineered hardwood are excellent choices for high-traffic areas due to their durability.'
      },
      {
        question: 'Do you provide flooring installation warranties?',
        answer: 'Yes, we provide comprehensive warranties on both materials and installation workmanship.'
      }
    ]
  },
  'civil-contracting': {
    title: 'Civil Contracting',
    heroImage: civilImage,
    overview: 'Complete civil contracting services from foundation to finishing. Our experienced team manages every aspect of construction with precision, quality assurance, and adherence to safety standards and timelines.',
    keyOfferings: [
      'New Construction Projects',
      'Home Renovations & Extensions',
      'Structural Modifications & Repairs',
      'Turnkey Project Management',
      'Foundation & Structural Work',
      'Quality Control & Safety Management'
    ],
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
        title: 'Residential Construction Project'
      },
      {
        image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace',
        title: 'Modern Home Extension'
      }
    ],
    faqs: [
      {
        question: 'Do you handle permit applications and approvals?',
        answer: 'Yes, we assist with all necessary permits and regulatory approvals as part of our turnkey service.'
      },
      {
        question: 'What is your approach to project timeline management?',
        answer: 'We use detailed project scheduling with regular milestones and progress updates to ensure timely completion.'
      }
    ]
  },
  'vastu-consultancy': {
    title: 'Vastu Consultancy',
    heroImage: vastuImage,
    overview: 'Harmonize your living and working spaces with ancient Vastu Shastra principles. Our certified Vastu consultants help create balanced environments that promote prosperity, health, and positive energy flow throughout your space.',
    keyOfferings: [
      'Comprehensive Vastu Analysis',
      'Energy Balancing & Flow Optimization',
      'Directional Design & Orientation',
      'Space Alignment & Room Planning',
      'Remedial Solutions & Corrections',
      'New Construction Vastu Planning'
    ],
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Vastu-Compliant Home Design'
      },
      {
        image: 'https://images.unsplash.com/photo-1496307653780-4288777d4833',
        title: 'Energy-Balanced Office Space'
      }
    ],
    faqs: [
      {
        question: 'Can Vastu principles be applied to existing homes?',
        answer: 'Yes, we provide remedial solutions and corrections that can be implemented in existing structures without major renovations.'
      },
      {
        question: 'How do you combine Vastu with modern design needs?',
        answer: 'We skillfully integrate Vastu principles with contemporary design aesthetics to create spaces that are both harmonious and stylish.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId as string];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Professional {service.title.toLowerCase()} services that exceed expectations
            </p>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">
                Get Quote Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Service Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.projects.map((project: any, index: number) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-sm">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.keyOfferings.map((offering: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq: any, index: number) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your {service.title.toLowerCase()} project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">
                <MessageCircle className="h-5 w-5 mr-2" />
                Enquire Now
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to="/portfolio">
                View Our Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default ServiceDetail;