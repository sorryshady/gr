/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react'
import { ContactFormData, ContactFormErrors, ContactFormState } from '@/types'

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  inquiryType: 'general',
  message: '',
}

const initialFormState: ContactFormState = {
  data: initialFormData,
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
}

export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)

  // Email validation regex
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate individual field
  const validateField = useCallback(
    (name: keyof ContactFormData, value: ContactFormData[keyof ContactFormData]): string | undefined => {
      switch (name) {
        case 'name':
          if (typeof value !== 'string' || !value.trim()) {
            return 'Name is required'
          }
          if (value.trim().length < 2) {
            return 'Name must be at least 2 characters'
          }
          return undefined

        case 'email':
          if (typeof value !== 'string' || !value.trim()) {
            return 'Email is required'
          }
          if (!isValidEmail(value)) {
            return 'Please enter a valid email address'
          }
          return undefined

        case 'inquiryType':
          if (!value) {
            return 'Please select an inquiry type'
          }
          return undefined

        case 'message':
          if (typeof value !== 'string' || !value.trim()) {
            return 'Message is required'
          }
          if (value.trim().length < 10) {
            return 'Message must be at least 10 characters'
          }
          if (value.trim().length > 1000) {
            return 'Message must be less than 1000 characters'
          }
          return undefined

        case 'company':
          // Company is optional, no validation needed
          return undefined

        default:
          return undefined
      }
    },
    [],
  )

  // Validate all fields
  const validateForm = useCallback(
    (data: ContactFormData): ContactFormErrors => {
      const errors: ContactFormErrors = {}

      // Validate each required field
      const nameError = validateField('name', data.name)
      if (nameError) errors.name = nameError

      const emailError = validateField('email', data.email)
      if (emailError) errors.email = emailError

      const inquiryTypeError = validateField('inquiryType', data.inquiryType)
      if (inquiryTypeError) errors.inquiryType = inquiryTypeError

      const messageError = validateField('message', data.message)
      if (messageError) errors.message = messageError

      // Company is optional, only validate if provided
      if (data.company) {
        const companyError = validateField('company', data.company)
        if (companyError) errors.company = companyError
      }

      return errors
    },
    [validateField],
  )

  // Update field value and validate
  const updateField = useCallback(
    (name: keyof ContactFormData, value: ContactFormData[keyof ContactFormData]) => {
      setFormState(prev => {
        const newData = { ...prev.data, [name]: value }
        const fieldError = validateField(name, value)
        const newErrors = { ...prev.errors }

        if (fieldError) {
          ;(newErrors as any)[name] = fieldError
        } else {
          delete (newErrors as any)[name]
        }

        return {
          ...prev,
          data: newData,
          errors: newErrors,
        }
      })
    },
    [validateField],
  )

  // Check if form is valid
  const isFormValid = useCallback((): boolean => {
    const errors = validateForm(formState.data)
    return Object.keys(errors).length === 0
  }, [formState.data, validateForm])

  // Submit form
  const submitForm = useCallback(async (): Promise<boolean> => {
    // Validate form before submission
    const errors = validateForm(formState.data)

    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors,
      }))
      return false
    }

    // Set submitting state
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      errors: {},
    }))

    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000))

      // For now, we'll simulate a successful submission
      // In a real implementation, this would make an API call
      console.log('Form submitted:', formState.data)

      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
      }))

      return true
    } catch (error) {
      console.error('Form submission error:', error)

      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: {
          message: 'Failed to submit form. Please try again.',
        },
      }))

      return false
    }
  }, [formState.data, validateForm])

  // Reset form
  const resetForm = useCallback(() => {
    setFormState(initialFormState)
  }, [])

  // Reset only submission state (keep form data)
  const resetSubmissionState = useCallback(() => {
    setFormState(prev => ({
      ...prev,
      isSubmitting: false,
      isSubmitted: false,
      errors: {},
    }))
  }, [])

  return {
    // Form state
    formData: formState.data,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isSubmitted: formState.isSubmitted,

    // Form actions
    updateField,
    submitForm,
    resetForm,
    resetSubmissionState,

    // Validation helpers
    isFormValid: isFormValid(),
    validateField,
  }
}
