import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Interior Design', 'Flooring', 'Wall Finishes', 'Civil Projects'];

const projects = [
  {
    id: 1,
    name: 'Modern Luxury Apartment',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&crop=center&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&crop=center&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&crop=center&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop&crop=center&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop&crop=center&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&crop=center&q=80'
    ],
    description: 'Complete interior transformation of a 3BHK apartment featuring contemporary design elements, smart storage solutions, and premium finishes with modern aesthetic appeal.',
    tags: ['Interior', 'Modern', 'Luxury']
  },
  {
    id: 2,
    name: 'Textured Wall Finishes',
    category: 'Wall Finishes',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800',
    images: [
      'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800'
    ],
    description: 'Artistic textured wall finishes that create visual depth and character throughout this residential project.',
    tags: ['Decorative', 'Texture', 'Artistic']
  },
  {
    id: 3,
    name: 'Premium Hardwood Flooring',
    category: 'Flooring',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
    ],
    description: 'Installation of premium engineered hardwood flooring with a sophisticated herringbone pattern in a luxury villa.',
    tags: ['Flooring', 'Hardwood', 'Premium']
  },
  {
    id: 4,
    name: 'Residential Construction',
    category: 'Civil Projects',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'
    ],
    description: 'Complete turnkey construction of a modern residential home from foundation to finishing with Vastu compliance.',
    tags: ['Construction', 'Turnkey', 'Vastu']
  },
  {
    id: 5,
    name: 'Designer Office Space',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800'
    ],
    description: 'Contemporary office interior design focusing on productivity, comfort, and brand identity integration.',
    tags: ['Office', 'Corporate', 'Modern']
  },
  {
    id: 6,
    name: 'Natural Stone Flooring',
    category: 'Flooring',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800'
    ],
    description: 'Elegant natural stone flooring installation featuring imported marble and granite in luxury residential spaces.',
    tags: ['Stone', 'Marble', 'Luxury']
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600"
            alt="Professional Architecture Portfolio Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Explore our showcase of completed projects that demonstrate our 
              commitment to excellence and innovative design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "professional" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-3"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    <span>View Project</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="space-y-2">
                  {selectedProject.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.name} ${index + 1}`}
                      className="w-full h-64 lg:h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{selectedProject.name}</h2>
                  <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                  <Button variant="professional" size="lg" asChild>
                    <Link to="/contact">
                      Start Similar Project
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Dream Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Portfolio;