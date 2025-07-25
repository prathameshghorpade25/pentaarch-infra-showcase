// Newsletter API Service
// This service can be easily extended to integrate with different email service providers

export interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}

export interface SubscriptionData {
  email: string;
  source?: string; // To track where the subscription came from
  firstName?: string;
  lastName?: string;
}

class NewsletterAPI {
  // Mock API for development - replace with actual API endpoints
  async subscribe(data: SubscriptionData): Promise<NewsletterSubscriptionResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock different scenarios for testing
    const existingEmails = ['test@example.com', 'existing@test.com', 'demo@pentaarch.com'];
    
    if (existingEmails.includes(data.email.toLowerCase())) {
      return {
        success: false,
        message: 'This email is already subscribed to our newsletter.',
        alreadySubscribed: true
      };
    }
    
    // Simulate random API failure (2% chance)
    if (Math.random() < 0.02) {
      throw new Error('Network error occurred');
    }
    
    // Success case - In real implementation, this would make an API call
    console.log('Newsletter subscription:', data);
    
    return {
      success: true,
      message: 'Thank you for subscribing! You\'ll receive design insights every month.'
    };
  }

  // For Mailchimp integration (example)
  async subscribeToMailchimp(data: SubscriptionData): Promise<NewsletterSubscriptionResponse> {
    const MAILCHIMP_API_KEY = process.env.VITE_MAILCHIMP_API_KEY;
    const LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID;
    const SERVER_PREFIX = process.env.VITE_MAILCHIMP_SERVER_PREFIX; // e.g., 'us1'
    
    if (!MAILCHIMP_API_KEY || !LIST_ID || !SERVER_PREFIX) {
      console.warn('Mailchimp credentials not configured, using mock API');
      return this.subscribe(data);
    }

    try {
      const response = await fetch(
        `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: data.email,
            status: 'subscribed',
            merge_fields: {
              FNAME: data.firstName || '',
              LNAME: data.lastName || '',
            },
            tags: [data.source || 'website'],
          }),
        }
      );

      if (response.ok) {
        return {
          success: true,
          message: 'Thank you for subscribing! You\'ll receive design insights every month.'
        };
      } else {
        const errorData = await response.json();
        if (errorData.title === 'Member Exists') {
          return {
            success: false,
            message: 'This email is already subscribed to our newsletter.',
            alreadySubscribed: true
          };
        }
        throw new Error(errorData.detail || 'Subscription failed');
      }
    } catch (error) {
      console.error('Mailchimp subscription error:', error);
      throw error;
    }
  }

  // For Firebase integration (example)
  async subscribeToFirebase(data: SubscriptionData): Promise<NewsletterSubscriptionResponse> {
    // This would require Firebase SDK setup
    // For now, fall back to mock API
    console.log('Firebase integration not implemented, using mock API');
    return this.subscribe(data);
  }

  // For custom backend integration (example)
  async subscribeToCustomAPI(data: SubscriptionData): Promise<NewsletterSubscriptionResponse> {
    const API_ENDPOINT = process.env.VITE_NEWSLETTER_API_ENDPOINT;
    
    if (!API_ENDPOINT) {
      console.warn('Custom API endpoint not configured, using mock API');
      return this.subscribe(data);
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Custom API subscription error:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const newsletterAPI = new NewsletterAPI();

// Configuration: Choose which service to use
export const subscribeToNewsletter = async (email: string, source = 'blog'): Promise<NewsletterSubscriptionResponse> => {
  const data: SubscriptionData = {
    email,
    source,
  };

  // Configure which service to use based on environment variables
  const SERVICE_TYPE = process.env.VITE_NEWSLETTER_SERVICE || 'mock';

  switch (SERVICE_TYPE) {
    case 'mailchimp':
      return newsletterAPI.subscribeToMailchimp(data);
    case 'firebase':
      return newsletterAPI.subscribeToFirebase(data);
    case 'custom':
      return newsletterAPI.subscribeToCustomAPI(data);
    default:
      return newsletterAPI.subscribe(data);
  }
};
