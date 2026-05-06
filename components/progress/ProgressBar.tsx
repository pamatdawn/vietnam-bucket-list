'use client';
import { useEffect, useState } from 'react';
import { useProgress, useBucketList } from '@/hooks/useBucketList';

const ACHIEVEMENTS = [
  { threshold: 0,   label: 'Curious Traveler',     gradient: 'from-gray-400 to-gray-500'     },
  { threshold: 1,   label: 'Vietnam Wanderer',      gradient: 'from-sky-400 to-blue-500'      },
  { threshold: 26,  label: 'True Explorer',         gradient: 'from-orange-400 to-amber-500'  },
  { threshold: 51,  label: 'Vietnam Enthusiast',    gradient: 'from-pink-500 to-rose-500'     },
  { threshold: 76,  label: 'Vietnam Legend',        gradient: 'from-purple-500 to-indigo-600' },
  { threshold: 100, label: 'Vietnam Master 🏆',     gradient: 'from-yellow-400 to-orange-400' },
] as const;

function getAchievement(percent: number) {
  return (
    [...ACHIEVEMENTS].reverse().find((a) => percent >= a.threshold) ?? ACHIEVEMENTS[0]
  );
}

export function ProgressBar() {
  const { count, percent, total } = useProgress();
  const isLoaded = useBucketList((s) => s.isLoaded);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handler = () => setShadow(window.scrollY > 160);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!isLoaded) return <div className="h-[45px] bg-white border-b" />;

  const achievement = getAchievement(percent);

  return (
    <div
      className={`sticky top-0 z-30 bg-white/96 backdrop-blur-sm border-b border-gray-200 transition-shadow duration-300 ${
        shadow ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-gray-700 truncate">
                {achievement.label}
              </span>
              <span className="text-xs text-gray-400 ml-2 flex-shrink-0 tabular-nums">
                {count} / {total} completed
              </span>
            </div>

            {/* Track */}
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${achievement.gradient} transition-all duration-700 ease-out relative overflow-hidden`}
                style={{ width: `${percent > 0 ? Math.max(percent, 2) : 0}%` }}
              >
                {percent > 4 && (
                  <span className="absolute inset-0 progress-shimmer rounded-full" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>

          {/* Percentage badge */}
          <div className="flex-shrink-0 text-lg font-extrabold text-gray-800 min-w-[3.25rem] text-right tabular-nums leading-none">
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
