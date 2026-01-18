import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | The Investor Labs",
  description:
    "Learn how The Investor Labs collects, uses, and protects your personal information when you use our real estate platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/bahador-P6qxGFgpNuw-unsplash.jpg"
          alt="Privacy Policy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-amethyst/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-white/80">
              Last Updated: January 18, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <p className="text-base md:text-lg text-dark-amethyst/80 leading-relaxed mb-4">
              At The Investor Labs, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our real estate
              marketplace platform and related services.
            </p>
            <p className="text-base md:text-lg text-dark-amethyst/80 leading-relaxed">
              By accessing or using our services, you agree to the terms
              outlined in this Privacy Policy. If you do not agree with our
              practices, please do not use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Information We Collect
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              We collect information that you provide directly to us when using
              our platform, including:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Personal Identification:
                  </strong>{" "}
                  Name, email address, phone number, and mailing address
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Property Preferences:
                  </strong>{" "}
                  Search criteria, property interests, budget range, and
                  location preferences
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Communication Data:
                  </strong>{" "}
                  Messages, inquiries, and feedback you send through our
                  platform
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Transaction Information:
                  </strong>{" "}
                  Details related to property viewings, offers, and transactions
                  facilitated through our services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Account Information:
                  </strong>{" "}
                  Login credentials, profile settings, and saved searches
                </span>
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              How We Use Your Information
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To provide and maintain our real estate marketplace services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To match you with relevant property listings in Noida and
                  Greater Noida
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To facilitate communication between buyers, sellers, and our
                  team
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To process and manage property transactions and legal
                  documentation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To send you property alerts, market updates, and service
                  notifications
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To improve our platform, personalize your experience, and
                  develop new features
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To comply with legal obligations and protect against
                  fraudulent activities
                </span>
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              Our platform uses cookies and similar tracking technologies to
              enhance your browsing experience and analyze platform usage.
              Cookies are small data files stored on your device that help us:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Remember your preferences and login information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Understand how you interact with our platform</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Provide personalized property recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Analyze traffic patterns and improve our services</span>
              </li>
            </ul>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mt-6">
              You can control cookie settings through your browser preferences.
              However, disabling cookies may limit certain features of our
              platform.
            </p>
          </section>

          {/* Log Data */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Automatically Collected Information
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              When you visit our platform, we automatically collect certain
              information about your device and usage patterns, including your
              IP address, browser type and version, operating system, pages
              visited, time spent on pages, referring website, and access times.
              This data helps us maintain platform security, diagnose technical
              issues, and understand user behavior to improve our services.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Data Security
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. These measures include encryption,
              secure servers, access controls, and regular security audits.
              However, no method of transmission over the internet or electronic
              storage is completely secure. While we strive to use commercially
              acceptable means to protect your data, we cannot guarantee
              absolute security.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Third-Party Service Providers
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              We may engage trusted third-party companies to facilitate our
              services, including:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Payment processing and transaction management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Email delivery and communication services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Analytics and performance monitoring</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Legal documentation and verification services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Cloud hosting and data storage</span>
              </li>
            </ul>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mt-6">
              These third parties have access to your information only to
              perform specific tasks on our behalf and are obligated to maintain
              confidentiality and security in accordance with this Privacy
              Policy.
            </p>
          </section>

          {/* Information Sharing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Information Sharing and Disclosure
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              We do not sell, rent, or trade your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  With property sellers, agents, or partners when you express
                  interest in a listing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  With legal and financial professionals to facilitate property
                  transactions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  When required by law, court order, or governmental authority
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  To protect our rights, property, safety, or that of our users
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  In connection with a business transfer, merger, or acquisition
                </span>
              </li>
            </ul>
          </section>

          {/* External Links */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Links to External Websites
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              Our platform may contain links to third-party websites, including
              property listing portals, financial institutions, and partner
              services. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review the
              privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Children&apos;s Privacy
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us immediately. We
              will take steps to remove such information from our systems.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Your Privacy Rights
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Access:
                  </strong>{" "}
                  Request a copy of the personal information we hold about you
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Correction:
                  </strong>{" "}
                  Request corrections to inaccurate or incomplete information
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Deletion:
                  </strong>{" "}
                  Request deletion of your personal information, subject to
                  legal obligations
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Opt-Out:
                  </strong>{" "}
                  Unsubscribe from marketing communications at any time
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Data Portability:
                  </strong>{" "}
                  Request your data in a structured, commonly used format
                </span>
              </li>
            </ul>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mt-6">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@theinvestorslab.in"
                className="text-indigo-velvet hover:underline font-medium"
              >
                support@theinvestorslab.in
              </a>
              .
            </p>
          </section>

          {/* Policy Updates */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or platform
              features. We will notify you of any material changes by posting
              the updated policy on this page and updating the &quot;Last
              Updated&quot; date. We encourage you to review this Privacy Policy
              periodically. Your continued use of our services after any changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Contact Us
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-honeydew/30 p-8 rounded-2xl border border-dust-grey/20">
              <p className="text-dark-amethyst font-semibold mb-4 text-lg">
                The Investor Labs
              </p>
              <p className="text-dark-amethyst/70 text-base leading-relaxed mb-4">
                B-12, Upper Ground Floor, Tower 4
                <br />
                NX-One, Techzone 4
                <br />
                Greater Noida, 201318
              </p>
              <div className="space-y-2 text-base">
                <p className="text-dark-amethyst/70">
                  <span className="font-medium text-dark-amethyst">Email:</span>{" "}
                  <a
                    href="mailto:support@theinvestorslab.in"
                    className="text-indigo-velvet hover:underline"
                  >
                    support@theinvestorslab.in
                  </a>
                </p>
                <p className="text-dark-amethyst/70">
                  <span className="font-medium text-dark-amethyst">Phone:</span>{" "}
                  <a
                    href="tel:+918800843413"
                    className="text-indigo-velvet hover:underline"
                  >
                    +91 8800843413
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
