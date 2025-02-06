import React from 'react'
import SubNavbar from '../components/subnavbar/subnavbar';
import Footer from '../components/footer/footer';

const TermsOfService = () => {
  return (
    <div className='bg-[#fff]'>
      {/* SubNavbar */}
      <SubNavbar/>

      {/* Main Section */}
      <main className="bg-[#F1F1F1] text-gray-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <p className="mb-6">
            Welcome to Finlay Development (“we,” “our,” or “us”). These Terms of Service govern your use of our website located at <a href="https://finlaydev.com" className="text-purple-600 underline">finlaydev.com</a> (the “Website”) and any related services (collectively, the “Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
          <p className="mb-6">
            You must be at least 18 years of age to use our Services. By using our Services, you represent and warrant that you have the legal capacity to enter into a binding agreement under the laws of the United Kingdom.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
          <p className="mb-6">
            You agree to use our Services only for lawful purposes and in compliance with all applicable laws and regulations. You may not use our Services to engage in any prohibited activities, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Attempting to gain unauthorized access to our systems.</li>
            <li>Engaging in fraudulent or misleading activities.</li>
            <li>Violating intellectual property rights or the privacy of others.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Payment and Fees</h2>
          <p className="mb-6">
            All fees for Services are provided at the time of your request or on our Website. Payment must be made in full at the time specified in your contract or agreement. We reserve the right to modify pricing at any time but will notify you of changes in advance. Failure to pay for services may result in termination of your access to our Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            All content, trademarks, and logos displayed on the Finlay Development Website are the intellectual property of Finlay Development unless otherwise stated. Upon completion and payment for services, intellectual property rights for delivered projects will transfer to the client, unless otherwise agreed in writing.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
          <p className="mb-6">
            We may terminate or suspend your access to our Services at any time, without prior notice, if you breach these Terms or engage in unlawful activity. You may terminate your use of our Services by discontinuing your access to our Website and Services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Disclaimers and Limitation of Liability</h2>
          <p className="mb-6">
            Our Services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We do not guarantee that our Services will be error-free or uninterrupted. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="mb-6">
            In no event shall Finlay Development be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Services, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in the United Kingdom.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms of Service at any time. If we make material changes, we will notify you by updating the date at the top of these Terms or through other appropriate communication channels. Continued use of our Services after changes to the Terms signifies your acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="mb-6">
            If you have any questions or concerns about these Terms of Service, please contact us at: <a href="mailto:sales@finlaydev.com" className="text-purple-600 underline">sales@finlaydev.com</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default TermsOfService;
