import { Route } from '@/data/bucketlist';

interface Props {
  routes: Route[];
}

const colorMap = {
  blue: {
    card:   'bg-white border border-blue-100',
    badge:  'bg-blue-600 text-white',
    title:  'text-blue-700',
    dot:    'bg-blue-500',
    line:   'bg-blue-200',
  },
  orange: {
    card:   'bg-white border border-orange-100',
    badge:  'bg-orange-500 text-white',
    title:  'text-orange-700',
    dot:    'bg-orange-400',
    line:   'bg-orange-200',
  },
  red: {
    card:   'bg-white border border-red-100',
    badge:  'bg-red-600 text-white',
    title:  'text-red-700',
    dot:    'bg-red-500',
    line:   'bg-red-200',
  },
} as const;

export function RouteCard({ routes }: Props) {
  return (
    <section>
      <div className="bg-indigo-600 text-white px-5 py-3 rounded-t-2xl flex items-center gap-2.5">
        <span className="text-xl" aria-hidden="true">🗺️</span>
        <h2 className="font-extrabold text-sm tracking-widest uppercase flex-1">
          Perfect Travel Routes
        </h2>
        <span className="text-xs font-semibold opacity-70 bg-white/20 px-2 py-0.5 rounded-full">
          {routes.length}
        </span>
      </div>

      <div className="bg-indigo-50 p-4 rounded-b-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {routes.map((route) => {
            const c = colorMap[route.color];
            return (
              <div
                key={route.id}
                className={`${c.card} rounded-xl p-4 space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className={`font-bold text-sm ${c.title}`}>{route.name}</h3>
                  <span className={`text-xs ${c.badge} px-2 py-0.5 rounded-full font-semibold flex-shrink-0`}>
                    {route.duration}
                  </span>
                </div>

                {/* Timeline */}
                <div>
                  {route.stops.map((stop, i) => (
                    <div key={stop} className="flex gap-2.5">
                      <div className="flex flex-col items-center pt-1 flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                        {i < route.stops.length - 1 && (
                          <div className={`w-0.5 h-5 ${c.line} mt-0.5`} />
                        )}
                      </div>
                      <span className="text-xs text-gray-600 pb-3 leading-tight">{stop}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
