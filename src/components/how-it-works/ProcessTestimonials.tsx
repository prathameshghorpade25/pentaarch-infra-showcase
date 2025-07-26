import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const processTestimonials = [
  {
    name: 'Prathamesh Ghorpade',
    role: 'Homeowner',
    location: 'Pune',
    project: '3BHK Complete Interior Renovation',
    rating: 5,
    avatar: 'PG',
    testimonial: 'The 5-step process was incredibly smooth. From the initial consultation to final handover, every phase was well-planned and executed perfectly. The 3D visualization helped us see exactly what we were getting.',
    processHighlight: 'The visualization phase was a game-changer for us!'
  },
  {
    name: 'Sakshi Gavande',
    role: 'Business Owner',
    location: 'Mumbai',
    project: 'Corporate Office Interior',
    rating: 5,
    avatar: 'SG',
    testimonial: 'What impressed me most was their systematic approach. Each step was clearly explained, timelines were met, and the project management was exceptional. The aftercare support is outstanding.',
    processHighlight: 'Project management and timeline adherence was perfect!'
  },
  {
    name: 'Ritesh Bhingare',
    role: 'Property Developer',
    location: 'Nashik',
    project: 'Residential Complex Civil Work',
    rating: 5,
    avatar: 'RB',
    testimonial: 'The site assessment and consultation phase was thorough. They identified issues we hadn\'t even considered and provided solutions that saved us both time and money.',
    processHighlight: 'Site assessment phase prevented costly mistakes!'
  },
  {
    name: 'Dhanishtha Bankar',
    role: 'Homeowner',
    location: 'Aurangabad',
    project: 'Modular Kitchen & Living Room',
    rating: 5,
    avatar: 'DB',
    testimonial: 'The design proposal phase was incredible. Multiple iterations, detailed explanations, and the ability to visualize everything in 3D made decision-making so much easier.',
    processHighlight: 'Design visualization exceeded all expectations!'
  },
  {
    name: 'Sai Deshmukh',
    role: 'Hotel Owner',
    location: 'Solapur',
    project: 'Boutique Hotel Construction',
    rating: 5,
    avatar: 'SD',
    testimonial: 'From consultation to handover, every step was professional. The execution phase was well-coordinated, and the aftercare support gives us complete peace of mind.',
    processHighlight: 'Execution phase coordination was seamless!'
  }
];

const ProcessTestimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Clients Say About Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from clients who've completed our 5-step journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {processTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                            <p className="text-xs text-accent font-medium">{testimonial.project}</p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Process Highlight */}
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-3 mb-4">
                          <p className="text-sm font-medium text-primary">
                            ✨ {testimonial.processHighlight}
                          </p>
                        </div>

                        {/* Testimonial */}
                        <div className="relative">
                          <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -left-2" />
                          <p className="text-muted-foreground italic pl-6 leading-relaxed">
                            "{testimonial.testimonial}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Process Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-stone/10 to-stone/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">
              Process Success Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">On-time Project<br />Completion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm text-muted-foreground">First-time Design<br />Approval</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24hr</div>
                <div className="text-sm text-muted-foreground">Average Response<br />Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction<br />Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTestimonials;
