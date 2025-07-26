import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Prathamesh Ghorpade',
    role: 'Homeowner, Pune',
    project: '3BHK Complete Interior Renovation',
    rating: 5,
    testimonial: 'PentaArch\'s team understood our family\'s needs perfectly. The Vastu-compliant layout they designed has brought positive energy to our home. The Italian marble flooring and custom carpentry work exceeded all expectations. Worth every rupee invested!',
    image: 'PG',
    verified: true
  },
  {
    name: 'Sakshi Gavande',
    role: 'Business Owner, Mumbai',
    project: 'Corporate Office Interior',
    rating: 5,
    testimonial: 'Our 4,000 sq ft office transformation by PentaArch has impressed every client who visits. The blend of modern aesthetics with Vastu principles has created a workspace that\'s both inspiring and prosperous. Their project management was exemplary.',
    image: 'SG',
    verified: true
  },
  {
    name: 'Ritesh Bhingare',
    role: 'Property Developer, Nashik',
    project: 'Residential Complex Civil Work',
    rating: 5,
    testimonial: 'PentaArch handled the complete civil contracting for our 25-unit residential project. Their attention to structural details, quality of construction, and adherence to timelines was remarkable. The decorative finishes added premium appeal to our project.',
    image: 'RB',
    verified: true
  },
  {
    name: 'Dhanishtha Bankar',
    role: 'Homeowner, Aurangabad',
    project: 'Modular Kitchen \u0026 Living Room',
    rating: 5,
    testimonial: 'The modular kitchen designed by PentaArch is a perfect blend of functionality and beauty. The Venetian plaster finish in our living room is simply stunning. Their team\'s craftsmanship and use of premium materials has made our home magazine-worthy!',
    image: 'DB',
    verified: true
  },
  {
    name: 'Sai Deshmukh',
    role: 'Hotel Owner, Solapur',
    project: 'Boutique Hotel Construction',
    rating: 5,
    testimonial: 'From foundation to interior completion, PentaArch delivered our boutique hotel project flawlessly. Their Vastu consultant ensured positive energy flow, while their interior team created spaces that our guests absolutely love. Professional service throughout!',
    image: 'SD',
    verified: true
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about 
            their experience working with PentaArch.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-accent">{testimonial.project}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by 500+ clients across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-primary">★★★★★ Google Reviews</div>
            <div className="text-lg font-semibold text-primary">ISO Certified</div>
            <div className="text-lg font-semibold text-primary">15+ Years</div>
            <div className="text-lg font-semibold text-primary">500+ Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;