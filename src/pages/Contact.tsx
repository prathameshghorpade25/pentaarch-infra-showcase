import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon,
  Upload,
  Send
} from 'lucide-react';
import { format } from 'date-fns';

const services = [
  'Interior Design',
  'Decorative Finishes', 
  'Premium Flooring',
  'Civil Contracting',
  'Vastu Consultancy'
];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter(s => s !== service));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours with a detailed quotation.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedServices([]);
    setDate(undefined);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-stone to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to transform your space? Let's discuss your project and 
              create something amazing together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Project Inquiry Form</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you with a detailed quotation.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    {/* Services Selection */}
                    <div>
                      <Label className="text-base font-medium">Services Required *</Label>
                      <p className="text-sm text-muted-foreground mb-3">Select all that apply</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={(checked) => 
                                handleServiceChange(service, checked as boolean)
                              }
                            />
                            <Label htmlFor={service} className="text-sm font-normal">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Site Visit Date */}
                    <div>
                      <Label className="text-base font-medium">Preferred Site Visit Date</Label>
                      <p className="text-sm text-muted-foreground mb-3">Optional - helps us schedule better</p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label className="text-base font-medium">Project Files</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload floor plans, reference images, or documents (Max 5MB each)
                      </p>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Drag and drop files here, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Supported: JPG, PNG, PDF, DOCX (Max 5MB)
                        </p>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tell us about your project, requirements, and any specific preferences
                      </p>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1"
                        placeholder="Describe your project requirements, budget range, timeline, and any specific preferences..."
                      />
                    </div>

                    {/* Privacy Policy */}
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" required />
                      <Label htmlFor="privacy" className="text-sm">
                        I agree to the{' '}
                        <a href="/privacy" className="text-accent hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms" className="text-accent hover:underline">
                          Terms of Service
                        </a>
                      </Label>
                    </div>

                    <Button type="submit" variant="professional" size="lg" className="w-full">
                      <Send className="h-5 w-5" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@pentaarch.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        123 Design Street<br />
                        Baner, Pune - 411045<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">24-hour response guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Free consultation & site visit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Detailed project quotation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-48 bg-stone rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Baner, Pune</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default Contact;