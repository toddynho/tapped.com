import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Tapped",
  description: "Terms of service for Tapped and all Tapped games.",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <h1 className="font-heading text-[clamp(32px,5vw,44px)] font-extrabold text-rich-black tracking-[-0.02em] mb-2 leading-tight">
        Terms of Service
      </h1>
      <p className="text-soft-brown text-sm mb-10">
        Last updated: February 12, 2025
      </p>

      <div className="space-y-8 text-[15px] text-ink leading-[1.8]">
        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            The short version
          </h2>
          <p className="text-soft-brown">
            Our games are free. Play them, enjoy them, share them with friends.
            Don&apos;t do anything illegal with them. That covers most of it.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            1. Acceptance of terms
          </h2>
          <p className="text-soft-brown">
            By downloading, installing, or using any application
            (&ldquo;App&rdquo;) published by Tapped (&ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by
            these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree
            to these Terms, please do not use our Apps.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            2. License
          </h2>
          <p className="text-soft-brown">
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to download and use our Apps for personal, non-commercial
            purposes on any device you own or control, subject to these Terms
            and any applicable app store terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            3. Cost
          </h2>
          <p className="text-soft-brown">
            Our Apps are provided free of charge. There are no in-app purchases,
            subscription fees, or hidden costs. We reserve the right to
            introduce paid apps or features in the future, but any existing free
            content will remain free.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            4. Restrictions
          </h2>
          <p className="text-soft-brown mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 text-soft-brown">
            <li>
              Copy, modify, distribute, sell, or lease any part of our Apps
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to extract the source code
              of our Apps
            </li>
            <li>
              Use our Apps for any unlawful purpose or in violation of any
              applicable laws
            </li>
            <li>
              Remove, alter, or obscure any copyright, trademark, or other
              proprietary notices in our Apps
            </li>
            <li>
              Use our Apps in any way that could damage, disable, or impair our
              services
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            5. Intellectual property
          </h2>
          <p className="text-soft-brown">
            All content in our Apps — including but not limited to game design,
            graphics, text, audio, and code — is owned by Tapped and protected
            by copyright, trademark, and other intellectual property laws. These
            Terms do not grant you any rights to our trademarks, branding, or
            logos.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            6. User-generated content
          </h2>
          <p className="text-soft-brown">
            Some of our Apps may allow you to create custom content (for
            example, custom word packs). Any content you create remains on your
            device. We do not collect, store, or claim ownership of
            user-generated content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            7. Availability and updates
          </h2>
          <p className="text-soft-brown">
            We may update, modify, or discontinue our Apps at any time without
            notice. We do not guarantee that our Apps will always be available
            or function without interruption. We are not liable for any loss or
            inconvenience caused by the unavailability of our Apps.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            8. Disclaimer of warranties
          </h2>
          <p className="text-soft-brown">
            Our Apps are provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that our Apps will be
            error-free, secure, or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            9. Limitation of liability
          </h2>
          <p className="text-soft-brown">
            To the maximum extent permitted by applicable law, Tapped shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use,
            goodwill, or other intangible losses resulting from your use of our
            Apps.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            10. Third-party platforms
          </h2>
          <p className="text-soft-brown">
            Our Apps are distributed through third-party platforms such as the
            Apple App Store. Your use of these platforms is subject to their
            respective terms and conditions. We are not responsible for the
            practices of any third-party platform.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            11. Governing law
          </h2>
          <p className="text-soft-brown">
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to conflict of law
            principles.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            12. Changes to these terms
          </h2>
          <p className="text-soft-brown">
            We may update these Terms from time to time. When we do, we will
            revise the &ldquo;Last updated&rdquo; date at the top of this page.
            Continued use of our Apps after changes constitutes acceptance of
            the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            13. Contact us
          </h2>
          <p className="text-soft-brown">
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:hello@tapped.com"
              className="text-coral hover:text-coral-hover transition-colors"
            >
              hello@tapped.com
            </a>
            .
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
