import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Shield, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: ''
  });
  
  const [adminFormData, setAdminFormData] = useState({
    email: '',
    password: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdminInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminFormData({
      ...adminFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
      toast({
        title: "OTP Sent!",
        description: "Check your email/SMS for the verification code.",
      });
    }, 1500);
  };

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate user authentication
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      // Here you would redirect to user dashboard
      // window.location.href = '/dashboard';
    }, 1500);
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate admin authentication
    setTimeout(() => {
      setLoading(false);
      if (adminFormData.email === 'admin@pentaarch.com' && adminFormData.password === 'admin123') {
        toast({
          title: "Admin Access Granted",
          description: "Redirecting to admin dashboard...",
        });
        // Here you would redirect to admin dashboard
        // window.location.href = '/admin';
      } else {
        toast({
          title: "Authentication Failed",
          description: "Invalid credentials. Please try again.",
          variant: "destructive"
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to access your account or manage your projects
              </p>
            </div>

            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  User Login
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Admin Access
                </TabsTrigger>
              </TabsList>

              {/* User Login */}
              <TabsContent value="user">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center">User Login</CardTitle>
                    <p className="text-sm text-muted-foreground text-center">
                      Sign in with email or phone number
                    </p>
                  </CardHeader>
                  <CardContent>
                    {!otpSent ? (
                      <form onSubmit={handleSendOTP} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={userFormData.name}
                            onChange={handleUserInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={userFormData.email}
                              onChange={handleUserInputChange}
                              required
                              className="pl-10 mt-1"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={userFormData.phone}
                              onChange={handleUserInputChange}
                              required
                              className="pl-10 mt-1"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the{' '}
                            <Link to="/privacy" className="text-accent hover:underline">
                              Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link to="/terms" className="text-accent hover:underline">
                              Terms of Use
                            </Link>
                          </Label>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={loading}
                          variant="professional"
                        >
                          {loading ? 'Sending OTP...' : 'Send OTP'}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </form>
                    ) : (
                      <form onSubmit={handleUserLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="otp">Enter OTP</Label>
                          <Input
                            id="otp"
                            name="otp"
                            value={userFormData.otp}
                            onChange={handleUserInputChange}
                            required
                            className="mt-1 text-center text-lg tracking-widest"
                            placeholder="000000"
                            maxLength={6}
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Enter the 6-digit code sent to your email/phone
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => setOtpSent(false)}
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1" 
                            disabled={loading}
                            variant="professional"
                          >
                            {loading ? 'Verifying...' : 'Verify & Login'}
                          </Button>
                        </div>

                        <Button 
                          type="button" 
                          variant="ghost" 
                          className="w-full text-sm"
                          onClick={handleSendOTP}
                        >
                          Resend OTP
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Admin Login */}
              <TabsContent value="admin">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center gap-2">
                      <Shield className="h-5 w-5" />
                      Admin Access
                    </CardTitle>
                    <p className="text-sm text-muted-foreground text-center">
                      Secure login for PentaArch team members
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAdminLogin} className="space-y-4">
                      <div>
                        <Label htmlFor="admin-email">Admin Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="admin-email"
                            name="email"
                            type="email"
                            value={adminFormData.email}
                            onChange={handleAdminInputChange}
                            required
                            className="pl-10 mt-1"
                            placeholder="admin@pentaarch.com"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="admin-password">Password</Label>
                        <Input
                          id="admin-password"
                          name="password"
                          type="password"
                          value={adminFormData.password}
                          onChange={handleAdminInputChange}
                          required
                          className="mt-1"
                          placeholder="Enter your password"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={loading}
                        variant="professional"
                      >
                        {loading ? 'Authenticating...' : 'Login to Admin Panel'}
                        <Shield className="h-4 w-4 ml-2" />
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-stone rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Demo Credentials:</strong><br />
                        Email: admin@pentaarch.com<br />
                        Password: admin123
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto text-accent">
                  Contact us to get started
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;