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
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    project: 'Complete Home Interior',
    rating: 5,
    testimonial: 'PentaArch transformed our house into a dream home. Their attention to detail and creative solutions exceeded our expectations. The team was professional and completed the project on time.',
    image: 'RS'
  },
  {
    name: 'Priya Patel',
    role: 'Business Owner',
    project: 'Office Interior Design',
    rating: 5,
    testimonial: 'Outstanding work on our office renovation! The space is now more functional and aesthetically pleasing. The Vastu consultation was an added bonus that made a real difference.',
    image: 'PP'
  },
  {
    name: 'Dr. Anil Kumar',
    role: 'Medical Practitioner',
    project: 'Clinic Design & Construction',
    rating: 5,
    testimonial: 'From initial planning to final execution, PentaArch delivered exceptional quality. Their team understood our requirements perfectly and created a space that works beautifully.',
    image: 'AK'
  },
  {
    name: 'Meera Reddy',
    role: 'Homeowner',
    project: 'Kitchen & Flooring',
    rating: 5,
    testimonial: 'The new kitchen and premium flooring have completely transformed our home. The quality of materials and craftsmanship is excellent. Highly recommend PentaArch!',
    image: 'MR'
  },
  {
    name: 'Vikram Industries',
    role: 'Corporate Client',
    project: 'Warehouse Construction',
    rating: 5,
    testimonial: 'Professional civil contracting services with timely delivery. The construction quality is top-notch and the project management was seamless throughout.',
    image: 'VI'
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