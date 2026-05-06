import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin';
import { prisma } from '@/lib/prisma';
import { bucketData, CATEGORY_ORDER } from '@/data/bucketlist';

export async function POST() {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  let count = 0;
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
      count++;
    }
  }

  return NextResponse.json({ seeded: count });
}
