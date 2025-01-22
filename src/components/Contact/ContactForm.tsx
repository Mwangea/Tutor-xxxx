import React, { useState } from 'react';
import { serviceCategories } from './contactData';
import { validateEmail, validateRequired } from '../../utils/validation';
import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

interface SubmissionStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>({
    loading: false,
    success: false,
    error: null,
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateRequired(formData.serviceType)) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      serviceType: '',
      message: '',
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      // Send email directly
      const mailtoLink = `mailto:support@tutorChristabel.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AService Type: ${formData.serviceType}%0D%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;

      setStatus({
        loading: false,
        success: true,
        error: null,
      });
      resetForm();

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="space-y-6">
      {status.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <p className="text-sm text-red-700 mt-1">{status.error}</p>
            </div>
          </div>
        </div>
      )}

      {status.success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Success!</h3>
              <p className="text-sm text-green-700 mt-1">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="name"
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          error={errors.name}
        />
        <Input
          id="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          error={errors.email}
         
        />
        <div>
          <label htmlFor="serviceType" className="block text-gray-700 mb-2">
            Service Type
          </label>
          <select
            id="serviceType"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C] 
              ${errors.serviceType ? 'border-red-500' : 'border-gray-300'}
              ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}
              bg-white`}
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            required
            disabled={status.loading}
          >
            <option value="">Select a service</option>
            {serviceCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-sm text-red-500">{errors.serviceType}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C] 
              ${errors.message ? 'border-red-500' : 'border-gray-300'}
              ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={status.loading}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          disabled={status.loading}
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}