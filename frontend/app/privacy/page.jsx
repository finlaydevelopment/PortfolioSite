import React from 'react'
import SubNavbar from '../components/subnavbar/subnavbar';
import Footer from '../components/footer/footer';

const PrivacyPolicy = () => {
  return (
    <div className='bg-[#fff]'>
      {/* SubNavbar */}
      <SubNavbar/>

      {/* Main Section */}
      <main className="bg-[#F1F1F1] text-gray-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <p className="mb-6">
            At Finlay Development (“we,” “our,” or “us”), we are committed to protecting your privacy and ensuring the security of any personal information you provide. This Privacy Policy explains how we collect, use, and share information when you use our website located at <a href="https://finlaydev.com" className="text-purple-600 underline">finlaydev.com</a> (the “Website”) and any related services (collectively, the “Services”).
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We collect personal information that you voluntarily provide to us, such as your name, email address, and any other details submitted through our contact forms, when signing up for services, or during any other interactions with our website. We may also automatically collect certain technical information, such as your IP address, browser type, and cookies, to enhance the user experience on our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We may use the information we collect from you to:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Provide, operate, and maintain our services.</li>
            <li>Communicate with you regarding services, updates, and marketing materials.</li>
            <li>Process transactions and send necessary communications regarding them.</li>
            <li>Analyze how users interact with our website to improve its functionality.</li>
            <li>Ensure the security and safety of our users and systems.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
          <p className="mb-6">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless required by law or with your explicit consent. However, we may share your data with trusted third parties that assist us in operating our website and providing our services, provided that these parties agree to keep your information confidential.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            We use cookies and other tracking technologies to enhance your experience on our website. Cookies are small files that are stored on your device when you visit a website. You may choose to disable cookies through your browser settings, but doing so may affect your ability to use certain features of our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-6">
            We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmitting or storing data is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-6">
            Under the UK General Data Protection Regulation (GDPR), you have certain rights regarding your personal information. These rights include the right to access, correct, delete, or restrict the use of your data. If you wish to exercise any of these rights, please contact us at <a href="mailto:sales@finlaydev.com" className="text-purple-600 underline">sales@finlaydev.com</a>.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these other websites and encourage you to read their privacy policies when visiting them.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the date at the top of this policy or through other appropriate communication channels. Your continued use of our Services after changes to this policy signifies your acceptance of the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="mb-6">
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at: <a href="mailto:sales@finlaydev.com" className="text-purple-600 underline">sales@finlaydev.com</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy;
