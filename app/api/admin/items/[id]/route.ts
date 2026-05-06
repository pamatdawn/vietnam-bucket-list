import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await requireAdmin();
  if (!session) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json();
  const { name, description, emoji } = body as {
    name?: string;
    description?: string;
    emoji?: string;
  };

  if (!name || !description || !emoji) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const item = await prisma.bucketItem.update({
    where: { id: params.id },
    data: { name, description, emoji },
  });

  return NextResponse.json(item);
}
