type QuartzLoaderScreenProps = {
  className?: string;
};

export function QuartzLoaderScreen({
  className = "",
}: QuartzLoaderScreenProps) {
  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[#141a21] text-white ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="quartz-loader-orb absolute left-[10%] top-[14%] h-56 w-56 rounded-full bg-[#ead9c3]/18 blur-3xl" />
        <div className="quartz-loader-orb absolute bottom-[12%] right-[14%] h-64 w-64 rounded-full bg-[#8ea7c4]/14 blur-3xl [animation-delay:-3s]" />
        <div className="quartz-loader-orb absolute right-[22%] top-[18%] h-40 w-40 rounded-full bg-white/8 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.42em] text-white/46">
          Quartz Hotel
        </p>
        <h1 className="mt-5 font-display text-[clamp(3rem,8vw,5.6rem)] leading-[0.9] tracking-[-0.05em] text-white">
          Preparing your stay
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/64 sm:text-base">
          Rooms, menus, and quieter details are loading now.
        </p>

        <div className="mt-8 w-full max-w-sm overflow-hidden rounded-full border border-white/10 bg-white/6 p-1">
          <div className="quartz-loader-bar relative h-3 overflow-hidden rounded-full bg-[linear-gradient(90deg,#f1debe_0%,#e7cfaa_46%,#f8f0e3_100%)]">
            <div className="quartz-loader-sheen absolute inset-y-0 left-[-30%] w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)]" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/58">
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
            Five-star city stay
          </span>
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
            Direct booking
          </span>
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
            Premium menus
          </span>
        </div>
      </div>
    </div>
  );
}
