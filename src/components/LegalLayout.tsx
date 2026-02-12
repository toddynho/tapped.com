import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-cream/85 backdrop-blur-[16px] border-b border-parchment">
        <div className="max-w-[1080px] mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-coral to-sunshine flex items-center justify-center font-heading text-xl font-extrabold text-white">
              T
            </div>
            <span className="font-heading text-[22px] font-extrabold text-rich-black">
              tapped
            </span>
          </Link>
          <Link
            href="/"
            className="font-heading text-[15px] font-semibold text-soft-brown hover:text-coral transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-[720px] mx-auto px-8">
          <article className="prose-legal">{children}</article>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-8 border-t border-parchment">
        <div className="max-w-[1080px] mx-auto px-8 flex justify-between items-center flex-wrap gap-4 max-sm:flex-col max-sm:text-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[9px] bg-gradient-to-br from-coral to-sunshine flex items-center justify-center font-heading text-[17px] font-extrabold text-white">
              T
            </div>
            <div className="text-sm text-soft-brown">
              <strong className="font-heading text-deep-brown font-bold">
                tapped
              </strong>{" "}
              &middot; Games worth your time
            </div>
          </div>
          <div className="flex items-center gap-6 max-sm:flex-col max-sm:gap-3">
            <a
              href="mailto:hello@tapped.com"
              className="font-heading text-sm font-semibold text-soft-brown hover:text-coral transition-colors"
            >
              hello@tapped.com
            </a>
            <Link
              href="/privacy"
              className="font-heading text-sm font-semibold text-soft-brown hover:text-coral transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-heading text-sm font-semibold text-soft-brown hover:text-coral transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
