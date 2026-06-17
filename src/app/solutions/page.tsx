import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bus,
  Store,
  Tractor,
  Smartphone,
  Building2,
  Check,
  ArrowRight,
  Video,
  Milk,
  Egg,
  Sprout,
  MessageCircle,
  Cpu,
  MessagesSquare,
  MapPin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import ScreenshotGallery from "@/components/ScreenshotGallery";

export const metadata: Metadata = {
  title: "Solutions — Umzila-AfriRoute | ScholarHub, Vuna, Plaas-In",
  description:
    "Practical technology solutions for transport, agriculture and local commerce — ScholarHub, Vuna Marketplace and Plaas-In, with components, features and demonstrations.",
};

const scholarComponents = [
  {
    icon: Smartphone,
    name: "Parent App",
    features: [
      "Child trip visibility",
      "Notifications",
      "Communication",
      "Transport updates",
    ],
  },
  {
    icon: Bus,
    name: "Driver App",
    features: [
      "Trip management",
      "Route updates",
      "Attendance tracking",
      "Passenger information",
    ],
  },
  {
    icon: Building2,
    name: "Operator App",
    features: [
      "Fleet oversight",
      "Driver management",
      "Parent communication",
      "Administrative tools",
    ],
  },
];

// Add the Cloudinary URL to `src` to replace the placeholder with the video.
const scholarVideos = [
  { title: "Parent App Walkthrough", src: "" },
  { title: "Driver App Walkthrough", src: "" },
  {
    title: "Operator App Walkthrough",
    src: "https://res.cloudinary.com/dxdo1rhxz/video/upload/v1781655687/operatorapp_g0jrvj.mp4",
  },
];

const vunaAudience = [
  "Farmers",
  "Makers",
  "Artisans",
  "Producers",
  "Small Businesses",
];
const vunaFeatures = [
  "Product Listings",
  "Producer Profiles",
  "Local Visibility",
  "Direct Buyer-Seller Connections",
  "Community-Focused Marketplace",
];
const vunaScreens = [
  { title: "Homepage", src: "" },
  {
    title: "Marketplace",
    src: "https://res.cloudinary.com/dxdo1rhxz/image/upload/v1781655731/vunamarketplace_dlln6r.jpg",
  },
  { title: "Seller Profile", src: "" },
  { title: "Product Listing", src: "" },
];

const plaasPhase1 = [
  "Animal Registry",
  "Breed Registry",
  "Health Records",
  "Bloodline Tracking",
  "Reporting",
];
const plaasFuture = [
  { icon: Milk, label: "Dairy" },
  { icon: Egg, label: "Poultry" },
  { icon: Sprout, label: "Crops" },
  { icon: MessageCircle, label: "WhatsApp Automation" },
];
const plaasFlow = [
  "Plaas-In",
  "Livestock",
  "Dairy",
  "Poultry",
  "Crops",
  "Automation",
];

const pillars = [
  { icon: Cpu, label: "Technology" },
  { icon: MessagesSquare, label: "Communication" },
  { icon: MapPin, label: "Local Understanding" },
];
const inspired = [
  {
    icon: Bus,
    name: "ScholarHub",
    text: "Inspired by everyday transport realities.",
  },
  {
    icon: Store,
    name: "Vuna Marketplace",
    text: "Inspired by local makers, producers and entrepreneurs.",
  },
  {
    icon: Tractor,
    name: "Plaas-In",
    text: "Inspired by farming communities and agricultural realities.",
  },
];

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-xs font-semibold text-forest">
      <span className="h-2 w-2 rounded-full bg-sage" />
      {children}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/code.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/45" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            Our Solutions
          </div>
          <h1 className="font-serif text-4xl font-black text-white drop-shadow-2xl md:text-6xl">
            Practical solutions, <span className="text-sage">built for real life</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md">
            We are developing practical technology solutions designed to address
            real-world challenges within transport, agriculture and local
            commerce.
          </p>
        </div>
      </section>

      {/* ===================== SCHOLARHUB ===================== */}
      <section id="scholarhub" className="scroll-mt-20 bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-white">
              <Bus size={28} />
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold text-sage md:text-4xl">
              ScholarHub
            </h2>
            <p className="mt-1 text-lg font-medium text-dark">
              Smarter Scholar Transport Administration
            </p>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-gray-600">
              ScholarHub is designed to improve communication, coordination and
              administration within the scholar transport sector.
            </p>
            <StatusBadge>Status: 90% Complete</StatusBadge>
          </div>

          {/* Components */}
          <h3 className="mt-14 text-center text-[11px] font-semibold uppercase tracking-[2px] text-forest/70">
            Platform Components
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {scholarComponents.map((comp) => {
              const Icon = comp.icon;
              return (
                <div
                  key={comp.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-white">
                    <Icon size={22} />
                  </span>
                  <h4 className="mt-4 font-serif text-lg font-bold text-dark">
                    {comp.name}
                  </h4>
                  <ul className="mt-3 flex flex-col gap-2">
                    {comp.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <Check size={14} className="flex-shrink-0 text-sage" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Demonstration */}
          <h3 className="mt-16 text-center font-serif text-2xl font-bold text-dark">
            Demonstration
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {scholarVideos.map((v) =>
              v.src ? (
                <video
                  key={v.title}
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  preload="metadata"
                  className="aspect-video w-full rounded-2xl border border-gray-200 bg-dark"
                >
                  <source src={v.src} />
                </video>
              ) : (
                <MediaPlaceholder
                  key={v.title}
                  icon={Video}
                  title={v.title}
                  subtitle="Walkthrough video"
                />
              ),
            )}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              View ScholarHub Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== VUNA MARKETPLACE ===================== */}
      <section
        id="vuna"
        className="scroll-mt-20 border-t border-gray-100 bg-white px-6 py-20 md:px-8"
      >
        <div className="reveal mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-white">
              <Store size={28} />
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold text-sage md:text-4xl">
              Vuna Marketplace
            </h2>
            <p className="mt-1 text-lg font-medium text-dark">
              Connecting Producers to Opportunity
            </p>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-gray-600">
              A curated marketplace built for people who create, grow or produce
              — not resellers. Unlike traditional marketplaces, Vuna focuses on
              genuine makers and producers.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {vunaAudience.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-sage/40 bg-mint/40 px-4 py-1.5 text-sm font-medium text-forest"
                >
                  {a}
                </span>
              ))}
            </div>
            <StatusBadge>Status: 85% Complete · Launching first</StatusBadge>
          </div>

          {/* Features */}
          <h3 className="mt-14 text-center text-[11px] font-semibold uppercase tracking-[2px] text-forest/70">
            Features
          </h3>
          <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
            {vunaFeatures.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <Check size={18} className="flex-shrink-0 text-sage" />
                <span className="text-sm font-medium text-dark">{f}</span>
              </div>
            ))}
          </div>

          {/* Demonstration (screenshot gallery) */}
          <h3 className="mt-16 text-center font-serif text-2xl font-bold text-dark">
            Demonstration
          </h3>
          <div className="mt-8">
            <ScreenshotGallery slides={vunaScreens} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore Vuna Marketplace
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PLAAS-IN ===================== */}
      <section
        id="plaasin"
        className="scroll-mt-20 border-t border-gray-100 bg-white px-6 py-20 md:px-8"
      >
        <div className="reveal mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-white">
              <Tractor size={28} />
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold text-sage md:text-4xl">
              Plaas-In
            </h2>
            <p className="mt-1 text-lg font-medium text-dark">
              Practical Agricultural Administration
            </p>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.9] text-gray-600">
              A farm management and agricultural administration platform designed
              around real farming realities.
            </p>
            <StatusBadge>Status: Architecture &amp; Prototype Development</StatusBadge>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Phase 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[2px] text-forest/70">
                Phase 1
              </div>
              <h4 className="mt-1 font-serif text-xl font-bold text-dark">
                Livestock Core
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {plaasPhase1.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Check size={16} className="flex-shrink-0 text-sage" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Expansion */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[2px] text-forest/70">
                Future Expansion
              </div>
              <h4 className="mt-1 font-serif text-xl font-bold text-dark">
                Where we&apos;re headed
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {plaasFuture.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl bg-mint/40 px-3 py-2.5 text-sm font-medium text-dark"
                  >
                    <Icon size={18} className="flex-shrink-0 text-sage" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Diagram */}
          <h3 className="mt-16 text-center font-serif text-2xl font-bold text-dark">
            Vision Diagram
          </h3>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row">
            {plaasFlow.map((stage, i) => (
              <Fragment key={stage}>
                <div
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    i === 0
                      ? "bg-sage text-dark"
                      : "border border-sage/40 bg-mint/40 text-forest"
                  }`}
                >
                  {stage}
                </div>
                {i < plaasFlow.length - 1 && (
                  <>
                    <ChevronDown size={18} className="text-sage md:hidden" />
                    <ChevronRight
                      size={18}
                      className="hidden text-sage md:block"
                    />
                  </>
                )}
              </Fragment>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Learn About Plaas-In
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== WHAT MAKES US DIFFERENT ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-5xl text-center">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            What Makes Us Different
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            We build around real needs
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {pillars.map(({ icon: Icon, label }, i) => (
              <Fragment key={label}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-dark shadow-sm">
                  <Icon size={18} className="text-sage" />
                  {label}
                </div>
                {i < pillars.length - 1 && (
                  <span className="font-serif text-xl font-bold text-sage">
                    +
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {inspired.map(({ icon: Icon, name, text }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-dark">
                  {name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl font-serif text-lg font-bold text-dark md:text-xl">
            Our solutions are designed from the ground up with community impact in
            mind.
          </p>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-dark/20 px-7 py-3.5 text-sm font-medium text-dark transition-colors hover:bg-dark/5"
          >
            See the full evidence in our Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
