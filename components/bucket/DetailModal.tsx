'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { BucketItem, categoryConfig } from '@/data/bucketlist';
import { useIsChecked, useToggle } from '@/hooks/useBucketList';

const regionLabel: Record<string, string> = {
  north:   '🧭 North Vietnam',
  central: '🧭 Central Vietnam',
  south:   '🧭 South Vietnam',
  all:     '🧭 All Vietnam',
};

interface Props {
  item: BucketItem | null;
  open: boolean;
  onClose: () => void;
}

export function DetailModal({ item, open, onClose }: Props) {
  const isChecked = useIsChecked(item?.id ?? '');
  const toggle = useToggle();
  const cfg = item ? categoryConfig[item.category] : null;

  if (!item || !cfg) return null;

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="dialog-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        {/* Content panel */}
        <Dialog.Content
          className="dialog-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden focus:outline-none"
        >
          {/* Coloured header with emoji */}
          <div className={`${cfg.headerBg} h-44 flex items-center justify-center relative`}>
            <span className="text-8xl drop-shadow-xl animate-float">{item.emoji}</span>
            <Dialog.Close
              aria-label="Close"
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-150 active:scale-90"
            >
              <X size={16} />
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${cfg.badgeBg} ${cfg.badgeText}`}>
                {cfg.label}
              </span>
              <span className="text-xs text-gray-400">
                {regionLabel[item.region]}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                toggle(item.id);
                onClose();
              }}
              className={[
                'w-full py-3 rounded-xl font-bold text-sm',
                'transition-all duration-200 active:scale-95',
                isChecked
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : `${cfg.headerBg} text-white hover:opacity-90`,
              ].join(' ')}
            >
              {isChecked
                ? '✓ Done!  Click to remove'
                : `Mark "${item.name}" as Done ✓`}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
