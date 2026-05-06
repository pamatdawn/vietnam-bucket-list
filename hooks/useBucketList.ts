'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { TOTAL_ITEMS } from '@/data/bucketlist';

interface BucketListState {
  checked: Record<string, boolean>;
  isLoaded: boolean;
  toggle: (id: string) => void;
  setChecked: (ids: string[]) => void;
  reset: () => void;
}

export const useBucketList = create<BucketListState>()(
  persist(
    (set) => ({
      checked: {},
      isLoaded: false,
      toggle: (id) =>
        set((s) => ({ checked: { ...s.checked, [id]: !s.checked[id] } })),
      setChecked: (ids) =>
        set({
          checked: Object.fromEntries(ids.map((id) => [id, true])),
          isLoaded: true,
        }),
      reset: () => set({ checked: {} }),
    }),
    {
      name: 'vietnam-bucket-2026',
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        if (state) state.isLoaded = true;
      },
    }
  )
);

export function useProgress() {
  const checked = useBucketList((s) => s.checked);
  const count = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((count / TOTAL_ITEMS) * 100);
  return { count, percent, total: TOTAL_ITEMS };
}

export function useIsChecked(id: string) {
  return useBucketList((s) => !!s.checked[id]);
}

export function useToggle() {
  const toggle = useBucketList((s) => s.toggle);
  const { data: session } = useSession();

  return (id: string) => {
    toggle(id); // optimistic — instant UI update
    if (session) {
      fetch('/api/checks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: id }),
      }).catch(() => {});
    }
  };
}

export function useLoadFromServer() {
  const setChecked = useBucketList((s) => s.setChecked);
  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/checks')
      .then((r) => r.json())
      .then((ids: unknown) => {
        if (Array.isArray(ids)) setChecked(ids as string[]);
      })
      .catch(() => {});
  }, [status, setChecked]);
}
