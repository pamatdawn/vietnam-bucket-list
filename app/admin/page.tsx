import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  const session = await requireAdmin();
  if (!session) redirect('/');

  const [totalUsers, totalChecks, itemCount, topItems] = await Promise.all([
    prisma.user.count(),
    prisma.check.count(),
    prisma.bucketItem.count(),
    prisma.check.groupBy({
      by: ['itemId'],
      _count: { itemId: true },
      orderBy: { _count: { itemId: 'desc' } },
      take: 10,
    }),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Users" value={totalUsers} color="blue" />
        <StatCard label="Total Checks" value={totalChecks} color="green" />
        <StatCard
          label="Avg Checks / User"
          value={totalUsers ? (totalChecks / totalUsers).toFixed(1) : '—'}
          color="purple"
        />
      </div>

      {itemCount === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center justify-between">
          <span className="text-yellow-800 font-medium">
            Items chưa được seed vào database.
          </span>
          <SeedButton />
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">Top Items được check nhiều nhất</h2>
          <Link href="/admin/items" className="text-sm text-blue-600 hover:underline">
            Xem tất cả →
          </Link>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Item ID</th>
              <th className="px-6 py-3 text-right">Số lượt check</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {topItems.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-gray-400">
                  Chưa có dữ liệu
                </td>
              </tr>
            ) : (
              topItems.map((item) => (
                <tr key={item.itemId} className="hover:bg-gray-50">
                  <td className="px-6 py-3 font-mono text-gray-700">{item.itemId}</td>
                  <td className="px-6 py-3 text-right font-bold text-gray-800">
                    {item._count.itemId}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number | string;
  color: 'blue' | 'green' | 'purple';
}) {
  const colors = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    purple: 'bg-purple-50 text-purple-700',
  };
  return (
    <div className={`rounded-lg p-6 ${colors[color]}`}>
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm opacity-75">{label}</div>
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
        className="bg-yellow-600 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-700 transition-colors"
      >
        Seed Items
      </button>
    </form>
  );
}
