import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin';
import { prisma } from '@/lib/prisma';
import ItemsTable from './ItemsTable';

export default async function AdminItems() {
  const session = await requireAdmin();
  if (!session) redirect('/');

  const [items, checkCounts] = await Promise.all([
    prisma.bucketItem.findMany({ orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }] }),
    prisma.check.groupBy({
      by: ['itemId'],
      _count: { itemId: true },
    }),
  ]);

  const countMap = Object.fromEntries(checkCounts.map((c) => [c.itemId, c._count.itemId]));
  const itemsWithCounts = items.map((item) => ({ ...item, checkCount: countMap[item.id] ?? 0 }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Items <span className="text-gray-400 font-normal text-lg">({items.length})</span>
        </h1>
        {items.length === 0 && <SeedButton />}
      </div>

      {items.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center text-yellow-700">
          Items chưa được seed. Nhấn &quot;Seed từ file&quot; để import dữ liệu.
        </div>
      ) : (
        <ItemsTable items={itemsWithCounts} />
      )}
    </div>
  );
}

function SeedButton() {
  async function seed() {
    'use server';
    const { prisma } = await import('@/lib/prisma');
    const { bucketData, CATEGORY_ORDER } = await import('@/data/bucketlist');
    for (const category of CATEGORY_ORDER) {
      const items = bucketData[category];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await prisma.bucketItem.upsert({
          where: { id: item.id },
          update: {},
          create: {
            id: item.id,
            category: item.category,
            name: item.name,
            description: item.description,
            region: item.region,
            tags: item.tags,
            emoji: item.emoji,
            imageKeyword: item.imageKeyword,
            sortOrder: i,
          },
        });
      }
    }
  }
  return (
    <form action={seed}>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
      >
        Seed từ file
      </button>
    </form>
  );
}
