export default function Manifesto() {
  return (
    <section className="py-20" id="belief">
      <div className="max-w-[1080px] mx-auto px-8">
        <div data-animate className="max-w-[680px] mx-auto py-14 px-12 max-sm:py-9 max-sm:px-6 bg-white border-2 border-cream-dark rounded-[28px] text-center relative shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          {/* Large quote mark */}
          <span className="font-heading text-[140px] text-coral opacity-10 absolute top-0 left-7 leading-none select-none pointer-events-none">
            &ldquo;
          </span>

          <div className="font-heading text-[21px] font-medium text-deep-brown leading-[1.75] relative">
            We think games should be{" "}
            <strong className="text-rich-black font-bold">
              fun from the first tap to the last
            </strong>{" "}
            — not interrupted by a 30-second ad for a game you&apos;ll never
            download. No energy systems. No loot boxes. No &ldquo;watch this video
            to continue.&rdquo; Just{" "}
            <em className="font-accent not-italic text-coral">
              well-made games
            </em>{" "}
            that respect your time and your attention. That&apos;s the whole idea.
          </div>

          <div className="mt-7 font-accent text-xl text-warm-gray">
            — tapped, est. 2025
          </div>
        </div>
      </div>
    </section>
  );
}
