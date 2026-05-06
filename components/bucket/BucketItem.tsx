'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BucketItem as BucketItemType } from '@/data/bucketlist';
import { useIsChecked, useToggle } from '@/hooks/useBucketList';
import { DetailModal } from './DetailModal';

interface Props {
  item: BucketItemType;
}

export function BucketItem({ item }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ripple, setRipple] = useState(false);
  const isChecked = useIsChecked(item.id);
  const toggle = useToggle();

  function handleCheck(e: React.MouseEvent) {
    e.stopPropagation();
    toggle(item.id);
    if (!isChecked) {
      setRipple(true);
      setTimeout(() => setRipple(false), 500);
    }
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details for ${item.name}`}
        onClick={() => setModalOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
        className={[
          'group flex items-center gap-3 p-3 rounded-xl border cursor-pointer',
          'transition-all duration-200 ease-out select-none',
          ripple ? 'ripple-green' : '',
          isChecked
            ? 'bg-green-50 border-green-200 opacity-75'
            : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md hover:scale-[1.015] hover:-translate-y-0.5',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* Checkbox */}
        <button
          aria-label={isChecked ? `Uncheck ${item.name}` : `Check ${item.name}`}
          onClick={handleCheck}
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded"
        >
          <div
            className={[
              'w-5 h-5 rounded border-2 flex items-center justify-center',
              'transition-all duration-200',
              isChecked
                ? 'bg-green-500 border-green-500 scale-110 shadow-sm shadow-green-300'
                : 'border-gray-300 group-hover:border-gray-400 hover:border-green-400 hover:bg-green-50',
            ].join(' ')}
          >
            {isChecked && (
              <svg
                className="w-3 h-3 text-white check-icon-enter"
                fill="none"
                viewBox="0 0 12 12"
                aria-hidden="true"
              >
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </button>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-base leading-none">{item.emoji}</span>
            <span
              className={[
                'font-semibold text-sm truncate transition-colors duration-200',
                isChecked
                  ? 'line-through text-gray-400'
                  : 'text-gray-800 group-hover:text-gray-950',
              ].join(' ')}
            >
              {item.name}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <ChevronRight
          size={15}
          className="flex-shrink-0 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all duration-200"
          aria-hidden="true"
        />
      </div>

      <DetailModal item={item} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
