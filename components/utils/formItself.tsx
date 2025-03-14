'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const   FormItself = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState<string>(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ghhkiq5', 
        'template_zdudf7n', 
        formData,
        'Db0Fk4_XSu9NvnUfu' 
      )
      .then(() => {
        setSuccessMessage('🎉 Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 

        setTimeout(() => setSuccessMessage(''), 5000);
      })
      .catch(() => {
        setSuccessMessage('❌ Failed to send message. Please try again.');
        setTimeout(() => setSuccessMessage(''), 5000);

      });
  };

  return (
    <div className="w-full max-w-md">
    {successMessage && (
      <div className="text-green-600 font-bold mb-2" aria-live="polite">
        {successMessage}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-start">Your Name</label>
        <input
          className="outline-[#636365] rounded-md p-2 border border-gray-300 w-full"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-start">Email</label>
        <input
          className="outline-[#636365] rounded-md p-2 border border-gray-300 w-full"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-start">Message</label>
        <textarea
          className="outline-[#636365] rounded-md p-2 border border-gray-300 w-full h-24"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="pt-2 flex items-start">
        <button type="submit" className="bg-[#09090b] px-4 py-2 rounded-lg text-[#fafafa]">
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default FormItself
