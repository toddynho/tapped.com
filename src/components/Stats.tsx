const stats = [
  { value: "100%", label: "Ad-free" },
  { value: "$0", label: "In-app purchases" },
  { value: "0", label: "Forced video ads" },
  { value: "\u221E", label: "Fun" },
];

export default function Stats() {
  return (
    <section className="py-12 border-t border-b border-parchment bg-white">
      <div className="max-w-[1080px] mx-auto px-8 flex justify-center gap-16 flex-wrap max-md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-4xl font-extrabold text-coral leading-tight">
              {stat.value}
            </div>
            <div className="text-sm text-soft-brown font-semibold mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
