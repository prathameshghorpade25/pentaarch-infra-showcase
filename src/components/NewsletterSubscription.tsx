import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Check, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/services/newsletterApi';

interface NewsletterSubscriptionProps {
  className?: string;
  showTermsCheckbox?: boolean;
  title?: string;
  description?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  className = '',
  showTermsCheckbox = true,
  title = "Stay Updated with Design Insights",
  description = "Subscribe to our newsletter for the latest tips, trends, and expert advice delivered directly to your inbox."
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous errors
    setEmailError('');
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Check terms agreement if checkbox is shown
    if (showTermsCheckbox && !agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to receive emails from PentaArch.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
        setAgreeToTerms(false);
        
        toast({
          title: "✅ Successfully Subscribed!",
          description: result.message,
          variant: "default",
        });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
        
      } else {
        if (result.alreadySubscribed) {
          setEmailError(result.message);
        } else {
          toast({
            title: "Subscription Failed",
            description: result.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
    
    // Real-time validation (optional)
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isLoading || isSubscribed}
                  className={`pl-10 ${emailError ? 'border-red-500 focus:border-red-500' : ''}`}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 h-4 w-4" />
                )}
              </div>
              
              <Button 
                type="submit" 
                variant="professional" 
                disabled={isLoading || isSubscribed || !!emailError}
                className="min-w-[120px] relative"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : isSubscribed ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
            
            {/* Email Error Message */}
            {emailError && (
              <p id="email-error" className="text-red-500 text-sm mt-2 text-left flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {emailError}
              </p>
            )}
          </div>
          
          {/* Terms Checkbox */}
          {showTermsCheckbox && (
            <div className="flex items-start space-x-2 text-left">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                disabled={isLoading || isSubscribed}
                className="mt-0.5"
              />
              <Label 
                htmlFor="terms" 
                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
              >
                I agree to receive emails from PentaArch. You can unsubscribe anytime.
              </Label>
            </div>
          )}
        </div>
      </form>
      
      {/* Success Message */}
      {isSubscribed && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-green-800">
            <Check className="h-5 w-5" />
            <span className="font-medium">Welcome to our newsletter!</span>
          </div>
          <p className="text-green-700 text-sm mt-2">
            You'll receive our monthly design insights straight to your inbox.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;
