"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import SubNavbar from '../components/subnavbar/subnavbar';
import Footer from '../components/footer/footer';


const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Your message has been sent successfully!');
        setFormData({ email: '', title: '', description: '' });
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-8 text-base sm:text-lg">Please feel free to reach out to us by filling out the form below or contact us directly at sales@finlaydev.com or call us at 123-456-7890.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Subject of your message"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#BFA2DB] text-white py-2 px-4 rounded-md hover:bg-[#a682d6] transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {message && (
              <p className="mt-4 text-center text-sm text-purple-500">{message}</p>
            )}
          </form>
        </div>
        
        {/* Right Column */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image src="/assets/email.svg" alt="Email Icon" width={500} height={300} className="w-full max-w-sm lg:max-w-full h-auto" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
