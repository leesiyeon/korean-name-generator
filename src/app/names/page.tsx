'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { maleFirstNames, femaleFirstNames, lastNames } from '@/data/names';

type FilterOptions = {
  search: string;
  gender: 'all' | 'male' | 'female';
  style: 'all' | 'traditional' | 'modern' | 'trendy';
  theme: 'all' | 'nature' | 'wisdom' | 'strength' | 'beauty' | 'virtue';
};

export default function NamesDatabase() {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    gender: 'all',
    style: 'all',
    theme: 'all',
  });

  // Combine all names with gender info
  const allNames = useMemo(() => {
    const males = maleFirstNames.map(name => ({ ...name, gender: 'male' as const }));
    const females = femaleFirstNames.map(name => ({ ...name, gender: 'female' as const }));
    return [...males, ...females];
  }, []);

  // Filter names based on criteria
  const filteredNames = useMemo(() => {
    return allNames.filter(name => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesKorean = name.korean.includes(filters.search);
        const matchesRomanization = name.romanization.toLowerCase().includes(searchLower);
        const matchesMeaning = name.meaning.toLowerCase().includes(searchLower);
        if (!matchesKorean && !matchesRomanization && !matchesMeaning) {
          return false;
        }
      }

      // Gender filter
      if (filters.gender !== 'all' && name.gender !== filters.gender) {
        return false;
      }

      // Style filter
      if (filters.style !== 'all' && name.style !== filters.style) {
        return false;
      }

      // Theme filter
      if (filters.theme !== 'all' && name.theme !== filters.theme) {
        return false;
      }

      return true;
    });
  }, [allNames, filters]);

  // Get statistics
  const stats = useMemo(() => {
    return {
      total: allNames.length,
      male: maleFirstNames.length,
      female: femaleFirstNames.length,
      surnames: lastNames.length,
      combinations: lastNames.length * allNames.length,
      filtered: filteredNames.length,
    };
  }, [allNames, filteredNames]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 inline-block">
            ← Back to Generator
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Korean Names Database
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Explore our complete collection of {stats.total} authentic Korean first names with meanings, romanization, and cultural context.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-300">{stats.male}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Male Names</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-300">{stats.female}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Female Names</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-300">{stats.surnames}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Surnames</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600 dark:text-green-300">{stats.combinations.toLocaleString()}</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Total Combinations</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Filter Names</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by name or meaning..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gender
              </label>
              <select
                value={filters.gender}
                onChange={(e) => setFilters({ ...filters, gender: e.target.value as FilterOptions['gender'] })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Style */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Style
              </label>
              <select
                value={filters.style}
                onChange={(e) => setFilters({ ...filters, style: e.target.value as FilterOptions['style'] })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="all">All Styles</option>
                <option value="traditional">Traditional</option>
                <option value="modern">Modern</option>
                <option value="trendy">Trendy</option>
              </select>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Theme
              </label>
              <select
                value={filters.theme}
                onChange={(e) => setFilters({ ...filters, theme: e.target.value as FilterOptions['theme'] })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="all">All Themes</option>
                <option value="nature">Nature</option>
                <option value="wisdom">Wisdom</option>
                <option value="strength">Strength</option>
                <option value="beauty">Beauty</option>
                <option value="virtue">Virtue</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredNames.length} of {stats.total} names
          </div>
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredNames.map((name, index) => (
            <div
              key={`${name.korean}-${index}`}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {name.korean}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {name.romanization}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  name.gender === 'male'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300'
                }`}>
                  {name.gender === 'male' ? 'Male' : 'Female'}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{name.meaning}"
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium capitalize">
                  {name.style}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-xs font-medium capitalize">
                  {name.theme}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredNames.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No names match your search criteria
            </p>
            <button
              onClick={() => setFilters({ search: '', gender: 'all', style: 'all', theme: 'all' })}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Korean Name?</h2>
          <p className="text-lg mb-6 opacity-90">
            Use our name generator to get a personalized Korean name based on your preferences!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Try Name Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}