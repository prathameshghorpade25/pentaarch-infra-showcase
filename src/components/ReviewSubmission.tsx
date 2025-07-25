import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Upload, CheckCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const services = [
  'Interior Design',
  'Decorative Finishes', 
  'Premium Flooring',
  'Civil Contracting',
  'Vastu Consultancy'
];

const ReviewSubmission = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    verificationCode: '',
    service: '',
    reviewTitle: '',
    reviewText: '',
    agreed: false
  });
  const [isVerified, setIsVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify your project completion first.');
      return;
    }
    if (rating === 0) {
      alert('Please provide a star rating.');
      return;
    }
    // Here you would send the review data to your backend
    console.log('Review submitted:', { ...formData, rating });
    setSubmitted(true);
  };

  const handleVerification = () => {
    // Simple verification simulation - in real app this would verify against your database
    if (formData.verificationCode.length >= 6) {
      setIsVerified(true);
    } else {
      alert('Please enter a valid verification code.');
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your review has been submitted successfully and is now under moderation. 
            It will be published on our website after admin approval.
          </p>
          <Button onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              verificationCode: '',
              service: '',
              reviewTitle: '',
              reviewText: '',
              agreed: false
            });
            setRating(0);
            setIsVerified(false);
          }}>
            Submit Another Review
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary text-center">
          Share Your Experience
        </CardTitle>
        <p className="text-muted-foreground text-center">
          Help others discover PentaArch by sharing your project experience
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Verification Section */}
          {!isVerified && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-amber-800 mb-2">
                Project Verification Required
              </h4>
              <p className="text-sm text-amber-700 mb-4">
                To ensure authentic reviews, please enter the verification code sent to your email after project completion.
              </p>
              <div className="flex gap-2">
                <Input
                  name="verificationCode"
                  placeholder="Enter verification code"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  className="flex-1"
                />
                <Button type="button" onClick={handleVerification}>
                  Verify
                </Button>
              </div>
            </div>
          )}

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={!isVerified}
              />
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
                disabled={!isVerified}
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <Label>Service Taken *</Label>
            <Select disabled={!isVerified} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select the service you received" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Star Rating */}
          <div>
            <Label>Your Rating *</Label>
            <div className="flex items-center gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  disabled={!isVerified}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 disabled:opacity-50"
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {rating > 0 && `${rating} star${rating > 1 ? 's' : ''}`}
              </span>
            </div>
          </div>

          {/* Review Title */}
          <div>
            <Label htmlFor="reviewTitle">Review Title *</Label>
            <Input
              id="reviewTitle"
              name="reviewTitle"
              placeholder="e.g., Outstanding Turnkey Execution"
              value={formData.reviewTitle}
              onChange={handleInputChange}
              required
              disabled={!isVerified}
            />
          </div>

          {/* Review Text */}
          <div>
            <Label htmlFor="reviewText">Detailed Review *</Label>
            <Textarea
              id="reviewText"
              name="reviewText"
              placeholder="Share your experience with PentaArch - what you liked, the quality of work, team professionalism, timeline adherence, etc. (100-300 words preferred)"
              value={formData.reviewText}
              onChange={handleInputChange}
              rows={5}
              required
              disabled={!isVerified}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {formData.reviewText.length} characters
            </p>
          </div>

          {/* Photo Upload */}
          <div>
            <Label>Project Photos (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors mt-2">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Upload photos of completed project (Max 3 files, 5MB each)
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Supported: JPG, PNG (Optional)
              </p>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreed"
              checked={formData.agreed}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreed: checked as boolean }))}
              disabled={!isVerified}
              required
            />
            <Label htmlFor="agreed" className="text-sm">
              I confirm this review is based on my genuine experience with PentaArch and I agree to the{' '}
              <a href="/terms" className="text-accent hover:underline">Terms of Service</a>
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="professional"
            size="lg"
            className="w-full"
            disabled={!isVerified || !formData.agreed || rating === 0}
          >
            Submit Review for Moderation
          </Button>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-1">Review Guidelines</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• All reviews are moderated before publication</li>
              <li>• Only verified project clients can submit reviews</li>
              <li>• Reviews should be honest and constructive</li>
              <li>• Inappropriate content will be rejected</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewSubmission;
