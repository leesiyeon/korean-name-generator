import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Korean Name Generator',
  description: 'Learn about Korean Name Generator, our mission to celebrate Korean culture, and how we help people discover beautiful Korean names.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Korean Name Generator</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="mb-4">
              Korean Name Generator was created to celebrate the beauty and richness of Korean naming traditions while 
              making them accessible to people around the world. Whether you're a K-pop fan, Korean language learner, 
              creative writer, or simply curious about Korean culture, we're here to help you discover the perfect Korean name.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">🎯 Smart Generation</h3>
                <p className="text-sm">
                  Our algorithm generates authentic Korean names based on your preferences for gender, style, and theme, 
                  ensuring every name is culturally appropriate and meaningful.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">📚 Educational Content</h3>
                <p className="text-sm">
                  We provide comprehensive information about Korean naming traditions, cultural significance, and pronunciation 
                  guides to deepen your understanding of Korean culture.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">🌏 Cultural Bridge</h3>
                <p className="text-sm">
                  By introducing Korean names to international audiences, we help foster cross-cultural understanding and 
                  appreciation for Korean heritage.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">✨ Free & Accessible</h3>
                <p className="text-sm">
                  Our service is completely free to use, with no registration required. We believe cultural knowledge should 
                  be accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Database</h2>
            <p className="mb-4">
              We've carefully curated a database of over 120 authentic Korean names, each with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>30 Korean Surnames:</strong> The most common family names in Korea</li>
              <li><strong>Accurate Meanings:</strong> Verified English translations of name meanings</li>
              <li><strong>Pronunciation Guides:</strong> Romanization to help with correct pronunciation</li>
              <li><strong>Style Categories:</strong> Traditional, Modern, and Trendy classifications</li>
              <li><strong>Theme Tags:</strong> Nature, Wisdom, Strength, Beauty, and Virtue themes</li>
            </ul>
            <p>
              All names are researched and verified for cultural accuracy and appropriateness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why Korean Names?</h2>
            <p className="mb-4">
              Korean names are unique in their structure, meaning, and cultural significance. Unlike many Western names, 
              Korean names are carefully chosen to reflect parents' wishes, embody positive qualities, and connect 
              individuals to their heritage. Each name tells a story and carries deep meaning.
            </p>
            <p className="mb-4">
              With the global rise of K-pop, K-dramas, and Korean culture, more people worldwide are interested in 
              understanding and adopting Korean names. We created this tool to make that process accessible, educational, 
              and enjoyable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">For K-pop & K-drama Fans</h2>
            <p className="mb-4">
              If you're a fan of Korean entertainment, you've probably wondered what Korean name would suit you. Our generator 
              helps you find a name that reflects your personality while honoring the beautiful traditions behind your favorite 
              idols' and actors' names. You can even choose names with similar styles or themes to your favorite stars!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">For Language Learners</h2>
            <p className="mb-4">
              Learning Korean? Understanding names is an important part of language and cultural education. Our tool provides 
              not just names, but insights into Korean language structure, pronunciation, and cultural context. It's a fun 
              way to practice reading hangul and understanding Korean phonetics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">For Writers & Creators</h2>
            <p className="mb-4">
              Creating Korean characters for your stories, games, or creative projects? We help you choose authentic, 
              meaningful names that bring depth to your characters. Each name comes with its meaning, helping you select 
              names that align with your character's personality and story arc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span><strong>Cultural Respect:</strong> We honor Korean naming traditions and cultural significance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span><strong>Accuracy:</strong> All names and meanings are researched and verified</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span><strong>Inclusivity:</strong> We welcome people of all backgrounds to explore Korean culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span><strong>Education:</strong> We strive to provide context and understanding, not just names</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span><strong>Accessibility:</strong> Our service is free and easy to use for everyone</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Looking Forward</h2>
            <p className="mb-4">
              We're constantly working to improve our service. Future plans include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Expanding our name database with more regional and historical names</li>
              <li>Adding audio pronunciations for each name</li>
              <li>Providing detailed hanja (Chinese character) information</li>
              <li>Creating interactive Korean name learning resources</li>
              <li>Building a community for users to share their name stories</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mb-4">
              We love hearing from our users! Whether you have questions, suggestions, or just want to share your name story, 
              please don't hesitate to <Link href="/contact" className="text-purple-600 hover:underline">contact us</Link>.
            </p>
            <p className="mb-4">
              Follow our <Link href="/blog" className="text-purple-600 hover:underline">blog</Link> for more insights into 
              Korean naming traditions, cultural articles, and updates about our service.
            </p>
          </section>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Ready to discover your Korean name?
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Try the Generator Now →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

