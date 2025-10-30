import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Korean Name Pronunciation Guide: How to Say Korean Names Correctly | Korean Name Generator',
  description: 'Learn how to pronounce Korean names correctly with our comprehensive guide. Master hangul sounds, romanization systems, and common pronunciation mistakes.',
  keywords: ['Korean pronunciation', 'Korean name pronunciation', 'how to pronounce Korean names', 'hangul pronunciation', 'Korean romanization'],
};

export default function KoreanNamePronunciation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 my-8">
        <Link href="/blog" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full">
              Language Guide
            </span>
            <time>January 17, 2025</time>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Korean Name Pronunciation Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master the art of pronouncing Korean names correctly with our comprehensive guide.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Understanding Korean Sounds</h2>
          <p>
            Korean pronunciation follows consistent rules once you understand the basics. Unlike English, Korean is
            phonetically regular—each letter represents one sound, making pronunciation predictable once you learn
            the system.
          </p>

          <h2>Basic Vowel Sounds</h2>
          <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <h3 className="mt-0">Simple Vowels</h3>
            <ul className="space-y-2 mb-0">
              <li><strong>ㅏ (a)</strong> - like "ah" in "father"</li>
              <li><strong>ㅓ (eo)</strong> - like "uh" in "son"</li>
              <li><strong>ㅗ (o)</strong> - like "oh" in "go"</li>
              <li><strong>ㅜ (u)</strong> - like "oo" in "food"</li>
              <li><strong>ㅡ (eu)</strong> - like "oo" but with lips spread (unique Korean sound)</li>
              <li><strong>ㅣ (i)</strong> - like "ee" in "see"</li>
            </ul>
          </div>

          <h2>Common Consonants in Names</h2>
          <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <ul className="space-y-2 mb-0">
              <li><strong>ㄱ (g/k)</strong> - like "g" initially, "k" at end: Kim (김)</li>
              <li><strong>ㄴ (n)</strong> - like English "n": Min (민)</li>
              <li><strong>ㄷ (d/t)</strong> - like "d" or "t": Do (도)</li>
              <li><strong>ㄹ (r/l)</strong> - between "r" and "l": Lee (이)</li>
              <li><strong>ㅁ (m)</strong> - like English "m": Min (민)</li>
              <li><strong>ㅂ (b/p)</strong> - like "b" or "p": Park (박)</li>
              <li><strong>ㅅ (s)</strong> - like English "s": Seo (서)</li>
              <li><strong>ㅈ (j)</strong> - like "j" in "judge": Jun (준)</li>
              <li><strong>ㅎ (h)</strong> - like English "h": Han (한)</li>
            </ul>
          </div>

          <h2>Pronouncing Common Names</h2>

          <h3>Popular Male Names</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">Min-jun (민준)</p>
              <p className="text-sm">Pronunciation: "Min-joon"</p>
              <p className="text-sm italic">Tips: "Min" rhymes with "seen," "jun" like "June"</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">Seo-jun (서준)</p>
              <p className="text-sm">Pronunciation: "Suh-joon"</p>
              <p className="text-sm italic">Tips: "Seo" sounds like "sir" without the "r"</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">Ji-ho (지호)</p>
              <p className="text-sm">Pronunciation: "Jee-ho"</p>
              <p className="text-sm italic">Tips: "Ji" like "jeans," "ho" like "ho ho ho"</p>
            </div>
          </div>

          <h3>Popular Female Names</h3>
          <div className="space-y-4 mt-6">
            <div className="border-l-4 border-pink-500 pl-4">
              <p className="font-semibold">Seo-yeon (서연)</p>
              <p className="text-sm">Pronunciation: "Suh-yun"</p>
              <p className="text-sm italic">Tips: "Yeon" sounds like "yawn" but shorter</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <p className="font-semibold">Ji-woo (지우)</p>
              <p className="text-sm">Pronunciation: "Jee-woo"</p>
              <p className="text-sm italic">Tips: "Woo" like "woo-hoo!"</p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <p className="font-semibold">Ha-yoon (하윤)</p>
              <p className="text-sm">Pronunciation: "Hah-yoon"</p>
              <p className="text-sm italic">Tips: "Ha" like "ha ha," "yoon" like "moon"</p>
            </div>
          </div>

          <h2>Understanding Romanization</h2>
          <p>
            Korean names can be romanized in different ways, which causes confusion:
          </p>

          <h3>Revised Romanization (Official)</h3>
          <ul>
            <li>박 = Bak</li>
            <li>이 = I or Yi</li>
            <li>김 = Gim</li>
          </ul>

          <h3>McCune-Reischauer (Traditional)</h3>
          <ul>
            <li>박 = Pak</li>
            <li>이 = Yi or I</li>
            <li>김 = Kim</li>
          </ul>

          <h3>Personal Preference</h3>
          <ul>
            <li>박 = Park (most common)</li>
            <li>이 = Lee, Yi, Rhee, or Ri</li>
            <li>김 = Kim (standard)</li>
          </ul>

          <h2>Common Pronunciation Mistakes</h2>

          <div className="bg-red-50 dark:bg-gray-700 rounded-xl p-6 my-6">
            <h3 className="mt-0">Mistake #1: English "R" Sound</h3>
            <p className="text-sm">
              ❌ Wrong: "Lee" with English "L"<br/>
              ✓ Correct: "Yi" or "Ee" (이 has no "L" sound)
            </p>

            <h3>Mistake #2: Stressing Syllables</h3>
            <p className="text-sm">
              ❌ Wrong: "min-JUN" (stressing second syllable)<br/>
              ✓ Correct: "MIN-jun" (equal stress or slightly first)
            </p>

            <h3>Mistake #3: Adding Extra Vowels</h3>
            <p className="text-sm">
              ❌ Wrong: "Jee-soo-uh"<br/>
              ✓ Correct: "Jee-soo" (지수)
            </p>

            <h3>Mistake #4: Wrong Vowel Sounds</h3>
            <p className="text-sm">
              ❌ Wrong: "Soo-jin" like "Sue"<br/>
              ✓ Correct: "Soo-jin" like "food" (수진)
            </p>
          </div>

          <h2>The "Eu" Sound</h2>
          <p>
            The hardest sound for English speakers is "ㅡ" (eu). It doesn't exist in English:
          </p>
          <ul>
            <li>Say "oo" like in "food"</li>
            <li>Keep your lips spread flat (not rounded)</li>
            <li>The sound is between "oo" and "uh"</li>
          </ul>
          <p>
            Examples: Eun-ji (은지), Seung-min (승민), Hyun-woo (현우)
          </p>

          <h2>Syllable Rhythm</h2>
          <p>
            Korean names typically have even rhythm across syllables:
          </p>
          <ul>
            <li><strong>Two syllables:</strong> MIN-jun, SEO-yeon (equal stress)</li>
            <li><strong>Three syllables (rare):</strong> Even rhythm across all three</li>
          </ul>

          <h2>Final Consonants</h2>
          <p>
            Korean syllables can end with consonants, but they're pronounced softly:
          </p>
          <ul>
            <li><strong>김 (Kim):</strong> The "m" is clear</li>
            <li><strong>박 (Park):</strong> The "k" is barely audible, like a stop</li>
            <li><strong>준 (Jun):</strong> The "n" is nasal</li>
          </ul>

          <h2>Practice Tips</h2>

          <h3>1. Listen to Native Speakers</h3>
          <p>
            Watch K-dramas, K-pop content, and Korean news. Pay attention to how names are pronounced naturally.
          </p>

          <h3>2. Break It Down</h3>
          <p>
            Practice each syllable separately before combining: "Min" then "jun" then "Min-jun."
          </p>

          <h3>3. Record Yourself</h3>
          <p>
            Record your pronunciation and compare it to native speakers. This helps identify mistakes.
          </p>

          <h3>4. Practice Common Combinations</h3>
          <p>
            Focus on frequently used syllables: jun, min, seo, yeon, woo, ji, hee, eun.
          </p>

          <h2>Respect and Cultural Sensitivity</h2>
          <p>
            Making an effort to pronounce names correctly shows respect. If you're unsure:
          </p>
          <ul>
            <li>Ask the person how they prefer their name pronounced</li>
            <li>Practice their specific name, not just general rules</li>
            <li>Accept correction graciously</li>
            <li>Keep trying—effort matters more than perfection</li>
          </ul>

          <h2>Name Order</h2>
          <p>
            Remember that Korean names traditionally put family name first:
          </p>
          <ul>
            <li><strong>Korean order:</strong> Kim Min-jun (김민준)</li>
            <li><strong>Western order:</strong> Min-jun Kim</li>
          </ul>
          <p>
            In international contexts, many Koreans adapt to Western order, so check their preference.
          </p>

          <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Practice with Our Generator
            </h3>
            <p className="text-sm mb-4">
              Use our Korean Name Generator to see names with romanization. Each generated name includes pronunciation
              guidance to help you learn!
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all"
            >
              Generate Names to Practice →
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            Pronouncing Korean names correctly takes practice, but it's a valuable skill that shows respect and cultural
            awareness. Start with the basics—consistent vowel sounds and gentle final consonants—and gradually improve
            through listening and practice. Remember, Koreans appreciate any effort to pronounce their names correctly,
            even if you're not perfect. The attempt itself demonstrates respect and interest in Korean culture.
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
