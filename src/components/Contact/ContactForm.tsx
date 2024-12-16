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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
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
          className={`w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C] ${
            errors.serviceType ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
          required
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
          className={`w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C] ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      <Button type="submit" variant="primary" fullWidth>
        Send Message
      </Button>
    </form>
  );
}