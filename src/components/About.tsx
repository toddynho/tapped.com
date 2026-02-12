const values = [
  {
    emoji: "🚫",
    title: "No ads. Ever.",
    desc: 'Not between levels, not as "rewards," not hiding behind a skip button. Zero ads.',
  },
  {
    emoji: "\u23F3",
    title: "No energy timers",
    desc: "Play as much as you want, whenever you want. No waiting for lives to refill.",
  },
  {
    emoji: "👶",
    title: "Kid-safe",
    desc: "Games you'd hand to your kid without thinking twice about what they'll see.",
  },
  {
    emoji: "💸",
    title: "Actually free",
    desc: 'No "free to download, $9.99 to enjoy." Free means free. The whole game.',
  },
];

export default function About() {
  return (
    <section
      className="py-20 bg-white border-t border-b border-parchment"
      id="about"
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 max-md:gap-8">
          {/* Text column */}
          <div>
            <div className="font-accent text-lg text-coral font-semibold mb-1">
              about tapped
            </div>
            <h2 className="font-heading text-[clamp(28px,4vw,36px)] font-extrabold text-rich-black tracking-[-0.02em] mb-4 leading-[1.2]">
              We got tired of
              <br />
              bad mobile games.
            </h2>
            <p className="text-base text-soft-brown leading-[1.8] mb-4">
              You know the drill. Download a game, play for 30 seconds, then sit
              through a{" "}
              <strong className="text-deep-brown font-bold">
                fullscreen video ad
              </strong>{" "}
              you can&apos;t skip. Beat a level? Another ad. Want to keep playing?
              Watch an ad or wait 4 hours for your &ldquo;lives&rdquo; to refill.
              It&apos;s exhausting.
            </p>
            <p className="text-base text-soft-brown leading-[1.8]">
              We make the games we actually want to play — and the ones we want
              our kids playing.{" "}
              <strong className="text-deep-brown font-bold">
                No ads, no energy timers, no pay-to-win gates.
              </strong>{" "}
              Just open it up and have fun.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
            {values.map((v) => (
              <div
                key={v.title}
                data-animate
                className="p-6 bg-cream rounded-[18px] border-2 border-cream-dark hover:border-coral-soft hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-[28px] mb-2 block">{v.emoji}</span>
                <div className="font-heading text-base font-bold text-rich-black mb-1">
                  {v.title}
                </div>
                <div className="text-[13px] text-soft-brown leading-[1.6]">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
