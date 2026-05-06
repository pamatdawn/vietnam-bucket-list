import { tips } from '@/data/bucketlist';

export function InsiderTips() {
  return (
    <section>
      <div className="bg-yellow-500 text-white px-5 py-3 rounded-t-2xl flex items-center gap-2.5">
        <span className="text-xl" aria-hidden="true">💡</span>
        <h2 className="font-extrabold text-sm tracking-widest uppercase flex-1">
          Insider Tips — Save Your Trip
        </h2>
        <span className="text-xs font-semibold opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
          {tips.length}
        </span>
      </div>

      <div className="bg-yellow-50 p-4 rounded-b-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-yellow-100 hover:shadow-sm hover:border-yellow-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0 leading-none mt-0.5">{tip.emoji}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
