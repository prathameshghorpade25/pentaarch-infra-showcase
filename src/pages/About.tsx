import React from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Target, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-stone to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              About PentaArch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforming spaces with 15+ years of expertise in design, construction, 
              and innovative solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2008, PentaArch Infra Services began with a simple vision: to create 
                spaces that not only look beautiful but also enhance the lives of those who 
                inhabit them. What started as a small interior design firm has grown into a 
                comprehensive design and construction company.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we've expanded our expertise to include civil contracting, 
                decorative finishes, premium flooring solutions, and Vastu consultancy. 
                Our multidisciplinary approach ensures that every project benefits from 
                integrated design thinking and seamless execution.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, with over 500 completed projects and a team of 50+ professionals, 
                we continue to set new standards in the industry while staying true to 
                our core values of quality, innovation, and client satisfaction.
              </p>
              <Button variant="professional" size="lg" asChild>
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">500+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">50+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To create exceptional spaces that reflect our clients' personalities and needs 
                  while maintaining the highest standards of design excellence, construction quality, 
                  and customer service. We believe every space has the potential to inspire and 
                  transform lives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading integrated design and construction firm in India, known for 
                  innovation, sustainability, and creating spaces that enhance human experiences. 
                  We envision a future where every project contributes to building better 
                  communities and environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of architects, designers, and project managers 
              brings together diverse expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  AR
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Arjun Rao</h3>
                <p className="text-accent font-medium mb-3">Founder & Principal Architect</p>
                <p className="text-muted-foreground text-sm">
                  15+ years in architectural design and project management. 
                  Specialized in sustainable design and modern construction techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  PS
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Priya Sharma</h3>
                <p className="text-accent font-medium mb-3">Head of Interior Design</p>
                <p className="text-muted-foreground text-sm">
                  Expert in space planning and luxury interiors. 
                  Brings creative vision to every project with attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  VK
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Vikram Kumar</h3>
                <p className="text-accent font-medium mb-3">Project Director</p>
                <p className="text-muted-foreground text-sm">
                  Oversees construction operations and quality control. 
                  Ensures timely delivery and adherence to specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
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

export default About;