import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  Palette, 
  Layers3, 
  Hammer, 
  Compass,
  ArrowUpRight,
  Sparkles,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const masteryDomains = [
  {
    id: 'spaces',
    icon: Home,
    title: 'Spatial Alchemy',
    subtitle: 'Interior Transformation',
    description: 'Transmutting ordinary rooms into extraordinary experiences through thoughtful spatial choreography and purposeful design.',
    specialties: ['Residential Sanctuaries', 'Corporate Environments', 'Hospitality Concepts', 'Retail Experiences'],
    color: 'from-purple-500 to-indigo-600',
    accentColor: 'purple',
    href: '/services/spatial-alchemy'
  },
  {
    id: 'surfaces',
    icon: Palette,
    title: 'Surface Poetry',
    subtitle: 'Decorative Artistry',
    description: 'Crafting tactile narratives through innovative finishes that speak to the soul and transform perception.',
    specialties: ['Venetian Mastery', 'Textural Symphonies', 'Metallic Expressions', 'Organic Treatments'],
    color: 'from-rose-500 to-pink-600',
    accentColor: 'rose',
    href: '/services/surface-poetry'
  },
  {
    id: 'foundations',
    icon: Layers3,
    title: 'Foundation Stories',
    subtitle: 'Premium Flooring',
    description: 'Every step tells a story. We curate foundations that honor both tradition and innovation in every grain and tile.',
    specialties: ['Heritage Woods', 'Stone Narratives', 'Contemporary Composites', 'Artisanal Ceramics'],
    color: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    href: '/services/foundation-stories'
  },
  {
    id: 'structures',
    icon: Hammer,
    title: 'Structural Symphonies',
    subtitle: 'Civil Excellence',
    description: 'Building dreams from ground up with engineering precision and architectural poetry in perfect harmony.',
    specialties: ['Residential Genesis', 'Commercial Monuments', 'Heritage Restoration', 'Sustainable Construction'],
    color: 'from-teal-500 to-cyan-600',
    accentColor: 'teal',
    href: '/services/structural-symphonies'
  },
  {
    id: 'harmony',
    icon: Compass,
    title: 'Cosmic Harmony',
    subtitle: 'Vastu Integration',
    description: 'Aligning architectural elements with cosmic energies to create spaces that nurture prosperity and well-being.',
    specialties: ['Energy Mapping', 'Directional Optimization', 'Elemental Balance', 'Sacred Geometry'],
    color: 'from-emerald-500 to-green-600',
    accentColor: 'emerald',
    href: '/services/cosmic-harmony'
  }
];

const MasteryPentagon = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 border-2 border-accent rotate-45 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-accent -rotate-45" />
            </div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Five Dimensions of Mastery
            </span>
            <div className="w-8 h-8 border-2 border-accent rotate-45 flex items-center justify-center">
              <Target className="h-4 w-4 text-accent -rotate-45" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            THE PENTAGON
            <span className="block text-2xl md:text-3xl font-light text-muted-foreground mt-2">
              Where Five Arts Converge
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            PentaArch's mastery spans five interconnected domains, each a universe of expertise that contributes to 
            the holistic transformation of your environment. Discover the depth of our craft.
          </p>
        </div>

        {/* Pentagon Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Pentagon Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-8 mb-16">
            {/* Top Row - 2 items centered */}
            <div className="col-start-2 col-span-1">
              <MasteryCard 
                service={masteryDomains[0]} 
                isActive={activeService === masteryDomains[0].id}
                onHover={setActiveService}
              />
            </div>
            <div className="col-start-4 col-span-1">
              <MasteryCard 
                service={masteryDomains[1]} 
                isActive={activeService === masteryDomains[1].id}
                onHover={setActiveService}
              />
            </div>
            
            {/* Middle Row - 3 items */}
            <div className="col-start-1 col-span-1 mt-8">
              <MasteryCard 
                service={masteryDomains[4]} 
                isActive={activeService === masteryDomains[4].id}
                onHover={setActiveService}
              />
            </div>
            <div className="col-start-3 col-span-1 mt-16">
              {/* Center Pentagon Symbol */}
              <div className="h-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 border-4 border-accent/30 rotate-45 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center -rotate-45">
                      <span className="text-white font-bold text-sm">PENTA</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-4 h-4 bg-accent rounded-full animate-pulse" />
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </div>
            <div className="col-start-5 col-span-1 mt-8">
              <MasteryCard 
                service={masteryDomains[3]} 
                isActive={activeService === masteryDomains[3].id}
                onHover={setActiveService}
              />
            </div>
            
            {/* Bottom Row - 1 item centered */}
            <div className="col-start-3 col-span-1 mt-8">
              <MasteryCard 
                service={masteryDomains[2]} 
                isActive={activeService === masteryDomains[2].id}
                onHover={setActiveService}
              />
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {masteryDomains.map((service) => (
              <MasteryCard 
                key={service.id}
                service={service} 
                isActive={activeService === service.id}
                onHover={setActiveService}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-6 text-lg font-semibold rounded-none border-2 border-transparent hover:border-accent/30 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/services">
              Explore All Masteries
              <ArrowUpRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const MasteryCard = ({ 
  service, 
  isActive, 
  onHover 
}: { 
  service: typeof masteryDomains[0], 
  isActive: boolean, 
  onHover: (id: string | null) => void 
}) => {
  return (
    <Card 
      className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 border-0 shadow-lg hover:shadow-2xl overflow-hidden ${
        isActive ? 'scale-105 shadow-2xl' : ''
      }`}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <CardContent className="p-8 h-full">
        <div className="space-y-6">
          {/* Icon and Title */}
          <div className="space-y-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
              <service.icon className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {service.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>

          {/* Specialties */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">
              Specializations
            </p>
            <div className="grid grid-cols-2 gap-2">
              {service.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-xs text-muted-foreground">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <Button 
            variant="ghost" 
            size="sm"
            className="w-full justify-between group-hover:bg-accent/10 transition-colors"
            asChild
          >
            <Link to={service.href}>
              Discover More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MasteryPentagon;
