# Newsletter Subscription Feature

This document explains how to use and configure the newsletter subscription functionality in PentaArch.

## Features Implemented

✅ **Email Validation**
- Real-time email format validation
- Inline error messages with visual indicators
- Prevents submission of invalid emails

✅ **Loading States**
- Loading spinner during API calls
- Disabled button states during processing
- Success animation with checkmark

✅ **Error Handling**
- Network error handling
- Already subscribed detection
- User-friendly error messages

✅ **Terms & Conditions**
- Optional checkbox for user agreement
- Configurable per component instance
- Required validation before submission

✅ **Success Feedback**
- Toast notifications for success/error states
- Inline success message display
- Auto-reset after 5 seconds

✅ **Multi-Service Support**
- Mock API for development
- Mailchimp integration ready
- Firebase integration ready
- Custom API integration ready

## Usage

### Basic Implementation

```tsx
import NewsletterSubscription from '@/components/NewsletterSubscription';

// Basic usage
<NewsletterSubscription />

// With custom props
<NewsletterSubscription 
  showTermsCheckbox={true}
  title="Stay Updated!"
  description="Get the latest design tips delivered to your inbox."
  className="my-8"
/>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `showTermsCheckbox` | `boolean` | `true` | Show/hide terms agreement checkbox |
| `title` | `string` | `"Stay Updated with Design Insights"` | Header title |
| `description` | `string` | `"Subscribe to our newsletter..."` | Description text |

## Backend Integration

### 1. Mock API (Development)
Default mode for testing. No configuration required.

### 2. Mailchimp Integration

1. Get your Mailchimp API key and list ID
2. Set environment variables:
   ```bash
   VITE_NEWSLETTER_SERVICE=mailchimp
   VITE_MAILCHIMP_API_KEY=your_api_key
   VITE_MAILCHIMP_LIST_ID=your_list_id
   VITE_MAILCHIMP_SERVER_PREFIX=us1
   ```

### 3. Firebase Integration

1. Set up Firebase project with Firestore
2. Set environment variables:
   ```bash
   VITE_NEWSLETTER_SERVICE=firebase
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_PROJECT_ID=your_project_id
   # ... other Firebase config
   ```

### 4. Custom API Integration

1. Set up your custom backend endpoint
2. Set environment variables:
   ```bash
   VITE_NEWSLETTER_SERVICE=custom
   VITE_NEWSLETTER_API_ENDPOINT=https://your-api.com
   VITE_CUSTOM_API_KEY=your_api_key
   ```

## Files Structure

```
src/
├── components/
│   └── NewsletterSubscription.tsx    # Main component
├── services/
│   └── newsletterApi.ts              # API service layer
├── hooks/
│   └── use-toast.ts                  # Toast notifications
├── config/
│   └── newsletter.ts                 # Configuration settings
└── components/ui/
    ├── checkbox.tsx                  # UI checkbox component
    ├── label.tsx                     # UI label component
    ├── input.tsx                     # UI input component
    ├── button.tsx                    # UI button component
    └── toast.tsx                     # UI toast component
```

## API Response Format

The newsletter API should return responses in this format:

```typescript
interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing! You'll receive design insights every month."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "This email is already subscribed to our newsletter.",
  "alreadySubscribed": true
}
```

## Customization

### Styling
The component uses Tailwind CSS and follows the existing design system. You can override styles using the `className` prop.

### Messages
Customize success/error messages in `src/config/newsletter.ts`:

```typescript
export const newsletterConfig = {
  successMessage: "Your custom success message",
  errorMessage: "Your custom error message",
  alreadySubscribedMessage: "Your custom already subscribed message"
};
```

### Validation
Email validation uses a standard regex pattern. You can modify the `validateEmail` function in the component for custom validation rules.

## Testing

The mock API includes several test scenarios:

- **Normal subscription**: Any email not in the test list
- **Already subscribed**: test@example.com, existing@test.com, demo@pentaarch.com
- **Network errors**: 2% random failure rate for testing error handling

## Performance Considerations

- Email validation is debounced to avoid excessive re-renders
- API calls are properly handled with loading states
- Success states auto-reset to prevent memory leaks
- Components are optimized for mobile and desktop

## Security Notes

- Never expose API keys in client-side code
- Use environment variables for all sensitive configuration
- Implement rate limiting on your backend
- Validate emails on both client and server side
- Consider implementing CAPTCHA for production use

## Future Enhancements

Potential improvements you can add:

- **Email Confirmation**: Send confirmation emails before adding to list
- **Unsubscribe Links**: Include unsubscribe functionality
- **Preferences**: Allow users to choose email frequency
- **Analytics**: Track subscription rates and sources
- **A/B Testing**: Test different copy and designs
- **GDPR Compliance**: Add privacy policy links and data handling notices
