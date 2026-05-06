'use client';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useBucketList } from '@/hooks/useBucketList';

function SyncManager() {
  const { status } = useSession();
  const setChecked = useBucketList((s) => s.setChecked);

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/checks')
      .then((r) => r.json())
      .then((ids: unknown) => {
        if (Array.isArray(ids)) setChecked(ids as string[]);
      })
      .catch(() => {});
  }, [status, setChecked]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SyncManager />
      {children}
    </SessionProvider>
  );
}
