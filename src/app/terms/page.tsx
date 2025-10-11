import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Korean Name Generator',
  description: 'Terms of Service for Korean Name Generator',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated: January 11, 2025</p>
            <p className="mb-4">
              Please read these Terms of Service ("Terms") carefully before using the Korean Name Generator website 
              (the "Service") operated by us ("we," "our," or "us").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part 
              of the Terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Use of Service</h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">2.1 Description</h3>
            <p className="mb-4">
              Korean Name Generator is a free online tool that generates Korean names based on user preferences. 
              The service is provided "as is" for entertainment and educational purposes.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">2.2 Acceptable Use</h3>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to interfere with the proper functioning of the Service</li>
              <li>Use automated systems to access the Service excessively</li>
              <li>Copy, modify, or distribute content from the Service without permission</li>
              <li>Use the Service to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are owned by Korean Name Generator 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              The Korean names and their meanings provided by the Service are based on public domain knowledge and 
              cultural information. Users are free to use the generated names for personal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Disclaimer of Warranties</h2>
            <p className="mb-4">
              The Service is provided "as is" and "as available" without any warranties of any kind, either express 
              or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accuracy or completeness of name meanings</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
              <li>Cultural appropriateness of generated names</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Korean Name Generator, its directors, employees, or partners be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising out of or relating to your 
              use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. Third-Party Links and Advertisements</h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services and display advertisements through 
              Google AdSense. We are not responsible for the content, privacy policies, or practices of any 
              third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">7. User Generated Content</h2>
            <p className="mb-4">
              Users may copy and share the names generated by our Service. By doing so, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You are responsible for how you use the generated names</li>
              <li>We are not liable for any consequences of using a generated name</li>
              <li>Names are generated algorithmically and may not be culturally appropriate in all contexts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
              provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">9. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">10. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of your jurisdiction, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-semibold">Email: contact@korean-name-generator.com</p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a href="/" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

