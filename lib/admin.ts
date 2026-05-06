import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) throw new Error('ADMIN_EMAIL is not set');
  if (!session?.user?.email || session.user.email !== adminEmail) return null;

  return session;
}
