import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin';
import Link from 'next/link';

export const metadata = { title: 'Admin — Vietnam Bucket List' };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  if (!session) redirect('/');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white px-6 py-3 flex items-center gap-6">
        <span className="font-bold text-lg tracking-tight">🛠️ Admin</span>
        <div className="flex gap-4 ml-4">
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/users">Users</NavLink>
          <NavLink href="/admin/items">Items</NavLink>
        </div>
        <div className="ml-auto flex items-center gap-3 text-sm text-gray-400">
          <span>{session.user?.email}</span>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            ← Back to site
          </Link>
        </div>
      </nav>
      <main className="p-8 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      {children}
    </Link>
  );
}
