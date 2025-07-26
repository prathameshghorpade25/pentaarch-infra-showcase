import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  MapPin, 
  PenTool, 
  Hammer, 
  CheckCircle,
  Upload,
  Calendar,
  Eye,
  Settings,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: "Tell Us About Your Vision",
    description: "Upload your floor plans or schedule a free site visit. Tell us your preferences, style, budget, and goals. We'll understand your unique requirements.",
    image: "/api/placeholder/400/300",
    icon: MessageSquare,
    features: [
      "Free initial consultation",
      "Upload floor plans & photos",
      "Style preference discussion",
      "Budget planning"
    ],
    cta: {
      primary: { text: "Upload Plans", action: "/contact" },
      secondary: { text: "Book a Site Visit", action: "/contact" }
    },
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Site Visit & Consultation",
    description: "Our certified team will inspect the site and conduct Vastu & technical assessments. We'll identify your functional and aesthetic needs in detail.",
    image: "/api/placeholder/400/300",
    icon: MapPin,
    features: [
      "On-site measurement",
      "Vastu compliance check",
      "Structural assessment",
      "Technical feasibility study"
    ],
    cta: {
      primary: { text: "Schedule Free Site Visit", action: "/contact" }
    },
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Design Proposal & 3D Visualization",
    description: "We'll share 2D floor layouts, mood boards, and photorealistic 3D renders. You'll visualize the exact look before we build it.",
    image: "/api/placeholder/400/300",
    icon: PenTool,
    features: [
      "Detailed 2D floor plans",
      "3D photorealistic renders",
      "Material & color selection",
      "Unlimited revisions"
    ],
    cta: {
      primary: { text: "View Sample Designs", action: "/portfolio" },
      secondary: { text: "Request Revisions", action: "/contact" }
    },
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Execution with Project Management",
    description: "With premium materials, detailed planning, and transparent updates, we'll bring the vision to life — efficiently and beautifully.",
    image: "/api/placeholder/400/300",
    icon: Hammer,
    features: [
      "Premium material sourcing",
      "Skilled craftsman team",
      "Real-time progress updates",
      "Quality control checkpoints"
    ],
    cta: {
      primary: { text: "See Our Process", action: "/services" }
    },
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    title: "Handover & Aftercare",
    description: "We walk you through the finished work. Enjoy aftercare support and warranty on work done. We ensure a smooth move-in experience.",
    image: "/api/placeholder/400/300",
    icon: CheckCircle,
    features: [
      "Detailed project walkthrough",
      "Maintenance guide provided",
      "1-year warranty coverage",
      "24/7 aftercare support"
    ],
    cta: {
      primary: { text: "Learn About Warranty", action: "/services" }
    },
    color: "from-emerald-500 to-emerald-600"
  }
];

const ProcessSteps = () => {
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
            Our 5-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, every step is designed to ensure your dream space becomes reality
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image Section */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-stone/20 to-stone/5 flex items-center justify-center">
                        <div className="text-center">
                          <step.icon className="h-20 w-20 text-accent mx-auto mb-4" />
                          <p className="text-muted-foreground">Step {step.id} Visualization</p>
                        </div>
                      </div>
                      
                      {/* Step number overlay */}
                      <div className={`absolute top-6 ${index % 2 === 1 ? 'right-6' : 'left-6'}`}>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {step.id}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-primary">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {step.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              className={`bg-gradient-to-r ${step.color} hover:opacity-90 text-white`}
                              asChild
                            >
                              <Link to={step.cta.primary.action}>
                                {step.cta.primary.text}
                              </Link>
                            </Button>
                          </motion.div>
                          
                          {step.cta.secondary && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button 
                                variant="outline" 
                                className="border-primary text-primary hover:bg-primary hover:text-white"
                                asChild
                              >
                                <Link to={step.cta.secondary.action}>
                                  {step.cta.secondary.text}
                                </Link>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Typical Project Timeline</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1-2</div>
                <div className="text-sm opacity-90">Days<br />Consultation</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3-5</div>
                <div className="text-sm opacity-90">Days<br />Design Phase</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2-4</div>
                <div className="text-sm opacity-90">Weeks<br />Execution</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-sm opacity-90">Day<br />Handover</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">365</div>
                <div className="text-sm opacity-90">Days<br />Warranty</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;
