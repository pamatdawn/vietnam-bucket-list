import { AuthButton } from '@/components/auth/AuthButton';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#c8102e] via-[#a50d25] to-[#6b0a1c] text-white">
      {/* Decorative background stars */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10" aria-hidden="true">
        <span className="absolute top-5 right-12 text-8xl animate-float">⭐</span>
        <span className="absolute top-16 right-36 text-4xl animate-float" style={{ animationDelay: '1.2s' }}>⭐</span>
        <span className="absolute bottom-3 left-8 text-5xl animate-float" style={{ animationDelay: '0.6s' }}>⭐</span>
        <span className="absolute bottom-8 right-20 text-3xl animate-float" style={{ animationDelay: '1.8s' }}>⭐</span>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-4 pb-9">
        {/* Auth button */}
        <div className="flex justify-end mb-5">
          <AuthButton />
        </div>

        {/* Title block */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-4">
            <span className="text-5xl sm:text-6xl drop-shadow-lg animate-float">🇻🇳</span>
            <div className="text-left">
              <p className="text-xs font-bold tracking-[0.45em] opacity-70 uppercase mb-0.5">
                Ultimate
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none drop-shadow">
                VIETNAM
              </h1>
              <p className="text-sm sm:text-base font-bold tracking-[0.3em] opacity-80 mt-0.5">
                BUCKET LIST 2026
              </p>
            </div>
          </div>

          <p className="text-sm opacity-65 italic max-w-sm mx-auto mt-4 leading-relaxed">
            "From raw culture to breathtaking landscapes —<br />
            this is not just a trip, it's a journey."
          </p>

          {/* Category stats */}
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-5 text-xs font-semibold opacity-75">
            <span>🏞️ 11 Destinations</span>
            <span>🎯 10 Experiences</span>
            <span>🛍️ 5 Must-Try</span>
            <span>🍜 6 Foods</span>
            <span>🏝️ 4 Islands</span>
          </div>
        </div>
      </div>
    </header>
  );
}
