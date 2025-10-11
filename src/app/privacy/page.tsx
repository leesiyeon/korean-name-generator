import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Korean Name Generator',
  description: 'Privacy Policy for Korean Name Generator',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Last updated: January 11, 2025</p>
            <p className="mb-4">
              Korean Name Generator ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Information You Provide</h3>
            <p className="mb-4">
              We do not require you to create an account or provide personal information to use our name generator. 
              The gender, style, and theme preferences you select are processed locally in your browser and are not stored on our servers.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Usage Data:</strong> We may collect information about how you interact with our website (pages visited, time spent, etc.)</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To improve user experience</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To display relevant advertisements (Google AdSense)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Google AdSense</h2>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your 
              prior visits to our website or other websites. You may opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline"> Google Ads Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser 
              to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Third-Party Services</h2>
            <p className="mb-4">We may employ third-party services that have access to your information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic</li>
              <li><strong>Google AdSense:</strong> To display advertisements</li>
              <li><strong>Vercel:</strong> To host our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your information. However, no method of transmission 
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Children's Privacy</h2>
            <p className="mb-4">
              Our service is intended for general audiences. We do not knowingly collect personal information from children 
              under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

