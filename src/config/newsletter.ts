// Newsletter Configuration
// This file contains configuration settings for different email service providers

export interface NewsletterConfig {
  service: 'mock' | 'mailchimp' | 'firebase' | 'custom';
  successMessage: string;
  errorMessage: string;
  alreadySubscribedMessage: string;
}

export const newsletterConfig: NewsletterConfig = {
  // Change this to switch between different services
  // Options: 'mock' | 'mailchimp' | 'firebase' | 'custom'
  service: (import.meta.env.VITE_NEWSLETTER_SERVICE as any) || 'mock',
  
  // Customize success and error messages
  successMessage: "Thank you for subscribing! You'll receive design insights every month.",
  errorMessage: "Something went wrong. Please try again later.",
  alreadySubscribedMessage: "This email is already subscribed to our newsletter."
};

export const mailchimpConfig = {
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  listId: import.meta.env.VITE_MAILCHIMP_LIST_ID,
  serverPrefix: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
};

export const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const customApiConfig = {
  endpoint: import.meta.env.VITE_NEWSLETTER_API_ENDPOINT,
  apiKey: import.meta.env.VITE_CUSTOM_API_KEY,
};
