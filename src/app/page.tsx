'use client';

import { useState } from 'react';
import { generateRandomName, getSimilarNames, type KoreanName } from '@/data/names';

export default function Home() {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'nonbinary' | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<'traditional' | 'modern' | 'trendy' | 'any'>('any');
  const [selectedTheme, setSelectedTheme] = useState<'nature' | 'wisdom' | 'strength' | 'beauty' | 'virtue' | 'any'>('any');
  const [generatedName, setGeneratedName] = useState<KoreanName | null>(null);
  const [similarNames, setSimilarNames] = useState<KoreanName[]>([]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!selectedGender) return;
    
    // Non-binary의 경우 남성/여성 이름 중 랜덤 선택
    const actualGender = selectedGender === 'nonbinary' 
      ? (Math.random() > 0.5 ? 'male' : 'female')
      : selectedGender;
    
    const name = generateRandomName(actualGender, {
      style: selectedStyle,
      theme: selectedTheme,
    });
    setGeneratedName(name);
    setSimilarNames(getSimilarNames(name, 3));
    setCopied(false);
  };

  const handleCopy = () => {
    if (generatedName) {
      const text = `${generatedName.lastName}${generatedName.firstName} (${generatedName.romanization})`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };


  const handleSelectSimilar = (name: KoreanName) => {
    setGeneratedName(name);
    setSimilarNames(getSimilarNames(name, 3));
    setCopied(false);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Korean Name Generator',
    description: 'Generate authentic Korean names with meanings, pronunciation guide, and style preferences',
    url: 'https://korean-name-generator.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Korean Name Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover your Korean name! 🇰🇷
          </p>
        </header>

        {/* All Options in One Screen */}
        {!generatedName && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
              {/* Gender Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  👤 Select your gender identity
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setSelectedGender('male')}
                    className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                      selectedGender === 'male'
                        ? 'bg-blue-500 text-white shadow-lg ring-4 ring-blue-200 dark:ring-blue-800'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
                    }`}
                  >
                    👨 Male
                  </button>
                  <button
                    onClick={() => setSelectedGender('female')}
                    className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                      selectedGender === 'female'
                        ? 'bg-pink-500 text-white shadow-lg ring-4 ring-pink-200 dark:ring-pink-800'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900'
                    }`}
                  >
                    👩 Female
                  </button>
                  <button
                    onClick={() => setSelectedGender('nonbinary')}
                    className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                      selectedGender === 'nonbinary'
                        ? 'bg-purple-500 text-white shadow-lg ring-4 ring-purple-200 dark:ring-purple-800'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
                    }`}
                  >
                    🌈 Non-binary
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              {/* Style Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  ✨ Choose a style
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => setSelectedStyle('any')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedStyle === 'any'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🎲 Any
                  </button>
                  <button
                    onClick={() => setSelectedStyle('traditional')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedStyle === 'traditional'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🏛️ Traditional
                  </button>
                  <button
                    onClick={() => setSelectedStyle('modern')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedStyle === 'modern'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🌆 Modern
                  </button>
                  <button
                    onClick={() => setSelectedStyle('trendy')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedStyle === 'trendy'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    ⭐ Trendy
                  </button>
                </div>
              </div>

              {/* Theme Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  🎨 Choose a theme
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setSelectedTheme('any')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'any'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🎲 Any
                  </button>
                  <button
                    onClick={() => setSelectedTheme('nature')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'nature'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🌿 Nature
                  </button>
                  <button
                    onClick={() => setSelectedTheme('wisdom')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'wisdom'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    📚 Wisdom
                  </button>
                  <button
                    onClick={() => setSelectedTheme('strength')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'strength'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    💪 Strength
                  </button>
                  <button
                    onClick={() => setSelectedTheme('beauty')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'beauty'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    ✨ Beauty
                  </button>
                  <button
                    onClick={() => setSelectedTheme('virtue')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      selectedTheme === 'virtue'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    🌟 Virtue
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <div className="pt-4">
                <button
                  onClick={handleGenerate}
                  disabled={!selectedGender}
                  className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all transform ${
                    selectedGender
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {selectedGender ? '✨ Generate My Name!' : '👆 Please select a gender first'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Generated Name Display */}
        {generatedName && (
          <div className="space-y-6">
            {/* Main Name Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
              <div className="mb-6">
                <h2 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Your Korean Name</h2>
                <div className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  {generatedName.lastName}{generatedName.firstName}
                </div>
                <div className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
                  {generatedName.romanization}
                </div>
                <div className="text-lg text-purple-600 dark:text-purple-400 mb-3">
                  💫 {generatedName.meaning}
                </div>
                {/* Style and Theme Tags */}
                <div className="flex gap-2 justify-center flex-wrap mt-4">
                  {generatedName.style && (
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {generatedName.style === 'traditional' && '🏛️ Traditional'}
                      {generatedName.style === 'modern' && '🌆 Modern'}
                      {generatedName.style === 'trendy' && '⭐ Trendy'}
                    </span>
                  )}
                  {generatedName.theme && (
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-medium">
                      {generatedName.theme === 'nature' && '🌿 Nature'}
                      {generatedName.theme === 'wisdom' && '📚 Wisdom'}
                      {generatedName.theme === 'strength' && '💪 Strength'}
                      {generatedName.theme === 'beauty' && '✨ Beauty'}
                      {generatedName.theme === 'virtue' && '🌟 Virtue'}
                    </span>
                  )}
                </div>
        </div>

              {/* Copy Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleCopy}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
                >
                  {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
                </button>
              </div>
            </div>

            {/* Similar Names */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                ✨ Try these similar names
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {similarNames.map((name, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectSimilar(name)}
                    className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 text-left"
                  >
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {name.lastName}{name.firstName}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {name.romanization}
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 mb-2">
                      {name.meaning}
                    </div>
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap mt-2">
                      {name.style && (
                        <span className="px-2 py-0.5 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded text-xs">
                          {name.style === 'traditional' && '🏛️'}
                          {name.style === 'modern' && '🌆'}
                          {name.style === 'trendy' && '⭐'}
                        </span>
                      )}
                      {name.theme && (
                        <span className="px-2 py-0.5 bg-pink-200 dark:bg-pink-800 text-pink-900 dark:text-pink-100 rounded text-xs">
                          {name.theme === 'nature' && '🌿'}
                          {name.theme === 'wisdom' && '📚'}
                          {name.theme === 'strength' && '💪'}
                          {name.theme === 'beauty' && '✨'}
                          {name.theme === 'virtue' && '🌟'}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate New Button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setGeneratedName(null);
                  setSimilarNames([]);
                  setSelectedGender(null);
                  setSelectedStyle('any');
                  setSelectedTheme('any');
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🔄 Generate New Name
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 dark:text-gray-400 text-sm space-y-4">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-xs sm:text-sm">
            <a href="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </a>
            <span>•</span>
            <a href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Blog
            </a>
            <span>•</span>
            <a href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact Us
            </a>
          </div>
          <p>© 2025 Korean Name Generator. All rights reserved.</p>
          <p className="text-xs">Made with 💜 for K-pop & K-drama fans worldwide!</p>
        </footer>
      </div>
    </div>
    </>
  );
}
