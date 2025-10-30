import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 30 Popular Korean Female Names and Their Meanings | Korean Name Generator',
  description: 'Discover the most popular Korean girl names including Seo-yeon, Ji-woo, and Ha-yoon. Learn their beautiful meanings and cultural significance.',
  keywords: ['Korean girl names', 'Korean female names', 'popular Korean names', 'Seo-yeon', 'Ji-woo', 'Korean name meanings'],
};

export default function PopularFemaleNames() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <Link href="/blog" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-full">
              Popular Names
            </span>
            <time>January 16, 2025</time>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Top 30 Popular Korean Female Names
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore the most beloved Korean girl names, their beautiful meanings, and why parents choose them.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Korean Female Name Trends</h2>
          <p>
            Korean female names have undergone remarkable evolution, shifting from traditional names emphasizing
            virtue and domesticity to modern names celebrating intelligence, strength, and individuality. Today's
            most popular names blend elegance with empowerment, often emphasizing wisdom, beauty, and grace.
          </p>

          <h2>Top Trendy Korean Female Names</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">1. Seo-yeon (서연)</h3>
              <p className="mb-2"><strong>Meaning:</strong> "auspicious and beautiful"</p>
              <p className="text-sm">
                Seo-yeon has been Korea's #1 or #2 most popular girl name for over a decade. The name combines good
                fortune with beauty, creating a name that feels both elegant and meaningful. "Yeon" (연) adds a lovely
                flowing sound that makes it particularly appealing.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">2. Ji-woo (지우)</h3>
              <p className="mb-2"><strong>Meaning:</strong> "wisdom and house"</p>
              <p className="text-sm">
                Ji-woo represents intelligence and stability. While traditionally more common for boys, it has become
                increasingly popular for girls, reflecting modern attitudes toward gender-neutral naming. The name
                emphasizes wisdom while maintaining an elegant sound.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">3. Ha-yoon (하윤)</h3>
              <p className="mb-2"><strong>Meaning:</strong> "summer and allow"</p>
              <p className="text-sm">
                Ha-yoon has surged in popularity in recent years. The name evokes warmth and acceptance, with "ha" (하)
                referencing summer and "yoon" (윤) suggesting harmony and permission. It's modern, beautiful, and
                easy to pronounce internationally.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">4. Soo-ah (수아)</h3>
              <p className="mb-2"><strong>Meaning:</strong> "excellent and elegant"</p>
              <p className="text-sm">
                Soo-ah combines excellence with elegance in a name that sounds fresh and modern. The short, two-syllable
                structure makes it particularly appealing to contemporary parents. It's sophisticated yet approachable.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">5. Min-seo (민서)</h3>
              <p className="mb-2"><strong>Meaning:</strong> "clever and auspicious"</p>
              <p className="text-sm">
                Min-seo emphasizes intelligence combined with good fortune. "Min" (민) is increasingly popular in
                girls' names, reflecting the value placed on cleverness and capability rather than just traditional
                feminine qualities.
              </p>
            </div>
          </div>

          <h2>More Trendy Names</h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Ji-ah (지아)</strong> - "wisdom and elegant" - Perfect balance of smart and beautiful</li>
              <li><strong>Ji-an (지안)</strong> - "wisdom and peace" - Emphasizes tranquility and intelligence</li>
              <li><strong>A-rin (아린)</strong> - "elegant and beautiful jade" - Precious and refined</li>
              <li><strong>Yoo-jin (유진)</strong> - "abundant and precious" - Wealth of goodness</li>
              <li><strong>Si-eun (시은)</strong> - "beginning and grace" - New starts with elegance</li>
            </ul>
          </div>

          <h2>Names Emphasizing Wisdom and Intelligence</h2>
          <div className="bg-indigo-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Ji-yoo (지유)</strong> - "wisdom and abundant" - Rich in knowledge</li>
              <li><strong>Ji-won (지원)</strong> - "wisdom and first" - Leading with intelligence</li>
              <li><strong>Ji-min (지민)</strong> - "wisdom and jade" - Precious wisdom</li>
              <li><strong>Ji-hye (지혜)</strong> - "wisdom and grace" - Graceful intelligence</li>
              <li><strong>Min-ji (민지)</strong> - "clever and wisdom" - Double emphasis on smarts</li>
              <li><strong>Seo-hyun (서현)</strong> - "auspicious and wise" - Lucky and intelligent</li>
            </ul>
          </div>

          <h2>Nature-Inspired Names</h2>
          <p>
            Beautiful names celebrating the natural world:
          </p>
          <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Chae-won (채원)</strong> - "color and first" - Vibrant and leading</li>
              <li><strong>Ha-rin (하린)</strong> - "summer and beautiful jade" - Warm and precious</li>
              <li><strong>Chae-eun (채은)</strong> - "color and grace" - Colorful elegance</li>
              <li><strong>Ha-eun (하은)</strong> - "summer and grace" - Summer's grace</li>
              <li><strong>Ga-eun (가은)</strong> - "beautiful autumn and grace" - Autumn's beauty</li>
            </ul>
          </div>

          <h2>Elegant and Graceful Names</h2>
          <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Yoon-seo (윤서)</strong> - "allow and auspicious" - Harmonious fortune</li>
              <li><strong>Seo-yoon (서윤)</strong> - "auspicious and allow" - Fortunate harmony</li>
              <li><strong>Ye-rin (예린)</strong> - "art and beautiful jade" - Artistic beauty</li>
              <li><strong>Ye-seo (예서)</strong> - "art and auspicious" - Artistic fortune</li>
              <li><strong>Ye-eun (예은)</strong> - "art and grace" - Artistic elegance</li>
            </ul>
          </div>

          <h2>Modern Classic Names</h2>
          <p>
            These names bridge generations beautifully:
          </p>
          <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Ji-soo (지수)</strong> - "wisdom and excellent" - Brilliant mind</li>
              <li><strong>Hye-won (혜원)</strong> - "bright and first" - Shining leader</li>
              <li><strong>Soo-jin (수진)</strong> - "excellent and precious" - Valuable excellence</li>
              <li><strong>Hye-jin (혜진)</strong> - "bright and precious" - Precious brightness</li>
              <li><strong>Soo-min (수민)</strong> - "excellent and clever" - Smart excellence</li>
            </ul>
          </div>

          <h2>Virtue-Centered Names</h2>
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Yoo-na (유나)</strong> - "abundant and graceful" - Graceful abundance</li>
              <li><strong>Da-eun (다은)</strong> - "many and grace" - Many blessings</li>
              <li><strong>Chae-yoon (채윤)</strong> - "color and allow" - Colorful harmony</li>
              <li><strong>Ye-na (예나)</strong> - "art and graceful" - Graceful artistry</li>
              <li><strong>Eun-seo (은서)</strong> - "grace and auspicious" - Gracious fortune</li>
            </ul>
          </div>

          <h2>Traditional Names with Enduring Beauty</h2>
          <div className="bg-rose-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 mb-0">
              <li><strong>Eun-ji (은지)</strong> - "grace and wisdom" - Graceful wisdom</li>
              <li><strong>Jung-eun (정은)</strong> - "righteous and grace" - Righteous grace</li>
              <li><strong>Ji-hyun (지현)</strong> - "wisdom and wise" - Doubly wise</li>
              <li><strong>Soo-jung (수정)</strong> - "excellent and righteous" - Excellent virtue</li>
              <li><strong>Eun-hye (은혜)</strong> - "grace and kindness" - Gracious kindness</li>
            </ul>
          </div>

          <h2>Why These Names Are Popular</h2>

          <h3>The "Eun" (은) Trend</h3>
          <p>
            "Eun" meaning "grace," "silver," or "kindness" appears in countless popular names. It adds a soft,
            elegant quality while carrying beautiful meanings. Si-eun, Ha-eun, Da-eun, and Chae-eun all benefit
            from this lovely syllable.
          </p>

          <h3>The "Seo" (서) Popularity</h3>
          <p>
            "Seo" meaning "auspicious" or "felicitous" dominates naming trends. Seo-yeon, Min-seo, Ye-seo, and
            Yoon-seo all incorporate this fortunate syllable, reflecting parental wishes for blessed lives.
          </p>

          <h3>Emphasis on Intelligence</h3>
          <p>
            Modern Korean parents increasingly value intelligence for girls as much as boys. Names containing "ji" (지,
            wisdom) and "min" (민, clever) reflect this, showing evolving attitudes toward women's education and careers.
          </p>

          <h3>Shorter, Simpler Names</h3>
          <p>
            While traditional Korean names often used two complex syllables, modern trends favor names that sound
            simpler and more flowing. Names like Soo-ah, Ji-ah, and A-rin exemplify this streamlined aesthetic.
          </p>

          <h2>Celebrity Influence</h2>
          <p>
            K-drama actresses and K-pop idols significantly impact naming trends:
          </p>
          <ul>
            <li><strong>Ji-soo (지수)</strong> - BLACKPINK's Jisoo increased this name's popularity</li>
            <li><strong>Yoo-na (유나)</strong> - Girls' Generation's Yoona made this name iconic</li>
            <li><strong>Seo-hyun (서현)</strong> - Multiple celebrities bear this elegant name</li>
          </ul>

          <h2>International Considerations</h2>
          <p>
            Modern parents often consider international usability:
          </p>
          <ul>
            <li><strong>Easy pronunciation:</strong> Names like Soo-ah, Ji-ah easier for non-Koreans</li>
            <li><strong>Pleasant sound:</strong> Names that sound beautiful in multiple languages</li>
            <li><strong>Unique but accessible:</strong> Distinctive without being difficult</li>
          </ul>

          <h2>Generational Shifts</h2>
          <p>
            Comparing naming trends across generations:
          </p>
          <ul>
            <li><strong>Grandmothers' generation:</strong> Mi-young, Young-sook, Hye-sook (emphasizing beauty, purity)</li>
            <li><strong>Mothers' generation:</strong> Ji-eun, Min-jung, Hye-jin (transitional period)</li>
            <li><strong>Current generation:</strong> Seo-yeon, Ji-woo, Ha-yoon (modern, international-friendly)</li>
          </ul>

          <h2>Choosing the Perfect Name</h2>
          <p>
            Considerations for selecting a Korean female name:
          </p>
          <ol>
            <li><strong>Meaning:</strong> What qualities do you want to emphasize?</li>
            <li><strong>Sound harmony:</strong> How does it flow with the surname?</li>
            <li><strong>Modern vs. traditional:</strong> Which aesthetic appeals more?</li>
            <li><strong>Uniqueness:</strong> Balance popularity with distinctiveness</li>
            <li><strong>International usability:</strong> Will it work globally?</li>
            <li><strong>Personal connection:</strong> Does it resonate emotionally?</li>
          </ol>

          <div className="bg-pink-50 dark:bg-gray-700 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Generate Your Perfect Korean Female Name
            </h3>
            <p className="text-sm mb-4">
              Use our Korean Name Generator to discover beautiful names based on your style and theme preferences.
              All these popular names and more are available!
            </p>
            <Link
              href="/?gender=female"
              className="inline-block px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-all"
            >
              Generate Female Names →
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            Korean female names reflect the evolving role of women in Korean society. Today's popular names celebrate
            intelligence, strength, and individuality alongside traditional values of grace and beauty. Whether choosing
            a trendy name like Seo-yeon or a timeless classic like Ji-soo, modern Korean female names offer beautiful
            meanings that empower girls to be their best selves. The most beloved names successfully balance elegance
            with substance, ensuring they remain beautiful and meaningful throughout life.
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