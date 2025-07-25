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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon,
  Upload,
  Send,
  CheckCircle,
  Copy,
  Globe,
  Save,
  MessageSquare
} from 'lucide-react';
import { format } from 'date-fns';

const services = [
  'Interior Design',
  'Decorative Finishes', 
  'Premium Flooring',
  'Civil Contracting',
  'Vastu Consultancy'
];

const budgetRanges = [
  '₹50K – ₹1L',
  '₹1L – ₹5L', 
  '₹5L – ₹10L',
  '₹10L+'
];

const projectTimelines = [
  'Immediately',
  '1–2 Weeks',
  '1–2 Months',
  'Not sure yet'
];

const interiorStyles = [
  'Minimal',
  'Classic',
  'Modern',
  'Traditional',
  'Contemporary',
  'Industrial'
];

const flooringTypes = [
  'Hardwood',
  'Tiles',
  'Marble',
  'Laminate',
  'Vinyl',
  'Carpet'
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
];

// Generate unique inquiry ID
const generateInquiryId = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `PA-${timestamp}-${randomStr}`.toUpperCase();
};

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    budgetRange: '',
    projectTimeline: '',
    // Conditional fields
    hasFloorPlan: '',
    preferredStyle: '',
    flooringType: '',
    propertyType: '',
    roomCount: '',
    // File uploads
    uploadedFiles: [] as File[]
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({
      ...formData,
      uploadedFiles: [...formData.uploadedFiles, ...files]
    });
  };

  const saveDraft = () => {
    localStorage.setItem('pentaarch_form_draft', JSON.stringify({
      formData,
      selectedServices,
      date,
      timestamp: new Date().toISOString()
    }));
    setIsDraft(true);
    toast({
      title: "Draft Saved!",
      description: "Your form data has been saved locally.",
    });
  };

  const loadDraft = () => {
    const draft = localStorage.getItem('pentaarch_form_draft');
    if (draft) {
      const draftData = JSON.parse(draft);
      setFormData(draftData.formData);
      setSelectedServices(draftData.selectedServices);
      if (draftData.date) setDate(new Date(draftData.date));
      setIsDraft(false);
      toast({
        title: "Draft Loaded!",
        description: "Your previously saved form data has been restored.",
      });
    }
  };

  const copyInquiryId = () => {
    navigator.clipboard.writeText(inquiryId);
    toast({
      title: "Copied!",
      description: "Inquiry ID copied to clipboard.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required services
    if (selectedServices.length === 0) {
      toast({
        title: "Services Required",
        description: "Please select at least one service before submitting your inquiry.",
        variant: "destructive"
      });
      return;
    }
    
    // Generate inquiry ID
    const newInquiryId = generateInquiryId();
    setInquiryId(newInquiryId);
    
    // Simulate form submission
    const submissionData = {
      inquiryId: newInquiryId,
      ...formData,
      selectedServices,
      preferredVisitDate: date,
      submissionTime: new Date().toISOString(),
      language: currentLanguage
    };
    
    // Here you would send to your backend
    console.log('Form Submission:', submissionData);
    
    // Clear draft from localStorage
    localStorage.removeItem('pentaarch_form_draft');
    
    setIsSubmitted(true);
    
    // Show success message with inquiry ID
    toast({
      title: "Thank you for your inquiry!",
      description: `Your inquiry ID is ${newInquiryId}. We'll get back to you within 24 hours.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&h=900&fit=crop&crop=center&q=80"
            alt="Modern Architecture Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Ready to transform your space? Let's discuss your project and 
              create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {/* Language Selector & Draft Controls */}
              <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={loadDraft}>
                    <Upload className="h-4 w-4" />
                    Load Draft
                  </Button>
                  <Button variant="outline" size="sm" onClick={saveDraft}>
                    <Save className="h-4 w-4" />
                    Save Draft
                  </Button>
                </div>
              </div>

              {/* Success Message */}
              {isSubmitted && inquiryId && (
                <Card className="border-green-200 bg-green-50 mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-800 mb-2">Thank you for your inquiry!</h3>
                        <p className="text-green-700 mb-3">
                          Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                        </p>
                        <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                          <Label className="text-sm font-medium">Inquiry ID:</Label>
                          <Badge variant="outline" className="font-mono">{inquiryId}</Badge>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={copyInquiryId}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="mt-3 pt-3 border-t border-green-200">
                          <p className="text-sm text-green-600 mb-2">Next Steps:</p>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• You'll receive a confirmation email shortly</li>
                            <li>• Our team will review your requirements</li>
                            <li>• We'll contact you within 24 hours</li>
                            <li>• Schedule a free site visit if needed</li>
                          </ul>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-3 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
                            onClick={() => window.open('https://wa.me/919139979899?text=Hi%20PentaArch,%20I%20submitted%20an%20inquiry%20with%20ID:%20' + inquiryId + '.%20I%20would%20like%20to%20discuss%20my%20project%20requirements.', '_blank')}
                          >
                            <MessageSquare className="h-4 w-4" />
                            Chat on WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Smart Project Inquiry Form</CardTitle>
                  <p className="text-muted-foreground">
                    Our intelligent form adapts based on your selections to gather the most relevant information.
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

                    {/* Budget Range */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Estimated Budget Range <span className="text-muted-foreground">(Optional)</span></Label>
                        <p className="text-sm text-muted-foreground mb-2">Helps us provide better recommendations</p>
                        <Select value={formData.budgetRange} onValueChange={(value) => handleSelectChange('budgetRange', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>{range}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>When would you like to start? <span className="text-muted-foreground">(Optional)</span></Label>
                        <p className="text-sm text-muted-foreground mb-2">Project timeline preference</p>
                        <Select value={formData.projectTimeline} onValueChange={(value) => handleSelectChange('projectTimeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTimelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
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

                    {/* Smart Conditional Logic - Interior Design */}
                    {selectedServices.includes('Interior Design') && (
                      <Card className="bg-blue-50 border-blue-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-primary">Interior Design Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label>Do you have a floor plan?</Label>
                              <Select value={formData.hasFloorPlan} onValueChange={(value) => handleSelectChange('hasFloorPlan', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select option" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="yes">Yes, I have one</SelectItem>
                                  <SelectItem value="no">No, need help creating one</SelectItem>
                                  <SelectItem value="partial">Partial/rough sketch</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div>
                              <Label>Preferred Interior Style</Label>
                              <Select value={formData.preferredStyle} onValueChange={(value) => handleSelectChange('preferredStyle', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose style" />
                                </SelectTrigger>
                                <SelectContent>
                                  {interiorStyles.map((style) => (
                                    <SelectItem key={style} value={style}>{style}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="propertyType">Property Type</Label>
                              <Input
                                id="propertyType"
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleInputChange}
                                placeholder="e.g., Apartment, Villa, Office"
                                className="mt-1"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="roomCount">Number of Rooms</Label>
                              <Input
                                id="roomCount"
                                name="roomCount"
                                value={formData.roomCount}
                                onChange={handleInputChange}
                                placeholder="e.g., 2BHK, 3BHK"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Smart Conditional Logic - Premium Flooring */}
                    {selectedServices.includes('Premium Flooring') && (
                      <Card className="bg-amber-50 border-amber-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-amber-800">Flooring Preferences</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <Label>Preferred Flooring Type</Label>
                            <p className="text-sm text-muted-foreground mb-2">Select your preferred flooring material</p>
                            <Select value={formData.flooringType} onValueChange={(value) => handleSelectChange('flooringType', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose flooring type" />
                              </SelectTrigger>
                              <SelectContent>
                                {flooringTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </CardContent>
                      </Card>
                    )}

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

                    {/* Enhanced File Upload */}
                    <div>
                      <Label className="text-base font-medium">Project Files</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload floor plans, reference images, or documents (Max 5MB each)
                      </p>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors cursor-pointer">
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.pdf,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop files here, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Supported: JPG, PNG, PDF, DOCX (Max 5MB each)
                          </p>
                        </label>
                      </div>
                      
                      {formData.uploadedFiles.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                          <div className="space-y-1">
                            {formData.uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm p-2 bg-muted rounded">
                                <span className="truncate">{file.name}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {(file.size / 1024 / 1024).toFixed(1)}MB
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Enhanced Message */}
                    <div>
                      <Label htmlFor="message">Project Details & Special Requirements</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tell us about your project vision, specific requirements, and any special considerations
                      </p>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="mt-1"
                        placeholder="Describe your project requirements, timeline, any special considerations, accessibility needs, or design preferences..."
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

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" variant="professional" size="lg" className="flex-1">
                        <Send className="h-5 w-5" />
                        Send Smart Inquiry
                      </Button>
                      <Button type="button" variant="outline" size="lg" onClick={saveDraft}>
                        <Save className="h-5 w-5" />
                        Save as Draft
                      </Button>
                    </div>
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
                      <p className="text-muted-foreground">9139979899 / 7219326600</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@pentaarch.com</p>
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