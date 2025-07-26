import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { subscribeToNewsletter } from '@/services/newsletterApi';
import { useToast } from '@/hooks/use-toast';
import { TestTube, Check, X, AlertCircle } from 'lucide-react';

// Component for testing newsletter functionality in development
// This should not be included in production builds
const NewsletterTester = () => {
  const [testEmail, setTestEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState<any>(null);
  const { toast } = useToast();

  const testEmails = [
    { email: 'test@example.com', scenario: 'Already Subscribed' },
    { email: 'existing@test.com', scenario: 'Already Subscribed' },
    { email: 'demo@pentaarch.com', scenario: 'Already Subscribed' },
    { email: 'newuser@test.com', scenario: 'New Subscription' },
    { email: 'success@test.com', scenario: 'Success' },
  ];

  const handleTest = async (email: string) => {
    setIsLoading(true);
    setTestEmail(email);
    
    try {
      const result = await subscribeToNewsletter(email, 'tester');
      setLastResult(result);
      
      toast({
        title: result.success ? "✅ Test Successful" : "❌ Test Result",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      });
    } catch (error) {
      const errorResult = {
        success: false,
        message: 'Network error occurred',
        error: error
      };
      setLastResult(errorResult);
      
      toast({
        title: "❌ Test Error",
        description: "Network error during test",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomTest = async () => {
    if (!testEmail.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter an email address to test",
        variant: "destructive",
      });
      return;
    }
    
    await handleTest(testEmail);
  };

  if (process.env.NODE_ENV === 'production') {
    return null; // Don't render in production
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mb-8 border-dashed border-2 border-yellow-300 bg-yellow-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-600">
          <TestTube className="h-5 w-5" />
          Newsletter Testing (Development Only)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Test Buttons */}
        <div>
          <h3 className="font-semibold mb-2">Quick Test Scenarios:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {testEmails.map(({ email, scenario }) => (
              <Button
                key={email}
                variant="outline"
                size="sm"
                onClick={() => handleTest(email)}
                disabled={isLoading}
                className="justify-between"
              >
                <span className="text-xs">{email}</span>
                <Badge variant="secondary" className="text-xs">
                  {scenario}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Email Test */}
        <div>
          <h3 className="font-semibold mb-2">Custom Email Test:</h3>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter email to test"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              disabled={isLoading}
            />
            <Button
              onClick={handleCustomTest}
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? 'Testing...' : 'Test'}
            </Button>
          </div>
        </div>

        {/* Last Result */}
        {lastResult && (
          <div className="p-3 bg-white rounded border">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              {lastResult.success ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <X className="h-4 w-4 text-red-600" />
              )}
              Last Test Result:
            </h3>
            <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(lastResult, null, 2)}
            </pre>
          </div>
        )}

        {/* Configuration Info */}
        <div className="text-xs text-muted-foreground bg-white p-2 rounded border">
          <div className="flex items-center gap-1 mb-1">
            <AlertCircle className="h-3 w-3" />
            <strong>Current Service:</strong> {process.env.VITE_NEWSLETTER_SERVICE || 'mock'}
          </div>
          <div>
            Mock API simulates: Success (normal emails), Already Subscribed (test emails above), 
            Random Network Errors (2% chance)
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterTester;
