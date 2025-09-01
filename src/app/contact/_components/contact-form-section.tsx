'use client'

import React from 'react'
import { useContactForm } from '@/hooks/useContactForm'
import Button from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { CheckCircle, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import Copy from '@/components/ui/copy/copy'

const ContactFormSection = () => {
  const { formData, errors, isSubmitting, isSubmitted, updateField, submitForm, resetForm, isFormValid } =
    useContactForm()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm()
  }

  const handleStartNewInquiry = () => {
    resetForm()
  }

  // Success confirmation component
  if (isSubmitted) {
    return (
      <section className="px-4 pt-[120px] pb-[80px] md:px-[80px] xl:px-[100px]">
        <div className="mx-auto max-w-4xl">
          <FadeIn className="text-center">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 md:p-12">
              <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-600" />
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Thank You for Your Inquiry</h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-600">
                {`We've received your message and will get back to you within 24 hours.
                                Our team is excited to discuss how we can help bring your vision to life.`}
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  <strong>{`What's next?`}</strong> Our team will review your inquiry and reach out with relevant
                  information and next steps.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleStartNewInquiry}
                  className="mt-6"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 pt-[120px] pb-[80px] md:px-[80px] xl:px-[100px]">
      <div className="mx-auto max-w-4xl space-y-6">
        <Copy className="flex max-w-4xl flex-col gap-4 text-center">
          <h2 className="text-primary text-4xl font-medium md:text-5xl">Get In Touch</h2>
          <p className="text-primary/80 text-base font-medium md:text-lg">
            {`Ready to explore partnership opportunities or discuss your next project?
                        Share your details and we'll connect you with the right team member.`}
          </p>
        </Copy>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <FadeIn
            delay={0.2}
            stagger={0.2}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={e => updateField('name', e.target.value)}
                  className={cn(
                    'w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200',
                    'focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none',
                    'placeholder:text-gray-400',
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400',
                  )}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                  className={cn(
                    'w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200',
                    'focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none',
                    'placeholder:text-gray-400',
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400',
                  )}
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company || ''}
                  onChange={e => updateField('company', e.target.value)}
                  className={cn(
                    'w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200',
                    'focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none',
                    'placeholder:text-gray-400',
                    'border-gray-300 hover:border-gray-400',
                  )}
                  placeholder="Enter your company name"
                />
              </div>

              {/* Inquiry Type Field */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={e => updateField('inquiryType', e.target.value)}
                  className={cn(
                    'w-full rounded-lg border px-4 py-3 transition-colors duration-200',
                    'focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none',
                    'bg-white',
                    errors.inquiryType ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400',
                  )}
                  aria-invalid={!!errors.inquiryType}
                  aria-describedby={errors.inquiryType ? 'inquiry-type-error' : undefined}
                >
                  <option value="general">General Inquiry</option>
                  <option value="exports">Global Exports</option>
                  <option value="events">Signature Events</option>
                </select>
                {errors.inquiryType && (
                  <p
                    id="inquiry-type-error"
                    className="mt-1 text-sm text-red-600"
                    role="alert"
                  >
                    {errors.inquiryType}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={e => updateField('message', e.target.value)}
                className={cn(
                  'w-full rounded-lg border bg-white px-4 py-3 transition-colors duration-200',
                  'focus:ring-primary focus:border-transparent focus:ring-2 focus:outline-none',
                  'resize-vertical placeholder:text-gray-400',
                  errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400',
                )}
                placeholder="Tell us about your project, partnership opportunity, or how we can help you..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">{formData.message.length}/1000 characters</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                disabled={!isFormValid || isSubmitting}
                className="flex min-w-[200px] items-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>

            {/* Form Footer */}
            <div className="pt-4 text-center">
              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy and terms of service. We typically respond
                within 24 hours.
              </p>
            </div>
          </FadeIn>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
