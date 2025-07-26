import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ContactFormWizard from '@/components/contact/ContactFormWizard';
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
            
            {/* Contact Form Wizard */}
            <div className="lg:col-span-2">
              <ContactFormWizard />
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