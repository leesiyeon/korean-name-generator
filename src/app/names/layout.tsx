import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Korean Names Database - Complete Collection of 114 Korean Names | Korean Name Generator',
  description: 'Browse our complete database of 114 authentic Korean first names with meanings, romanization, and cultural context. Search by gender, style, and theme. Over 3,400 possible name combinations with 30 Korean surnames.',
  keywords: [
    'Korean names database',
    'Korean names list',
    'all Korean names',
    'Korean name meanings',
    'Korean names with meanings',
    'Korean boy names list',
    'Korean girl names list',
    'Korean name search',
    'Korean name finder',
    'traditional Korean names',
    'modern Korean names',
    'trendy Korean names',
    'Korean names by theme',
    'nature Korean names',
    'wisdom Korean names',
    'Korean name meanings database',
    'complete Korean names',
    'Korean first names',
    'Korean given names',
    'Korean name romanization',
  ],
  openGraph: {
    title: 'Korean Names Database - 114 Authentic Names with Meanings',
    description: 'Explore our complete collection of Korean names. Search by gender, style, and theme. Find the perfect Korean name with cultural context and meanings.',
    type: 'website',
  },
};

export default function NamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}