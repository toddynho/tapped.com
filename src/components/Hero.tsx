export default function Hero() {
  return (
    <section className="pt-40 pb-[100px] text-center relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,#F2C94C18_0%,#E8734A0D_40%,transparent_70%)] pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-coral opacity-[0.07] top-[10%] left-[-5%] animate-[float-a_20s_ease-in-out_infinite]" />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-sunshine opacity-[0.07] top-[20%] right-[-3%] animate-[float-b_18s_ease-in-out_infinite]" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-sage opacity-[0.07] bottom-[10%] left-[10%] animate-[float-a_22s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Content */}
      <div className="relative z-[1] max-w-[1080px] mx-auto px-8">
        {/* App icon */}
        <div className="w-24 h-24 rounded-[26px] bg-gradient-to-br from-coral to-sunshine inline-flex items-center justify-center mb-8 shadow-[0_8px_30px_#E8734A1A] animate-[gentle-bob_5s_ease-in-out_infinite] relative">
          <span className="absolute top-[-5px] left-[-5px] right-[-5px] bottom-[-5px] rounded-[30px] border-2 border-dashed border-parchment animate-[spin-slow_40s_linear_infinite]" />
          <span className="font-heading text-[50px] font-extrabold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.08)]">
            T
          </span>
        </div>

        <h1 className="font-heading text-[clamp(40px,6vw,64px)] font-black text-rich-black tracking-[-0.03em] leading-[1.1] mb-5">
          Games worth
          <br />
          your time.
        </h1>

        <p className="text-[19px] text-soft-brown font-medium max-w-[460px] mx-auto leading-[1.65]">
          No ads. No forced video watches. No pay-to-win nonsense. Just{" "}
          <em className="font-accent not-italic text-coral font-semibold">
            good games
          </em>{" "}
          you&apos;ll actually want on your phone.
        </p>

        <div className="mt-9 flex gap-3.5 justify-center flex-wrap">
          <a
            href="#games"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold bg-coral text-white shadow-[0_4px_16px_#E8734A22] hover:bg-coral-hover hover:-translate-y-0.5 hover:shadow-[0_6px_24px_#E8734A33] transition-all duration-250 cursor-pointer"
          >
            See our games ↓
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-bold bg-white text-deep-brown border-2 border-parchment hover:border-coral-soft hover:text-coral hover:-translate-y-0.5 transition-all duration-250 cursor-pointer"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
