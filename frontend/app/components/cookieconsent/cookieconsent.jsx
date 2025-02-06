"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      setIsVisible(true); // Show consent banner if no consent is found
    } else if (cookieConsent === 'accepted') {
      initGoogleAnalytics(); // Initialize Google Analytics if already accepted
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    initGoogleAnalytics(); // Initialize Google Analytics after accepting cookies
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  // Function to dynamically inject the Google Analytics script
  const initGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && !window.gaInitialized) {
      window.gaInitialized = true; // To ensure the script is not added multiple times

      // Inject Google Analytics script
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-DVBP7WNNL5";
      script.async = true;
      document.head.appendChild(script);

      // Set up Google Analytics configuration
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-DVBP7WNNL5', {
        anonymize_ip: true, // Optional: Anonymize IPs for privacy compliance
      });
    }
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            We use cookies to improve your experience on our site. By accepting, you agree to our{' '}
            <Link href="/cookies-policy" className="underline text-purple-400 ml-1">
              Cookies Policy
            </Link>.
          </p>
          <div className="flex space-x-2 mt-2 sm:mt-0">
          <button
              className=" hover:bg-gray-400 text-gray-500 py-1 px-3 rounded"
              onClick={declineCookies}
            >
              Decline
            </button>
            <button
              className="bg-purple-600 hover:bg-purple-500 text-white py-1 px-3 rounded"
              onClick={acceptCookies}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
