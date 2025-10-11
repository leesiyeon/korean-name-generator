import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Rich History of Korean Names | Korean Name Generator Blog',
  description: 'Explore the fascinating history and evolution of Korean naming traditions from ancient times to modern day. Learn about the cultural significance and historical context.',
};

export default function KoreanNameHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <Link href="/blog" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 inline-block">
          ← Back to Blog
        </Link>
        
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
              Culture
            </span>
            <time>January 10, 2025</time>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            The Rich History of Korean Names
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore the fascinating history and evolution of Korean naming traditions from ancient times to modern day.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Ancient Origins</h2>
          <p>
            Korean naming conventions have a rich history spanning over 2,000 years. The practice of using family names (surnames) 
            began during the Three Kingdoms period (57 BCE – 668 CE), influenced by Chinese naming traditions. However, Korean names 
            developed their own unique characteristics that distinguish them from their Chinese counterparts.
          </p>

          <p>
            During the Goryeo Dynasty (918-1392), the use of surnames became more widespread among the aristocracy. The most common 
            surnames today – Kim (김), Lee (이), and Park (박) – trace their origins to this period and remain the most popular 
            family names in modern Korea.
          </p>

          <h2>The Structure of Korean Names</h2>
          <p>
            Traditional Korean names follow a specific structure: the family name comes first, followed by a two-syllable given name. 
            For example, in the name "Kim Min-jun" (김민준), "Kim" is the family name, and "Min-jun" is the given name. This order 
            is opposite to Western naming conventions, where the given name typically comes first.
          </p>

          <p>
            The given name usually consists of two Sino-Korean characters (hanja), each carrying specific meanings. Parents carefully 
            select these characters to embody their wishes and hopes for their child's future. Common themes include wisdom, beauty, 
            virtue, and success.
          </p>

          <h2>Generational Names</h2>
          <p>
            Many Korean families follow a tradition called "Dollimja" (돌림자) or "Hangnyeol" (항렬), where one syllable of the 
            given name is shared among all siblings or cousins of the same generation. This practice helps identify family relationships 
            and generation within the clan structure. While less common today, many families still honor this tradition.
          </p>

          <h2>Gender-Specific Naming Patterns</h2>
          <p>
            Historically, Korean names often followed gender-specific patterns. Female names frequently incorporated characters meaning 
            "beautiful," "graceful," or "elegant," while male names emphasized strength, wisdom, or achievement. Common endings for 
            female names included characters like "mi" (미, beauty), "hee" (희, joy), or "sook" (숙, pure), while male names often 
            ended with "jun" (준, handsome), "ho" (호, tiger), or "woo" (우, universe).
          </p>

          <h2>Modern Evolution</h2>
          <p>
            The late 20th century brought significant changes to Korean naming practices. The democratization of Korean society led 
            to more creative and diverse naming choices. Parents began to prioritize the sound and feel of names over traditional 
            hanja meanings, leading to the rise of native Korean names (순우리말 이름) without Chinese character equivalents.
          </p>

          <p>
            Contemporary Korean names show influence from global trends while maintaining cultural roots. Single-syllable given names, 
            once rare, have become more popular. Names like "Ha-neul" (하늘, sky) and "Byeol" (별, star) represent this trend toward 
            pure Korean words and nature-inspired names.
          </p>

          <h2>Legal Regulations</h2>
          <p>
            The Korean Family Registry Law regulates name registration, requiring that names be written in hangul (Korean script) 
            or registered hanja characters. In 1991, the government relaxed restrictions on hanja usage, allowing parents to choose 
            from an expanded list of characters for their children's names.
          </p>

          <h2>Cultural Significance</h2>
          <p>
            In Korean culture, names are more than mere identifiers – they carry deep meaning and reflect family values, aspirations, 
            and heritage. The careful selection of a name is considered one of the first and most important gifts parents give to 
            their child. Many families consult with naming specialists or use traditional fortune-telling methods to choose auspicious 
            names.
          </p>

          <p>
            Understanding the history of Korean names provides insight into Korean culture, family values, and social evolution. 
            Whether you're choosing a Korean name for yourself or simply interested in Korean culture, appreciating this rich 
            historical context enriches the experience.
          </p>

          <h2>Conclusion</h2>
          <p>
            From ancient kingdoms to modern Seoul, Korean names have evolved while maintaining their cultural essence. Today's Korean 
            names beautifully blend tradition with contemporary creativity, reflecting Korea's dynamic culture and global influence. 
            Whether traditional or modern, each Korean name carries a story and meaning that connects individuals to their heritage 
            and aspirations for the future.
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

