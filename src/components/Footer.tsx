import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-parchment">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex justify-between items-center flex-wrap gap-5 max-sm:flex-col max-sm:text-center">
          {/* Left */}
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

          {/* Right */}
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

        <div className="font-accent text-base text-warm-gray text-center mt-6">
          made for fun, because why not?
        </div>
      </div>
    </footer>
  );
}
