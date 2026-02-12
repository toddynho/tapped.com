import Image from "next/image";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Games() {
  return (
    <section className="py-20" id="games">
      <div className="max-w-[1080px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="font-accent text-coral font-semibold mb-1">
            the lineup
          </div>
          <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-extrabold text-rich-black tracking-[-0.02em] mb-2.5">
            Our Games
          </h2>
          <p className="text-base text-soft-brown max-w-[500px] mx-auto leading-[1.7]">
            Every game is free, polished, and treats you like a person — not a
            revenue source.
          </p>
        </div>

        {/* Games list */}
        <div className="flex flex-col gap-5">
          {/* Bluffed card */}
          <div data-animate className="bg-white border-2 border-cream-dark rounded-3xl overflow-hidden grid grid-cols-[280px_1fr] max-md:grid-cols-1 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-coral-soft hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[3px] group">
            {/* Visual — uses Bluffed's own dark brand palette */}
            <div className="flex items-center justify-center relative min-h-[200px] max-md:min-h-[160px] overflow-hidden bg-[#120D2E]">
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[140px] bg-[radial-gradient(ellipse,rgba(255,67,101,0.25)_0%,rgba(76,201,240,0.12)_50%,transparent_70%)] blur-[30px] pointer-events-none" />
              {/* Stripe pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(255,255,255,0.2)_12px,rgba(255,255,255,0.2)_24px)]" />
              {/* App icon — real image */}
              <div className="w-[88px] h-[88px] rounded-[22px] overflow-hidden relative z-[1] transition-transform duration-300 group-hover:scale-105 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <Image
                  src="/bluffed-icon.png"
                  alt="Bluffed app icon"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-md:p-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit mb-2.5 bg-sage/10 text-sage">
                <span className="w-[7px] h-[7px] rounded-full bg-sage animate-[pulse-dot_2s_ease-in-out_infinite]" />
                Available now
              </div>
              <div className="font-heading text-[26px] font-extrabold text-rich-black mb-1">
                Bluffed
              </div>
              <div className="font-accent text-coral font-semibold mb-2.5">
                One of you is faking it. Find them — or BE them.
              </div>
              <div className="text-[15px] text-soft-brown leading-[1.7] max-w-[440px] mb-5">
                The ultimate imposter party game. Pass one phone around, everyone
                gets a secret word — except the imposter. Discuss, accuse, and
                vote. 5 game modes, 21 word packs, 3–20 players. Total chaos
                guaranteed.
              </div>
              <div className="flex gap-2.5 flex-wrap items-center">
                <a
                  href="https://apps.apple.com/us/app/bluffed-the-imposter-game/id6758635450"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-rich-black text-white rounded-xl text-[13px] font-bold hover:bg-coral hover:-translate-y-px transition-all duration-200"
                >
                  <AppleIcon />
                  App Store
                </a>
                <a
                  href="https://bluffed.fun"
                  target="_blank"
                  rel="noopener"
                  className="text-sm font-semibold text-coral inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                >
                  bluffed.fun →
                </a>
              </div>
            </div>
          </div>

          {/* Coming soon card */}
          <div data-animate className="bg-white border-2 border-dashed border-parchment rounded-3xl p-12 text-center hover:border-coral-soft transition-colors duration-300">
            <div className="text-[40px] mb-3">🧪</div>
            <div className="font-heading text-[22px] font-bold text-deep-brown mb-1.5">
              More games in the works...
            </div>
            <div className="text-[15px] text-warm-gray max-w-[360px] mx-auto">
              Same promise — no ads, no paywalls, just fun. Stay tuned.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
