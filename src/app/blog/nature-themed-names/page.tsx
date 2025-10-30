import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nature-Themed Korean Names: Beautiful Names Inspired by Nature | Korean Name Generator',
  description: 'Discover beautiful Korean names inspired by nature. From Ha-neul (sky) to Si-woo (universe), explore names that celebrate the natural world with deep cultural meanings.',
  keywords: ['Korean nature names', 'Korean names nature', 'Ha-neul', 'nature Korean names', 'Korean name meanings'],
};

export default function NatureThemedNames() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <Link href="/blog" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full">
              Name Themes
            </span>
            <time>January 16, 2025</time>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nature-Themed Korean Names
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore Korean names inspired by the beauty of nature—from celestial bodies to seasons.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Connection Between Korean Names and Nature</h2>
          <p>
            Korean culture has always maintained a deep connection with nature, reflected beautifully in naming
            traditions. Nature-themed names celebrate the harmony between humans and the natural world, embodying
            qualities like growth, beauty, and the cyclical patterns of life.
          </p>

          <h2>Popular Nature-Themed Male Names</h2>

          <h3>Celestial and Universal Names</h3>
          <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-4 mb-0">
              <li>
                <strong>Si-woo (시우)</strong> - "beginning and universe"
                <p className="text-sm mt-1">One of the trendiest names, representing the vastness of possibility</p>
              </li>
              <li>
                <strong>Eun-woo (은우)</strong> - "silver universe"
                <p className="text-sm mt-1">Combines precious metal with cosmic imagery</p>
              </li>
              <li>
                <strong>Woo-jin (우진)</strong> - "universe and precious"
                <p className="text-sm mt-1">Emphasizes the preciousness of the cosmos</p>
              </li>
            </ul>
          </div>

          <h3>Seasonal Names</h3>
          <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-4 mb-0">
              <li>
                <strong>Ha-jun (하준)</strong> - "summer and talented"
                <p className="text-sm mt-1">Summer represents growth, warmth, and vitality</p>
              </li>
              <li>
                <strong>Ha-yul (하율)</strong> - "summer and discipline"
                <p className="text-sm mt-1">Combines the warmth of summer with structure</p>
              </li>
              <li>
                <strong>Ha-jin (하진)</strong> - "summer and precious"
                <p className="text-sm mt-1">Modern name celebrating summer's value</p>
              </li>
            </ul>
          </div>

          <h3>Traditional Nature Names</h3>
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-4 mb-0">
              <li>
                <strong>Tae-yang (태양)</strong> - "sun"
                <p className="text-sm mt-1">Direct reference to the sun, symbolizing warmth and life</p>
              </li>
              <li>
                <strong>Dong-hyun (동현)</strong> - "east and wise"
                <p className="text-sm mt-1">East represents new beginnings and sunrise</p>
              </li>
              <li>
                <strong>Kang-min (강민)</strong> - "strong river and clever"
                <p className="text-sm mt-1">Rivers symbolize flow, adaptability, and life</p>
              </li>
            </ul>
          </div>

          <h2>Popular Nature-Themed Female Names</h2>

          <h3>Seasonal and Colorful Names</h3>
          <div className="bg-pink-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-4 mb-0">
              <li>
                <strong>Ha-yoon (하윤)</strong> - "summer and allow"
                <p className="text-sm mt-1">One of the most popular modern names for girls</p>
              </li>
              <li>
                <strong>Ha-eun (하은)</strong> - "summer and grace"
                <p className="text-sm mt-1">Combines seasonal warmth with elegance</p>
              </li>
              <li>
                <strong>Ga-eun (가은)</strong> - "beautiful autumn and grace"
                <p className="text-sm mt-1">Autumn represents maturity and harvest</p>
              </li>
              <li>
                <strong>Chae-won (채원)</strong> - "color and first"
                <p className="text-sm mt-1">Celebrates the vibrant colors of nature</p>
              </li>
              <li>
                <strong>Chae-eun (채은)</strong> - "color and grace"
                <p className="text-sm mt-1">Trendy name emphasizing nature's beauty</p>
              </li>
            </ul>
          </div>

          <h3>Pure Korean Nature Names</h3>
          <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <p className="text-sm mb-4">
              These names use pure Korean words (순우리말) without Chinese character origins:
            </p>
            <ul className="space-y-4 mb-0">
              <li>
                <strong>Ha-neul (하늘)</strong> - "sky" or "heaven"
                <p className="text-sm mt-1">Represents limitless potential and freedom</p>
              </li>
              <li>
                <strong>Byeol (별)</strong> - "star"
                <p className="text-sm mt-1">Symbolizes brightness and guidance</p>
              </li>
              <li>
                <strong>Nuri (누리)</strong> - "world"
                <p className="text-sm mt-1">Encompasses all of nature and life</p>
              </li>
            </ul>
          </div>

          <h2>Symbolic Meanings in Nature Names</h2>

          <h3>Water Elements</h3>
          <p>
            Water represents flow, adaptability, and life itself in Korean culture. Names incorporating water
            elements suggest:
          </p>
          <ul>
            <li><strong>Rivers:</strong> Continuous flow and persistence</li>
            <li><strong>Ocean/Sea:</strong> Vastness and depth</li>
            <li><strong>Rain:</strong> Blessing and growth</li>
          </ul>

          <h3>Celestial Elements</h3>
          <p>
            Sky, stars, sun, and moon names carry deep symbolism:
          </p>
          <ul>
            <li><strong>Sun (양):</strong> Life, warmth, and masculine energy</li>
            <li><strong>Moon (월):</strong> Beauty, femininity, and cyclical nature</li>
            <li><strong>Stars (별):</strong> Hope, guidance, and dreams</li>
            <li><strong>Sky (하늘):</strong> Limitlessness and freedom</li>
          </ul>

          <h3>Seasonal Symbolism</h3>
          <p>
            Each season carries specific cultural meanings:
          </p>
          <ul>
            <li><strong>Spring (봄):</strong> New beginnings, youth, and hope</li>
            <li><strong>Summer (하):</strong> Growth, vitality, and abundance</li>
            <li><strong>Autumn (가을):</strong> Maturity, harvest, and wisdom</li>
            <li><strong>Winter (겨울):</strong> Resilience, purity, and introspection</li>
          </ul>

          <h2>Why Choose a Nature-Themed Name?</h2>

          <h3>Universal Appeal</h3>
          <p>
            Nature names transcend cultural boundaries. Concepts like sky, river, and summer are universally
            understood, making these names accessible to international audiences while maintaining Korean identity.
          </p>

          <h3>Timeless Beauty</h3>
          <p>
            Unlike trendy names that may feel dated, nature names possess timeless quality. Nature itself is eternal,
            and names inspired by natural elements remain beautiful across generations.
          </p>

          <h3>Positive Associations</h3>
          <p>
            Nature-themed names evoke positive imagery and feelings—growth, beauty, strength, and harmony. These
            names carry inherent optimism about life and the world.
          </p>

          <h3>Gender Flexibility</h3>
          <p>
            Many nature names work beautifully for any gender. Names like Ha-yoon, Si-woo, and Ji-woo are
            increasingly used across gender lines, reflecting modern attitudes toward naming.
          </p>

          <h2>Modern Trends in Nature Names</h2>

          <h3>Rise of Pure Korean Names</h3>
          <p>
            Recent years have seen increased popularity of pure Korean nature names (ha-neul, byeol) over
            Sino-Korean names. This trend reflects pride in native Korean language and desire for names that
            sound natural in Korean.
          </p>

          <h3>Minimalist Aesthetic</h3>
          <p>
            Modern parents favor names with clean, simple sounds inspired by nature. Single-concept names like
            "sky" or "star" align with contemporary minimalist aesthetics.
          </p>

          <h3>Environmental Consciousness</h3>
          <p>
            Growing environmental awareness has made nature-themed names even more meaningful. These names express
            hopes for children to live in harmony with nature and appreciate the natural world.
          </p>

          <h2>Combining Nature with Other Themes</h2>
          <p>
            Many beautiful Korean names combine nature elements with other meaningful concepts:
          </p>
          <ul>
            <li><strong>Nature + Wisdom:</strong> "wise as a river" or "clever as summer"</li>
            <li><strong>Nature + Virtue:</strong> "graceful as autumn" or "righteous as the sun"</li>
            <li><strong>Nature + Beauty:</strong> "beautiful as stars" or "elegant as sky"</li>
          </ul>

          <h2>Cultural Context</h2>
          <p>
            Korea's deep appreciation for nature stems from various sources:
          </p>
          <ul>
            <li><strong>Shamanism:</strong> Ancient Korean spirituality viewing nature as sacred</li>
            <li><strong>Buddhism:</strong> Emphasis on harmony with natural world</li>
            <li><strong>Confucianism:</strong> Natural order and cosmic balance</li>
            <li><strong>Poetry and Art:</strong> Rich tradition of nature-inspired artistic expression</li>
          </ul>

          <h2>How to Choose a Nature-Themed Name</h2>
          <p>
            When selecting a nature-themed Korean name, consider:
          </p>
          <ol>
            <li><strong>Personal Connection:</strong> Choose elements that resonate with you</li>
            <li><strong>Sound and Flow:</strong> Ensure the name sounds pleasant</li>
            <li><strong>Meaning Depth:</strong> Consider layered meanings and cultural significance</li>
            <li><strong>Balance:</strong> Pair with a surname that complements the nature element</li>
          </ol>

          <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Try Our Name Generator
            </h3>
            <p className="text-sm mb-4">
              Use our Korean Name Generator to discover nature-themed names that match your preferences. Filter by
              "nature" theme to see all available options!
            </p>
            <Link
              href="/?theme=nature"
              className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all"
            >
              Generate Nature Names →
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            Nature-themed Korean names offer a beautiful way to connect children with the natural world and Korean
            cultural values. Whether you choose a name meaning "summer," "sky," or "universe," these names carry
            timeless beauty and positive associations. They represent hope for a life lived in harmony with nature
            and appreciation for the world's inherent beauty.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 dark:text-purple-400">
              ← Back to Blog
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all"
            >
              Try Name Generator →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}