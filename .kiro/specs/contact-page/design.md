# Contact Page Design Document

## Overview

The contact page will follow GR Group's established design language with a sophisticated, professional layout that emphasizes accessibility and user experience. The page will feature a hero section, contact methods, inquiry form, office locations, and business verticals information, all implemented with the signature animations and visual hierarchy consistent with the rest of the site.

## Architecture

### Page Structure

```
ContactPage
├── HeroSection (full-width with background image)
├── ContactMethodsSection (multiple contact options)
├── ContactFormSection (inquiry form with validation)
├── OfficeLocationsSection (global presence display)
├── BusinessVerticalsSection (expertise areas)
└── CTASection (reusable component)
```

### Layout Pattern

- **Container System**: Consistent with site-wide padding (px-4, md:px-[80px], xl:px-[100px])
- **Section Spacing**: Standard pt-[120px] between sections
- **Grid System**: Responsive layouts using CSS Grid and Flexbox
- **Visual Hierarchy**: Typography scale and color system from design tokens

## Components and Interfaces

### 1. Contact Hero Section

**Purpose**: Establish page context and provide immediate contact information

**Design Elements**:

- Full-screen hero with parallax background image
- Overlay with company tagline focused on accessibility
- Primary contact information (email, phone) prominently displayed
- CTA buttons for immediate contact actions

**Animation**:

- FadeIn animation for text content
- ParallaxImage for background
- Staggered entrance for contact elements

### 2. Contact Methods Section

**Purpose**: Provide multiple ways to reach GR Group

**Design Elements**:

- Grid layout with contact method cards
- Icons from Lucide React for visual consistency
- Hover effects and smooth transitions
- Business hours and response time information

**Contact Methods**:

- Email (with mailto: link)
- Phone (with tel: link for mobile)
- Business hours display
- Response time expectations

### 3. Contact Form Section

**Purpose**: Capture detailed inquiries with proper validation

**Form Fields**:

- Name (required, text input)
- Email (required, email validation)
- Company (optional, text input)
- Inquiry Type (required, select dropdown)
- Message (required, textarea)

**Validation Strategy**:

- Real-time validation with error states
- Success confirmation with animation
- Loading states during submission
- Accessible error messaging

**Design Elements**:

- Consistent with Button component styling
- Form inputs with focus states matching primary color
- Error states with clear visual indicators
- Success state with confirmation message

### 4. Office Locations Section

**Purpose**: Display global presence and regional contact information

**Design Elements**:

- Card-based layout for each office
- Address information with proper formatting
- Regional contact details
- Consistent with services section card design

**Office Information**:

- Headquarters location
- Regional offices (if applicable)
- Contact person or department for each location

### 5. Business Verticals Section

**Purpose**: Help users understand expertise areas and direct inquiries appropriately

**Design Elements**:

- Grid layout similar to services section
- Each vertical with description and contact preference
- Visual consistency with existing service cards
- Clear call-to-action for each vertical

**Verticals**:

- Global Exports
- Signature Events
- Lifestyle Ventures (coming soon)
- Collaborations & Community (coming soon)

## Data Models

### Contact Form Data

```typescript
interface ContactFormData {
  name: string
  email: string
  company?: string
  inquiryType: 'exports' | 'events' | 'ventures' | 'general'
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  inquiryType?: string
  message?: string
}

interface ContactFormState {
  data: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  isSubmitted: boolean
}
```

### Contact Information Data

```typescript
interface ContactMethod {
  type: 'email' | 'phone' | 'hours'
  label: string
  value: string
  action?: string // mailto: or tel:
  icon: LucideIcon
}

interface OfficeLocation {
  id: string
  name: string
  address: string[]
  phone?: string
  email?: string
  isPrimary: boolean
}
```

## Error Handling

### Form Validation

- **Client-side validation**: Real-time validation for immediate feedback
- **Email validation**: Proper email format checking
- **Required field validation**: Clear indication of missing required fields
- **Message length validation**: Minimum and maximum character limits

### Submission Handling

- **Loading states**: Visual feedback during form submission
- **Success handling**: Confirmation message with next steps
- **Error handling**: Graceful error messages for submission failures
- **Network error handling**: Offline/connectivity issue messaging

### Accessibility Error Handling

- **Screen reader support**: Proper ARIA labels for error states
- **Keyboard navigation**: Full keyboard accessibility for form interactions
- **Focus management**: Proper focus handling for error states

## Testing Strategy

### Unit Testing

- Form validation logic testing
- Contact method link generation testing
- Component rendering with different props
- Animation trigger testing

### Integration Testing

- Form submission flow testing
- Contact method interaction testing
- Responsive layout testing across devices
- Animation performance testing

### Accessibility Testing

- Screen reader compatibility testing
- Keyboard navigation testing
- Color contrast validation
- Focus indicator testing

### User Experience Testing

- Mobile touch interaction testing
- Form completion flow testing
- Contact method effectiveness testing
- Page load performance testing

## Performance Considerations

### Image Optimization

- Optimized hero background image with appropriate sizing
- Lazy loading for non-critical images
- WebP format support with fallbacks

### Animation Performance

- GSAP animations with proper cleanup
- Conditional animations based on device capabilities
- Reduced motion support for accessibility

### Form Performance

- Debounced validation to prevent excessive re-renders
- Optimized re-rendering with proper React patterns
- Efficient state management for form data

## Content Strategy

### Hero Content

- Compelling headline emphasizing accessibility and partnership
- Clear value proposition for contacting GR Group
- Professional imagery that reflects company values

### Form Content

- Clear field labels and placeholder text
- Helpful validation messages
- Professional confirmation messaging

### Contact Information

- Up-to-date contact details
- Clear business hours and expectations
- Professional tone consistent with brand voice

## Mobile Optimization

### Touch Interactions

- Appropriately sized touch targets (minimum 44px)
- Proper spacing between interactive elements
- Native mobile behaviors (tel: and mailto: links)

### Layout Adaptations

- Single-column layout for mobile devices
- Optimized form layout for mobile keyboards
- Proper viewport handling for form inputs

### Performance on Mobile

- Optimized images for mobile bandwidth
- Efficient animations that don't impact performance
- Fast loading times with proper code splitting
