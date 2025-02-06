import React from 'react';
import SubNavbar from '../components/subnavbar/subnavbar';
import Footer from '../components/footer/footer';

const CookiesPolicy = () => {
  return (
    <div className='bg-[#fff]'>
      {/* SubNavbar */}
      <SubNavbar/>

      {/* Main Section */}
      <main className="bg-[#F1F1F1] text-gray-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Cookies Policy</h1>
          
          <p className="mb-6">
            At Finlay Development (“we,” “our,” or “us”), we use cookies and similar tracking technologies to enhance your experience on our website, located at <a href="https://finlaydev.com" className="text-purple-600 underline">finlaydev.com</a> (the “Website”). This Cookies Policy explains what cookies are, how we use them, and how you can manage them.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. What are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They allow the website to recognize your device and store information about your preferences or actions over time.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <p className="mb-6">
            We use the following types of cookies on our Website:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually set in response to actions made by you, such as setting privacy preferences, logging in, or filling out forms.</li>
            <li><strong>Analytics Cookies:</strong> These cookies help us track and understand how visitors interact with our Website by collecting information anonymously.</li>
            <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
            <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make (such as your language preferences) and provide enhanced, more personal features.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <p className="mb-6">
            We use cookies to improve your experience on our Website by:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Recognizing when you return to our Website.</li>
            <li>Storing your preferences for future visits.</li>
            <li>Providing analytics on website traffic and usage.</li>
            <li>Ensuring the Website runs properly and securely.</li>
            <li>Delivering personalized content and advertising based on your browsing behavior.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p className="mb-6">
            We may also allow certain third-party service providers to place cookies on your device. These third parties may use cookies to collect information about your online activities over time and across different websites when you use our Website. This information may be used to provide you with advertising based on your interests.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
          <p className="mb-6">
            You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may prevent you from taking full advantage of our Website.
          </p>
          <p className="mb-6">
            You can manage your cookie settings by adjusting your browser preferences:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>In Chrome: Go to Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
            <li>In Safari: Go to Preferences &gt; Privacy &gt; Cookies and website data.</li>
            <li>In Firefox: Go to Options &gt; Privacy & Security &gt; Cookies and Site Data.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to this Cookies Policy</h2>
          <p className="mb-6">
            We may update this Cookies Policy from time to time. If we make material changes, we will notify you by updating the date at the top of this policy or through other appropriate communication channels. Your continued use of our Website after changes to this policy signifies your acceptance of the updated Cookies Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="mb-6">
            If you have any questions or concerns about our use of cookies, please contact us at: <a href="mailto:sales@finlaydev.com" className="text-purple-600 underline">sales@finlaydev.com</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default CookiesPolicy;
