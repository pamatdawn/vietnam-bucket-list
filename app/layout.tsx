import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vietnam Ultimate Bucket List 2026',
  description:
    'Your interactive guide to the best destinations, food, and experiences in Vietnam. Track your progress through the ultimate Vietnam bucket list.',
  keywords: [
    'Vietnam travel',
    'bucket list',
    'Ha Long Bay',
    'Hoi An',
    'Vietnamese food',
    'Vietnam 2026',
  ],
  openGraph: {
    title: 'Vietnam Ultimate Bucket List 2026',
    description: 'Your interactive travel tracker for the best of Vietnam',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={beVietnam.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
