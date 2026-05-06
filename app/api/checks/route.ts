import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json([]);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { checks: { select: { itemId: true } } },
  });

  return NextResponse.json(user?.checks.map((c) => c.itemId) ?? []);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { itemId } = body as { itemId?: string };
  if (!itemId || typeof itemId !== 'string') {
    return NextResponse.json({ error: 'Invalid itemId' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const existing = await prisma.check.findUnique({
    where: { userId_itemId: { userId: user.id, itemId } },
  });

  if (existing) {
    await prisma.check.delete({
      where: { userId_itemId: { userId: user.id, itemId } },
    });
    return NextResponse.json({ checked: false });
  }

  await prisma.check.create({ data: { userId: user.id, itemId } });
  return NextResponse.json({ checked: true });
}
