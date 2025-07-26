import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  User, 
  FileText, 
  Settings, 
  DollarSign, 
  Send,
  Upload,
  X,
  Calendar,
  Trophy,
  Star,
  Zap,
  Target
} from 'lucide-react';

const steps = [
  { title: 'Your Info', icon: User, description: 'Basic contact information' },
  { title: 'Project Details', icon: FileText, description: 'Tell us about your project' },
  { title: 'Service Selection', icon: Settings, description: 'Choose required services' },
  { title: 'Budget & Timeline', icon: DollarSign, description: 'Project scope and timing' },
  { title: 'Review & Submit', icon: Send, description: 'Review and send inquiry' }
];

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

const timelines = [
  'Immediately',
  '1–2 Weeks',
  '1–2 Months',
  'Not sure yet'
];

const ContactFormWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Your Info
    name: '',
    email: '',
    phone: '',
    // Step 2: Project Details
    projectType: '',
    propertySize: '',
    description: '',
    // Step 3: Services
    selectedServices: [],
    // Step 4: Budget & Timeline
    budget: '',
    timeline: '',
    // Step 5: Additional
    specialRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [achievements, setAchievements] = useState([]);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 0:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        break;
      case 1:
        if (!formData.projectType.trim()) newErrors.projectType = 'Project type is required';
        if (!formData.description.trim()) newErrors.description = 'Project description is required';
        break;
      case 2:
        if (formData.selectedServices.length === 0) newErrors.selectedServices = 'Select at least one service';
        break;
      case 3:
        if (!formData.budget) newErrors.budget = 'Budget range is required';
        if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        // Add achievement for completing step
        const newAchievement = `Step ${currentStep + 1} Complete! 🎉`;
        setAchievements(prev => [...prev, newAchievement]);
        
        // Show toast for step completion
        toast({
          title: '✅ Step Completed!',
          description: `Great job! Moving to ${steps[currentStep + 1].title}`,
        });
        
        // Animate to next step
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleServiceToggle = (service) => {
    const newServices = formData.selectedServices.includes(service)
      ? formData.selectedServices.filter(s => s !== service)
      : [...formData.selectedServices, service];
    
    handleInputChange('selectedServices', newServices);
  };

  const handleSubmit = () => {
    // Generate inquiry ID
    const inquiryId = `PA-${Date.now().toString(36).toUpperCase()}`;
    
    const submissionData = {
      inquiryId,
      ...formData,
      submissionTime: new Date().toISOString()
    };
    
    console.log('Form Submission:', submissionData);
    
    toast({ 
      title: 'Success!', 
      description: `Your inquiry ${inquiryId} has been submitted successfully. We'll contact you within 24 hours.`
    });
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleNewInquiry = () => {
    // Reset form for new inquiry
    setIsSubmitted(false);
    setCurrentStep(0);
    setFormData({
      name: '', email: '', phone: '', projectType: '', propertySize: '', 
      description: '', selectedServices: [], budget: '', timeline: '', specialRequirements: ''
    });
    setErrors({});
  };

  const progress = ((currentStep + 1) / steps.length) * 100;
  const isLastStep = currentStep === steps.length - 1;
  const StepIcon = steps[currentStep].icon;

  // Show success state if form has been submitted
  if (isSubmitted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="text-3xl font-bold text-primary">Inquiry Submitted Successfully!</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Thank you for your interest in our services. We'll review your inquiry and contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button onClick={handleNewInquiry} className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <StepIcon className="h-6 w-6" />
              {steps[currentStep].title}
            </CardTitle>
            <p className="text-muted-foreground mt-1">{steps[currentStep].description}</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Step {currentStep + 1} of {steps.length}
          </Badge>
        </div>
        
        {/* Progress Bar with Gamification */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Progress</span>
              {progress >= 20 && <Star className="h-4 w-4 text-yellow-500" />}
              {progress >= 40 && <Zap className="h-4 w-4 text-blue-500" />}
              {progress >= 60 && <Target className="h-4 w-4 text-green-500" />}
              {progress >= 80 && <Trophy className="h-4 w-4 text-purple-500" />}
            </div>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          {progress === 100 && (
            <div className="text-center text-sm text-green-600 font-medium flex items-center justify-center gap-1">
              <Trophy className="h-4 w-4" />
              Form Master! Ready to submit!
            </div>
          )}
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                  index < currentStep ? 'bg-primary border-primary text-white' :
                  index === currentStep ? 'border-primary text-primary' :
                  'border-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? <CheckCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                </div>
                <span className={`text-xs text-center max-w-16 ${
                  index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Step 1: Your Info */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
        )}
        
        {/* Step 2: Project Details */}
      <AnimatePresence exitBeforeEnter>
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectType">Project Type *</Label>
                <Input
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  placeholder="e.g., Apartment, Villa, Office"
                  className={errors.projectType ? 'border-red-500' : ''}
                />
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
              </div>
              <div>
                <Label htmlFor="propertySize">Property Size</Label>
                <Input
                  id="propertySize"
                  value={formData.propertySize}
                  onChange={(e) => handleInputChange('propertySize', e.target.value)}
                  placeholder="e.g., 1000 sq ft, 2BHK"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="fileUpload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Files (Optional)
              </Label>
              <Input
                id="fileUpload"
                type="file"
                accept="image/*, .pdf"
                onChange={(e) => handleInputChange('fileUpload', e.target.files[0])}
                className="mt-2"
              />
              {formData.fileUpload && (
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Uploaded: {formData.fileUpload.name}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your project requirements, vision, and any specific needs..."
                rows={4}
                className={errors.description ? 'border-red-500' : ''}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        
        {/* Step 3: Service Selection */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Select Required Services *</Label>
              <p className="text-sm text-muted-foreground mb-3">Choose all services that apply to your project</p>
              {errors.selectedServices && <p className="text-red-500 text-sm mb-2">{errors.selectedServices}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <Checkbox
                      id={service}
                      checked={formData.selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
              {formData.selectedServices.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Selected Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedServices.map((service) => (
                      <Badge key={service} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Step 4: Budget & Timeline */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Budget Range *
                </Label>
                <Slider
                  min={0}
                  max={budgetRanges.length - 1}
                  step={1}
                  value={[budgetRanges.indexOf(formData.budget) === -1 ? 0 : budgetRanges.indexOf(formData.budget)]}
                  onValueChange={(value) => handleInputChange('budget', budgetRanges[value[0]])}
                  className="mt-2"
                />
                <div className="text-sm text-primary font-medium mt-2">{formData.budget || 'Select budget range'}</div>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>
              <div>
                <Label htmlFor="timeline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Project Timeline *
                </Label>
                <Slider
                  min={0}
                  max={timelines.length - 1}
                  step={1}
                  value={[timelines.indexOf(formData.timeline) === -1 ? 0 : timelines.indexOf(formData.timeline)]}
                  onValueChange={(value) => handleInputChange('timeline', timelines[value[0]])}
                  className="mt-2"
                />
                <div className="text-sm text-primary font-medium mt-2">{formData.timeline || 'Select timeline'}</div>
                {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
              </div>
            </div>
          </div>
        )}
        
        {/* Step 5: Review & Submit */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Any special considerations, accessibility needs, or additional requirements..."
                rows={3}
              />
            </div>
            
            {/* Review Summary */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-4">
              <h3 className="font-medium text-lg">Review Your Information</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Contact:</span> {formData.name} | {formData.email} | {formData.phone}
                </div>
                <div>
                  <span className="font-medium">Project:</span> {formData.projectType} {formData.propertySize && `(${formData.propertySize})`}
                </div>
                <div>
                  <span className="font-medium">Services:</span> {formData.selectedServices.join(', ')}
                </div>
                <div>
                  <span className="font-medium">Budget & Timeline:</span> {formData.budget} | {formData.timeline}
                </div>
                {formData.description && (
                  <div>
                    <span className="font-medium">Description:</span> {formData.description}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions and privacy policy
              </Label>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <Button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2"
          >
            {isLastStep ? (
              <>
                <Send className="h-4 w-4" />
                Submit Inquiry
              </>
            ) : (
              <>
                Next
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactFormWizard;
