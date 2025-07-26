import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Crown, 
  Users2, 
  Clock3, 
  Shield, 
  Lightbulb,
  Infinity,
  Compass,
  Building2
} from 'lucide-react';

const heritageMarkers = [
  {
    icon: Crown,
    title: 'Legacy Architects',
    metric: '15+',
    unit: 'Years',
    description: 'Born from a vision to merge traditional Indian architectural wisdom with contemporary design innovation.',
    philosophy: 'Every structure tells a story, every space holds a soul.'
  },
  {
    icon: Users2,
    title: 'Artisan Collective',
    metric: '50+',
    unit: 'Masters',
    description: 'A curated ensemble of architects, Vastu experts, craftsmen, and visionaries united by purpose.',
    philosophy: 'Individual brilliance, collective magic.'
  },
  {
    icon: Building2,
    title: 'Transformation Canvas',
    metric: '500+',
    unit: 'Spaces',
    description: 'From intimate homes to grand commercial monuments, each project is a testament to our evolving mastery.',
    philosophy: 'Quantity builds experience, quality builds legacy.'
  },
  {
    icon: Shield,
    title: 'Craftsmanship Covenant',
    metric: '98%',
    unit: 'Satisfaction',
    description: 'Our commitment to excellence is measured not just in metrics, but in the smiles of those who inhabit our creations.',
    philosophy: 'Perfection is not a destination, but a daily practice.'
  },
  {
    icon: Compass,
    title: 'Cosmic Integration',
    metric: '100%',
    unit: 'Vastu Aligned',
    description: 'Every design respects the ancient principles of energy flow, direction, and elemental harmony.',
    philosophy: 'Architecture that aligns with nature aligns with prosperity.'
  },
  {
    icon: Infinity,
    title: 'Eternal Evolution',
    metric: '∞',
    unit: 'Innovation',
    description: 'We constantly evolve, embracing new technologies while honoring timeless design principles.',
    philosophy: 'Tradition is our foundation, innovation is our horizon.'
  }
];

const HeritageSpiral = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-stone-50 to-white relative overflow-hidden">
      {/* Spiral Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(ellipse at center, transparent 20%, #000 21%, #000 22%, transparent 23%),
            conic-gradient(from 0deg, transparent, #000 1%, transparent 2%)
          `,
          backgroundSize: '200px 200px, 400px 400px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 h-6 border-2 border-accent rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              The PentaArch DNA
            </span>
            <div className="w-6 h-6 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            HERITAGE
            <span className="block text-2xl md:text-3xl font-light text-muted-foreground mt-2">
              Spiraling Through Excellence
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Like the sacred geometry of a spiral, our journey unfolds with purpose and precision. 
            Each turn brings deeper wisdom, greater mastery, and more meaningful transformations.
          </p>
        </div>

        {/* Heritage Spiral */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Spiral Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent transform -translate-x-1/2 hidden lg:block" />
            
            {/* Spiral Nodes */}
            {heritageMarkers.map((marker, index) => (
              <div 
                key={marker.title}
                className={`relative flex items-center mb-24 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:flex w-1/2 items-center justify-center">
                  <Card className="group w-full max-w-md hover:shadow-xl transition-all duration-500 border-0 shadow-lg transform hover:scale-105">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Icon & Metric */}
                        <div className="flex items-center justify-between">
                          <div className={`w-16 h-16 bg-gradient-to-br ${
                            index % 2 === 0 ? 'from-accent to-primary' : 'from-primary to-accent'
                          } rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                            <marker.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-4xl font-bold text-primary">{marker.metric}</div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                              {marker.unit}
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                          {marker.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {marker.description}
                        </p>

                        {/* Philosophy */}
                        <blockquote className="border-l-4 border-accent pl-4 italic text-primary/80 text-sm">
                          {marker.philosophy}
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    index % 2 === 0 ? 'bg-accent border-primary' : 'bg-primary border-accent'
                  } shadow-lg`} />
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden w-full">
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 bg-gradient-to-br ${
                            index % 2 === 0 ? 'from-accent to-primary' : 'from-primary to-accent'
                          } rounded-xl flex items-center justify-center`}>
                            <marker.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{marker.metric}</div>
                            <div className="text-xs font-medium text-muted-foreground uppercase">
                              {marker.unit}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-primary">{marker.title}</h3>
                        <p className="text-muted-foreground text-sm">{marker.description}</p>
                        <blockquote className="border-l-2 border-accent pl-3 italic text-primary/80 text-xs">
                          {marker.philosophy}
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Statement */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-12 border border-accent/10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Lightbulb className="h-8 w-8 text-accent" />
              <Clock3 className="h-6 w-6 text-primary animate-pulse" />
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              The Continuing Spiral
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our heritage is not a monument to the past, but a living, breathing foundation for the future. 
              Each project we undertake adds another layer to our spiral of mastery, 
              carrying forward the wisdom of tradition while embracing the possibilities of tomorrow.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span>Heritage Preserved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span>Innovation Embraced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full" />
                <span>Future Shaped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSpiral;
