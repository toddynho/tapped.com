import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Tapped",
  description: "Privacy policy for Tapped and all Tapped games.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <h1 className="font-heading text-[clamp(32px,5vw,44px)] font-extrabold text-rich-black tracking-[-0.02em] mb-2 leading-tight">
        Privacy Policy
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
            We don&apos;t collect your data. We don&apos;t track you. We
            don&apos;t serve ads. Our games run entirely on your device. That&apos;s
            it.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            1. Who we are
          </h2>
          <p className="text-soft-brown">
            Tapped (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            develops and publishes mobile games. Our website is{" "}
            <a
              href="https://tapped.com"
              className="text-coral hover:text-coral-hover transition-colors"
            >
              tapped.com
            </a>
            . You can reach us at{" "}
            <a
              href="mailto:hello@tapped.com"
              className="text-coral hover:text-coral-hover transition-colors"
            >
              hello@tapped.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            2. Information we collect
          </h2>
          <p className="text-soft-brown mb-3">
            <strong className="text-deep-brown font-bold">
              We do not collect personal information.
            </strong>{" "}
            Our games are designed to work entirely offline on your device. We
            do not require accounts, logins, email addresses, or any other
            personal data to use our apps.
          </p>
          <p className="text-soft-brown">
            Specifically, we do <strong className="text-deep-brown font-bold">not</strong> collect:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-soft-brown">
            <li>Names, email addresses, or contact information</li>
            <li>Location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Usage analytics or behavioral data</li>
            <li>Photos, contacts, or any other on-device data</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            3. Advertising
          </h2>
          <p className="text-soft-brown">
            Our games contain <strong className="text-deep-brown font-bold">no advertisements</strong> of
            any kind. We do not use ad networks, tracking pixels, or any
            third-party advertising SDKs.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            4. In-app purchases
          </h2>
          <p className="text-soft-brown">
            Our games contain{" "}
            <strong className="text-deep-brown font-bold">no in-app purchases</strong>. All
            content and features are available for free from the moment you
            download the app.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            5. Third-party services
          </h2>
          <p className="text-soft-brown">
            Our games do not integrate with third-party analytics, advertising,
            or tracking services. We do not share data with third parties
            because we do not collect data in the first place.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            6. Children&apos;s privacy
          </h2>
          <p className="text-soft-brown">
            Our games are safe for users of all ages. Since we do not collect
            any personal information, our apps are compliant with the
            Children&apos;s Online Privacy Protection Act (COPPA) and similar
            regulations worldwide.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            7. Data stored on your device
          </h2>
          <p className="text-soft-brown">
            Our games may store preferences and game progress locally on your
            device (for example, settings or high scores). This data never
            leaves your device and is not accessible to us. You can delete this
            data at any time by uninstalling the app.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            8. Website
          </h2>
          <p className="text-soft-brown">
            Our website at tapped.com is a static site. We do not use cookies,
            analytics trackers, or any other means of collecting visitor data
            on our website.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            9. Changes to this policy
          </h2>
          <p className="text-soft-brown">
            If we ever change our privacy practices, we will update this page
            and revise the &ldquo;Last updated&rdquo; date above. Given our
            commitment to not collecting data, we don&apos;t anticipate
            significant changes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-rich-black mb-3">
            10. Contact us
          </h2>
          <p className="text-soft-brown">
            If you have questions about this privacy policy, please contact us
            at{" "}
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
