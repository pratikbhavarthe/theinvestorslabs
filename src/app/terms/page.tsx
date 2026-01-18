import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms and Conditions | The Investor Labs",
  description:
    "Read the terms and conditions governing the use of The Investor Labs real estate marketplace platform and services.",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/hey-5N4nWoBGdmg-unsplash.jpg"
          alt="Terms and Conditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-amethyst/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-sm md:text-base text-white/80">
              Last Updated: January 18, {currentYear}
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
              <strong className="font-semibold text-dark-amethyst">
                The Investor Labs
              </strong>{" "}
              is a technology-driven real estate marketplace platform engaged in
              providing comprehensive property services including property
              listings, lead generation, transaction facilitation, and expert
              consultation for buyers, sellers, and investors in Noida and
              Greater Noida.
            </p>
            <p className="text-base md:text-lg text-dark-amethyst/80 leading-relaxed">
              These Terms and Conditions govern your use of our website (
              <a
                href="https://theinvestorslab.in"
                className="text-indigo-velvet hover:underline font-medium"
              >
                www.theinvestorslab.in
              </a>
              ), mobile applications, and all related services (collectively
              referred to as &quot;The Platform&quot; or &quot;Services&quot;).
            </p>
          </section>

          {/* Important Notice */}
          <section className="mb-16">
            <div className="bg-indigo-velvet/10 border-l-4 border-indigo-velvet p-6 rounded-r-xl">
              <h2 className="text-xl font-bold text-dark-amethyst mb-3">
                Important Notice
              </h2>
              <p className="text-base text-dark-amethyst/80 leading-relaxed">
                BY ACCESSING OR USING THE INVESTOR LABS PLATFORM, YOU
                ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE
                BOUND BY THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO
                THESE TERMS, PLEASE DO NOT USE OUR SERVICES.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Company Information
            </h2>
            <div className="bg-honeydew/30 p-6 rounded-2xl border border-dust-grey/20">
              <p className="text-base text-dark-amethyst/80 leading-relaxed mb-2">
                <strong className="font-semibold text-dark-amethyst">
                  Legal Name:
                </strong>{" "}
                The Investor Labs
              </p>
              <p className="text-base text-dark-amethyst/80 leading-relaxed mb-2">
                <strong className="font-semibold text-dark-amethyst">
                  CIN:
                </strong>{" "}
                U72900UP2020PTC128519
              </p>
              <p className="text-base text-dark-amethyst/80 leading-relaxed">
                <strong className="font-semibold text-dark-amethyst">
                  Registered Office:
                </strong>{" "}
                B-12, Upper Ground Floor, Tower 4, NX-One, Techzone 4, Greater
                Noida, Uttar Pradesh, India, 201318
              </p>
            </div>
          </section>

          {/* Definitions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Definitions
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              For the purposes of these Terms and Conditions:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    &quot;You&quot;, &quot;User&quot;, &quot;Customer&quot;
                  </strong>{" "}
                  refers to any individual or entity accessing or using The
                  Platform
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;,
                    &quot;Company&quot;
                  </strong>{" "}
                  refers to The Investor Labs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    &quot;Platform&quot;
                  </strong>{" "}
                  includes our website, mobile applications, and all related
                  services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    &quot;Services&quot;
                  </strong>{" "}
                  refers to property listings, lead generation, transaction
                  facilitation, and consultation services
                </span>
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Eligibility and Account Requirements
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              To use The Investor Labs Platform, you must:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Be at least 18 years of age</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  If under 18, have consent from a parent or legal guardian
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Provide accurate, current, and complete information during
                  registration
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Maintain and promptly update your account information to keep
                  it accurate
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Be legally capable of entering into binding contracts under
                  Indian law
                </span>
              </li>
            </ul>
          </section>

          {/* Platform Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Platform Services
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              The Investor Labs provides the following services:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Property Listings:
                  </strong>{" "}
                  Curated residential and commercial properties in Noida and
                  Greater Noida
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Lead Generation:
                  </strong>{" "}
                  Connecting buyers with sellers and property owners
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Expert Consultation:
                  </strong>{" "}
                  Professional guidance for property transactions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Transaction Support:
                  </strong>{" "}
                  Assistance with legal documentation and property registration
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Market Insights:
                  </strong>{" "}
                  Property market analysis and investment recommendations
                </span>
              </li>
            </ul>
          </section>

          {/* User Conduct */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              User Conduct and Prohibited Activities
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              When using The Platform, you agree NOT to:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Post false, misleading, or inaccurate property information
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Use automated tools, bots, or scrapers to access The Platform
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Attempt to reverse engineer, decompile, or hack The Platform
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Bypass or circumvent our services to directly contact property
                  owners
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Post unlawful, defamatory, obscene, or offensive content
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Violate any applicable laws, regulations, or third-party
                  rights
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Interfere with or disrupt The Platform&apos;s functionality
                </span>
              </li>
            </ul>
          </section>

          {/* Service Fees */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Service Fees and Payment Terms
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              Users agree to pay applicable service fees for using The Platform
              under the following conditions:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80 mb-6">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Upon successful property transaction facilitated through The
                  Platform
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  If you bypass The Platform and directly engage with a property
                  introduced by us within 60 days
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  For premium consultation and transaction support services
                </span>
              </li>
            </ul>
            <div className="bg-honeydew/30 p-6 rounded-2xl border border-dust-grey/20">
              <p className="text-base text-dark-amethyst font-semibold mb-2">
                Fee Structure:
              </p>
              <p className="text-base text-dark-amethyst/80 leading-relaxed">
                Service fees are determined based on property value, transaction
                type, and services rendered. All fees are exclusive of
                applicable taxes (GST). Detailed fee schedules will be
                communicated to you before service commencement.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Disclaimers and Limitations
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              Please note the following important disclaimers:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    &quot;As Is&quot; Basis:
                  </strong>{" "}
                  Property listings are provided &quot;as is&quot; without
                  warranties of any kind
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Verification:
                  </strong>{" "}
                  Users are responsible for independently verifying property
                  details, ownership, and legal status
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Third-Party Content:
                  </strong>{" "}
                  We are not responsible for accuracy of information provided by
                  property owners or third parties
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Transaction Disputes:
                  </strong>{" "}
                  The Company is not a party to disputes between buyers and
                  sellers
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  <strong className="font-semibold text-dark-amethyst">
                    Service Availability:
                  </strong>{" "}
                  We do not guarantee uninterrupted or error-free Platform
                  operation
                </span>
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Intellectual Property Rights
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              All content on The Platform, including but not limited to text,
              graphics, logos, images, software, and design, is the property of
              The Investor Labs and is protected by Indian and international
              intellectual property laws.
            </p>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative
              works from any content on The Platform without our express written
              permission.
            </p>
          </section>

          {/* Liability Limitation */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Limitation of Liability
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              To the maximum extent permitted by law, The Investor Labs shall
              not be liable for:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Any indirect, incidental, special, or consequential damages
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Loss of profits, revenue, data, or business opportunities
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Damages arising from property transactions or disputes between
                  users
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Unauthorized access to or alteration of your data or
                  transmissions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>
                  Actions or omissions of third parties, including property
                  owners
                </span>
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-4">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of India. Any disputes arising from or
              relating to these Terms or your use of The Platform shall be
              subject to the exclusive jurisdiction of the courts in Greater
              Noida, Uttar Pradesh, India.
            </p>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              You irrevocably consent to the jurisdiction and venue of such
              courts and waive any objection to the inconvenience of such forum.
            </p>
          </section>

          {/* Updates to Terms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Updates to Terms and Conditions
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-4">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting on The
              Platform. We will notify you of material changes via email or
              prominent notice on The Platform.
            </p>
            <p className="text-base text-dark-amethyst/80 leading-relaxed">
              Your continued use of The Platform after changes are posted
              constitutes acceptance of the modified Terms. It is your
              responsibility to review these Terms periodically.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Termination
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              We reserve the right to suspend or terminate your access to The
              Platform at any time, without prior notice, for:
            </p>
            <ul className="space-y-4 text-base text-dark-amethyst/80">
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Violation of these Terms and Conditions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Fraudulent or illegal activities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Conduct that harms The Platform or other users</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-velvet mt-1">•</span>
                <span>Non-payment of applicable fees</span>
              </li>
            </ul>
          </section>

          {/* Grievance Redressal */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Grievance Redressal
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              In accordance with the Information Technology Act, 2000 and rules
              made thereunder, if you have any grievances regarding The Platform
              or our services, please contact our Grievance Officer:
            </p>
            <div className="bg-honeydew/30 p-8 rounded-2xl border border-dust-grey/20">
              <p className="text-dark-amethyst font-semibold mb-4 text-lg">
                Grievance Officer
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
                <p className="text-dark-amethyst/70 mt-4">
                  We will acknowledge your grievance within 24 hours and strive
                  to resolve it within 15 working days.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Contact Us
            </h2>
            <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
              For any questions, concerns, or inquiries regarding these Terms
              and Conditions, please contact us:
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

          {/* Acceptance */}
          <section className="mb-16">
            <div className="bg-indigo-velvet/10 border-l-4 border-indigo-velvet p-6 rounded-r-xl">
              <p className="text-base text-dark-amethyst/80 leading-relaxed">
                By using The Investor Labs Platform, you acknowledge that you
                have read, understood, and agree to be bound by these Terms and
                Conditions. If you do not agree to these Terms, you must
                immediately cease using our Services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
