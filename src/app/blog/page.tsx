import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Korean Name Generator | Learn About Korean Names',
  description: 'Discover the rich history, meanings, and cultural significance of Korean names. Learn about naming traditions, popular trends, and more.',
};

const blogPosts = [
  {
    slug: 'korean-name-pronunciation',
    title: 'Korean Name Pronunciation Guide',
    excerpt: 'Learn how to pronounce Korean names correctly with our comprehensive guide. Master hangul sounds, romanization systems, and common pronunciation mistakes.',
    date: '2025-01-17',
    category: 'Language Guide',
  },
  {
    slug: 'nature-themed-names',
    title: 'Nature-Themed Korean Names',
    excerpt: 'Discover beautiful Korean names inspired by nature—from Ha-neul (sky) to Si-woo (universe). Explore names celebrating the natural world.',
    date: '2025-01-16',
    category: 'Name Themes',
  },
  {
    slug: 'popular-male-names',
    title: 'Top 30 Popular Korean Male Names',
    excerpt: 'Explore the most beloved Korean boy names including Min-jun, Seo-jun, and Ji-ho. Learn their beautiful meanings and why parents choose them.',
    date: '2025-01-16',
    category: 'Popular Names',
  },
  {
    slug: 'popular-female-names',
    title: 'Top 30 Popular Korean Female Names',
    excerpt: 'Discover the most popular Korean girl names including Seo-yeon, Ji-woo, and Ha-yoon. Learn their meanings and cultural significance.',
    date: '2025-01-16',
    category: 'Popular Names',
  },
  {
    slug: 'kim-surname-origin',
    title: 'Kim Surname: History and Royal Origins',
    excerpt: 'Discover the fascinating history of Kim (김), the most popular Korean surname with royal heritage. Learn why 21% of Koreans share this name.',
    date: '2025-01-15',
    category: 'Surnames',
  },
  {
    slug: 'lee-surname-origin',
    title: 'Lee Surname: Korea\'s Royal Dynasty Name',
    excerpt: 'Explore the imperial heritage of Lee (이), Korea\'s second most common surname from the Joseon Dynasty. Learn about famous Lees throughout history.',
    date: '2025-01-15',
    category: 'Surnames',
  },
  {
    slug: 'park-surname-origin',
    title: 'Park Surname: Ancient Silla Kingdom Heritage',
    excerpt: 'Learn about Park (박), Korea\'s third most popular surname with 2,000 years of Silla Kingdom history. Discover its legendary origins.',
    date: '2025-01-15',
    category: 'Surnames',
  },
  {
    slug: 'korean-name-history',
    title: 'The Rich History of Korean Names',
    excerpt: 'Explore the fascinating history and evolution of Korean naming traditions from ancient times to modern day.',
    date: '2025-01-10',
    category: 'Culture',
  },
  {
    slug: 'kpop-star-names',
    title: 'K-pop Star Names and Their Meanings',
    excerpt: 'Discover the beautiful meanings behind your favorite K-pop idols\' names and what makes them special.',
    date: '2025-01-09',
    category: 'Entertainment',
  },
  {
    slug: 'traditional-vs-modern',
    title: 'Traditional vs Modern Korean Names',
    excerpt: 'Understanding the shift from traditional naming conventions to contemporary trends in Korean society.',
    date: '2025-01-08',
    category: 'Trends',
  },
  {
    slug: 'gender-neutral-names',
    title: 'Gender-Neutral Korean Names',
    excerpt: 'A comprehensive guide to Korean names that work beautifully for any gender identity.',
    date: '2025-01-07',
    category: 'Guide',
  },
  {
    slug: 'korean-surnames',
    title: 'Understanding Korean Surnames',
    excerpt: 'Learn about the most common Korean family names, their origins, and what they represent.',
    date: '2025-01-06',
    category: 'Culture',
  },
  {
    slug: 'beautiful-female-names',
    title: 'Top 20 Beautiful Korean Female Names',
    excerpt: 'A curated list of the most elegant and meaningful Korean names for girls.',
    date: '2025-01-05',
    category: 'Lists',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Korean Name Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the beauty, meaning, and cultural significance of Korean names
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            ← Back to Name Generator
          </Link>
        </div>
      </div>
    </div>
  );
}

