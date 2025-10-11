import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Korean Name Generator',
  description: 'Contact Korean Name Generator',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Contact Us</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <p className="mb-6 text-lg">
              We'd love to hear from you! Whether you have questions, feedback, or suggestions, 
              please don't hesitate to reach out.
            </p>
          </section>

          <section className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <a 
                    href="mailto:contact@korean-name-generator.com" 
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    contact@korean-name-generator.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">🌐</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/leesiyeon/korean-name-generator" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    github.com/leesiyeon/korean-name-generator
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How are the Korean names generated?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our names are selected from a curated database of authentic Korean names, each with verified 
                  meanings and pronunciations. We categorize them by style (Traditional, Modern, Trendy) and 
                  theme (Nature, Wisdom, Strength, Beauty, Virtue).
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Are the name meanings accurate?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! All name meanings have been researched and verified. However, Korean names can have multiple 
                  interpretations depending on the specific Chinese characters (hanja) used.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Can I use these names for my projects?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely! Feel free to use the generated names for personal projects, creative writing, 
                  gaming, or any other purpose. The names are based on public domain cultural knowledge.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How can I report an issue or suggest a feature?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Please email us or open an issue on our GitHub repository. We're constantly improving and 
                  appreciate all feedback!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Business Inquiries</h2>
            <p className="mb-4">
              For partnership opportunities, advertising, or other business-related inquiries, 
              please contact us at:
            </p>
            <p className="font-semibold">business@korean-name-generator.com</p>
          </section>

          <section className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Response Time</h2>
            <p>
              We aim to respond to all inquiries within 48 hours during business days. 
              Thank you for your patience! 🙏
            </p>
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

