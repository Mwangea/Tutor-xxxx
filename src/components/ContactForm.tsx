import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C]"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#4A9B8C] focus:border-[#4A9B8C]"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#4A9B8C] text-white py-2 rounded-lg hover:bg-[#3d8274] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}