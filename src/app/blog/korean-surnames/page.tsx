import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Korean Surnames | Korean Name Generator Blog',
  description: 'Learn about the most common Korean family names, their origins, meanings, and what they represent in Korean culture and history.',
};

export default function KoreanSurnames() {
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
            <time>January 6, 2025</time>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Understanding Korean Surnames
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn about the most common Korean family names, their origins, and what they represent.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Importance of Korean Surnames</h2>
          <p>
            In Korean culture, surnames (성, seong) carry immense significance. They represent family lineage, clan heritage, 
            and ancestral connections spanning centuries. Unlike Western cultures where surnames are simply inherited, Korean 
            surnames are deeply tied to geographic origins, historical clans, and social structures that have shaped Korean 
            society for over a millennium.
          </p>

          <h2>The Big Three: Kim, Lee, and Park</h2>
          <p>
            Remarkably, just three surnames account for nearly half of Korea's population. This concentration is unique among 
            world cultures and reflects Korea's historical clan structures and regional distributions.
          </p>

          <h3>Kim (김) - 21.5% of the population</h3>
          <p>
            Kim is the most common Korean surname, with over 10 million people bearing this name. The name originates from 
            the word for "gold" or "metal" (金). The most prominent Kim clans include Gimhae Kim, Gyeongju Kim, and Andong Kim, 
            each tracing their lineage to different historical royal families and noble lines.
          </p>

          <p>
            The Gimhae Kim clan alone comprises about 4 million people, making it one of the largest single-surname clans 
            in the world. Members of this clan traditionally cannot marry each other, though these restrictions have been 
            relaxed in modern times.
          </p>

          <h3>Lee/Yi (이) - 14.8% of the population</h3>
          <p>
            Lee (or Yi) is the second most common surname. The character means "plum tree" (李). The most famous Lee clan 
            is the Jeonju Lee, which produced the royal family of the Joseon Dynasty (1392-1910). This royal connection 
            gives the surname particular historical prestige.
          </p>

          <p>
            Different Lee clans exist based on their ancestral origins, including Jeonju Lee, Gyeongju Lee, and Gwangsan Lee. 
            Each clan has its own genealogy books tracing family history back hundreds of years.
          </p>

          <h3>Park (박) - 8.4% of the population</h3>
          <p>
            Park comes from the Chinese character meaning "gourd" (朴), though some scholars interpret it as "simple" or 
            "unadorned." The three major Park clans are Miryang Park, Bannam Park, and Goseong Park. The Miryang Park clan, 
            like the Gimhae Kim clan, traces its lineage to ancient Silla royalty.
          </p>

          <h2>Other Major Korean Surnames</h2>

          <h3>Choi (최)</h3>
          <p>
            Meaning "pinnacle" or "best," Choi is the fourth most common surname. The major clans include Gyeongju Choi 
            and Jeonju Choi. The surname emphasizes excellence and achieving the highest position.
          </p>

          <h3>Jung/Jeong (정)</h3>
          <p>
            Jung means "virtuous" or "righteous." It's the fifth most common surname, with various clans including Yeonil Jung 
            and Dongrae Jung. The name carries strong Confucian values of morality and proper conduct.
          </p>

          <h3>Kang (강)</h3>
          <p>
            Kang means "river" or "strong," depending on the hanja used. Major clans include Jinju Kang and Gwangju Kang. 
            The surname evokes images of flowing water and natural strength.
          </p>

          <h3>Jo/Cho (조)</h3>
          <p>
            Meaning "morning" or "dynasty," Jo has notable clans like Hanyang Jo. The surname can also mean "help" or "assist" 
            depending on the character used, reflecting supportive and cooperative values.
          </p>

          <h3>Yoon/Yun (윤)</h3>
          <p>
            Yoon means "allow" or "consent" and represents harmony and approval. It's a softer-sounding surname that has 
            become increasingly popular in recent decades.
          </p>

          <h3>Jang/Chang (장)</h3>
          <p>
            Jang can mean "chapter," "long," or "eldest" depending on the hanja. It's associated with leadership and 
            beginning, making it a name with strong connotations.
          </p>

          <h3>Lim/Im (임)</h3>
          <p>
            Lim means "forest" or can also mean "to face" or "临" (to oversee). The Naju Lim clan is particularly prominent. 
            The name suggests natural abundance and protective oversight.
          </p>

          <h2>Rare and Unique Surnames</h2>
          <p>
            While the top surnames dominate, Korea has over 280 different surnames. Some rare surnames include:
          </p>

          <ul>
            <li><strong>Baek (백):</strong> White, pure - suggests clarity and purity</li>
            <li><strong>Hwang (황):</strong> Yellow, royal - associated with imperial colors</li>
            <li><strong>Ahn (안):</strong> Peace, tranquility - emphasizes harmony</li>
            <li><strong>Song (송):</strong> Pine tree - symbolizes longevity and steadfastness</li>
            <li><strong>Ryu/Yu (류/유):</strong> Willow tree - represents flexibility and grace</li>
          </ul>

          <h2>The Bon-gwan System</h2>
          <p>
            Korean surnames are further distinguished by "bon-gwan" (본관), the ancestral seat or clan origin. Two people with 
            the same surname might belong to completely different clans. For example, there are over 280 different Kim clans, 
            each originating from different regions and historical figures.
          </p>

          <p>
            Traditionally, the bon-gwan was crucial for determining marriage eligibility, as people from the same clan could 
            not marry. While this restriction has been legally abolished, many Koreans still maintain awareness of their bon-gwan 
            as part of their family identity.
          </p>

          <h2>Surname Changes and Adoption</h2>
          <p>
            Unlike many cultures, changing one's surname in Korea is extremely rare and legally difficult. Korean law generally 
            prohibits surname changes except in specific circumstances like adoption or divorce. This reflects the deep cultural 
            significance of surnames as markers of family lineage and identity.
          </p>

          <p>
            When women marry in Korea, they traditionally keep their maiden names rather than taking their husband's surname. 
            Children typically take their father's surname, though recent laws have made it possible for children to take their 
            mother's surname under certain conditions.
          </p>

          <h2>Surnames in Modern Korea</h2>
          <p>
            In contemporary Korean society, surnames continue to carry significance beyond mere identification. They're used 
            in formal situations, appear first in written names, and remain an important part of self-introduction. Many 
            Koreans can still recite their family genealogy going back several generations.
          </p>

          <p>
            However, the practical importance of clan distinctions has diminished in modern urban life. Young Koreans are 
            less likely to know their bon-gwan or trace their genealogy as extensively as previous generations, though family 
            pride in surname heritage remains strong.
          </p>

          <h2>Surnames and Korean Identity</h2>
          <p>
            For Koreans living abroad or those of Korean descent, surnames often serve as crucial links to heritage and 
            cultural identity. The surname connects individuals to centuries of family history and Korean cultural tradition, 
            even when separated by geography or generations.
          </p>

          <h2>Choosing a Korean Surname</h2>
          <p>
            If you're selecting a Korean surname for yourself or a character, consider:
          </p>

          <ul>
            <li>The meaning and what it represents</li>
            <li>How it sounds with your chosen given name</li>
            <li>Its historical and cultural significance</li>
            <li>Common or rare – both have their appeal</li>
            <li>Personal connection to the meaning or sound</li>
          </ul>

          <h2>Fun Facts About Korean Surnames</h2>
          <ul>
            <li>Korea has one of the lowest surname diversity rates in the world</li>
            <li>Some surnames are so rare that only a few dozen people have them</li>
            <li>The surname "Kim" in Korean is not related to the English name "Kim" – they're completely different origins</li>
            <li>North and South Korea share the same surname system and major clans</li>
            <li>Some Korean surnames are only one syllable, making them among the shortest surnames globally</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Korean surnames are far more than simple family names – they're repositories of history, markers of identity, 
            and connections to centuries of heritage. Understanding Korean surnames provides insight into Korean culture, 
            social structures, and the importance Koreans place on family and lineage. Whether you're researching your own 
            heritage, choosing a Korean name, or simply curious about Korean culture, surnames offer a fascinating window 
            into Korea's past and present.
          </p>

          <p>
            Our Korean Name Generator includes 30 of the most common Korean surnames, allowing you to create authentic 
            name combinations with full cultural context and meanings. Explore the rich world of Korean names and find 
            the perfect combination that resonates with you!
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

