import { BucketItem as BucketItemType, Category, categoryConfig } from '@/data/bucketlist';
import { BucketItem } from './BucketItem';

interface Props {
  category: Category;
  items: BucketItemType[];
}

export function CategorySection({ category, items }: Props) {
  const cfg = categoryConfig[category];

  return (
    <section>
      {/* Section header */}
      <div
        className={`${cfg.headerBg} text-white px-5 py-3 rounded-t-2xl flex items-center gap-2.5`}
      >
        <span className="text-xl" aria-hidden="true">{cfg.emoji}</span>
        <h2 className="font-extrabold text-sm tracking-widest uppercase flex-1 leading-none">
          {cfg.label}
        </h2>
        <span className="text-xs font-semibold opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
          {items.length}
        </span>
      </div>

      {/* Items grid */}
      <div className={`${cfg.sectionBg} p-4 rounded-b-2xl`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <BucketItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
