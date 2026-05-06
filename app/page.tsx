import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgressBar } from '@/components/progress/ProgressBar';
import { CategorySection } from '@/components/bucket/CategorySection';
import { RouteCard } from '@/components/routes/RouteCard';
import { InsiderTips } from '@/components/tips/InsiderTips';
import { bucketData, CATEGORY_ORDER, routes } from '@/data/bucketlist';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <ProgressBar />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {CATEGORY_ORDER.map((category) => (
          <CategorySection
            key={category}
            category={category}
            items={bucketData[category]}
          />
        ))}
        <RouteCard routes={routes} />
        <InsiderTips />
      </div>
      <Footer />
    </main>
  );
}
