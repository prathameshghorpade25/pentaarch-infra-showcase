import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Target, Eye, Users, Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
            alt="Modern Architecture and Design"
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About PentaArch
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming spaces with 15+ years of expertise in design, construction, 
              and innovative solutions that stand the test of time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/portfolio">
                  Explore Our Journey
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Founded in 2008, PentaArch Infra Services began with a simple vision: to create 
                spaces that not only look beautiful but also enhance the lives of those who 
                inhabit them. What started as a small interior design firm has grown into a 
                comprehensive design and construction company.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Over the years, we've expanded our expertise to include civil contracting, 
                decorative finishes, premium flooring solutions, and Vastu consultancy. 
                Our multidisciplinary approach ensures that every project benefits from 
                integrated design thinking and seamless execution.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Today, with over 500 completed projects and a team of 50+ professionals, 
                we continue to set new standards in the industry while staying true to 
                our core values of quality, innovation, and client satisfaction.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button variant="professional" size="lg" asChild>
                  <Link to="/portfolio">
                    View Our Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary">
                      <CountUp end={500} duration={3} />+
                    </h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary">
                      <CountUp end={50} duration={3} />+
                    </h3>
                    <p className="text-muted-foreground">Team Members</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary">
                      <CountUp end={15} duration={3} />+
                    </h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary">
                      <CountUp end={98} duration={3} />%
                    </h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on principles of excellence, innovation, and client satisfaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Target className="h-12 w-12 text-accent mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create exceptional spaces that reflect our clients' personalities and needs 
                    while maintaining the highest standards of design excellence, construction quality, 
                    and customer service. We believe every space has the potential to inspire and 
                    transform lives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Eye className="h-12 w-12 text-accent mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading integrated design and construction firm in India, known for 
                    innovation, sustainability, and creating spaces that enhance human experiences. 
                    We envision a future where every project contributes to building better 
                    communities and environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of architects, designers, and project managers 
              brings together diverse expertise to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Girish Kakad */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative bg-gradient-to-br from-white to-stone-50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <motion.span
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          GK
                        </motion.span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Girish Kakad
                    </motion.h3>
                    <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">
                      Civil Engineer & Vastushastra Consultant
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Expert in civil engineering and Vastushastra principles. 
                      Combines technical expertise with traditional design wisdom to create harmonious spaces.
                    </p>
                    <motion.div 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileInView={{ y: 0 }}
                    >
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto" />
                    </motion.div>
                  </CardContent>
                </Card>
            </motion.div>

            {/* Hrishikesh Pokharkar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative bg-gradient-to-br from-white to-stone-50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-accent via-accent/80 to-primary rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <motion.span
                          whileHover={{ rotate: -360 }}
                          transition={{ duration: 0.6 }}
                        >
                          HP
                        </motion.span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Hrishikesh Pokharkar
                    </motion.h3>
                    <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">
                      Interior Designer & Paint Manufacturer
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Expert interior designer and owner of Finix Paints. 
                      Brings unique insights into both design aesthetics and premium paint solutions.
                    </p>
                    <motion.div 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileInView={{ y: 0 }}
                    >
                      <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto" />
                    </motion.div>
                  </CardContent>
                </Card>
            </motion.div>

            {/* Kanchan Pokharkar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative bg-gradient-to-br from-white to-stone-50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <motion.span
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          KP
                        </motion.span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Kanchan Pokharkar
                    </motion.h3>
                    <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">
                      Project Designer
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Specialized in project design and planning. 
                      Ensures seamless integration of design concepts with project execution.
                    </p>
                    <motion.div 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileInView={{ y: 0 }}
                    >
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto" />
                    </motion.div>
                  </CardContent>
                </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/50 rounded-full blur-lg" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive our passion for creating extraordinary spaces
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center p-6 bg-white/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Innovation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Embracing cutting-edge design trends and sustainable building practices
                </p>
              </Card>
            </motion.div>
            
            {/* Quality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center p-6 bg-white/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Quality
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Uncompromising commitment to excellence in every detail
                </p>
              </Card>
            </motion.div>
            
            {/* Client-Centric */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center p-6 bg-white/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Client-Centric
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your vision and satisfaction are at the heart of everything we do
                </p>
              </Card>
            </motion.div>
            
            {/* Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center p-6 bg-white/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Efficiency
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Streamlined processes and timely delivery without compromising quality
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;