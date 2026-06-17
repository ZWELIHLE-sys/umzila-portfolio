import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bus,
  Store,
  Tractor,
  Check,
  Play,
  Images,
  Lightbulb,
  Users,
  Laptop,
  MessagesSquare,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import HeroSparks from "@/components/HeroSparks";
import ZoomImage from "@/components/ZoomImage";
import PhoneMockup from "@/components/PhoneMockup";

const demos = [
  { icon: Play, label: "ScholarHub Demo", href: "/solutions#scholarhub" },
  { icon: Images, label: "Vuna Marketplace", href: "/solutions#vuna" },
  { icon: Lightbulb, label: "Plaas-In Concept", href: "/solutions#plaasin" },
];

const platforms = [
  {
    icon: Bus,
    name: "ScholarHub",
    tag: "Scholar Transport",
    desc: "Improving communication, coordination and administration between scholar transport operators, drivers, parents and schools.",
    focus: ["Parent App", "Driver App", "Operator App"],
  },
  {
    icon: Store,
    name: "Vuna Marketplace",
    tag: "Makers & Producers",
    desc: "A curated marketplace for people who genuinely make, craft and produce — artisans, fashion designers and farmers selling their own branded products. No resellers, no dropshipping.",
    focus: ["Local Producers", "Market Visibility", "Direct Connections"],
  },
  {
    icon: Tractor,
    name: "Plaas-In",
    tag: "Agriculture",
    desc: "Practical agricultural administration for farmers — starting with livestock records and management, built around real farming realities.",
    focus: ["Livestock Core", "Health & Bloodline", "WhatsApp Automation"],
  },
];

const scholarApps = [
  { label: "Parent App", src: "" },
  { label: "Driver App", src: "" },
  { label: "Operator App", src: "" },
];

const whyUs = [
  {
    icon: Users,
    title: "Community Driven",
    desc: "Built from local realities and lived experiences.",
  },
  {
    icon: Laptop,
    title: "Technology Focused",
    desc: "Using digital tools to solve practical challenges.",
  },
  {
    icon: MessagesSquare,
    title: "Communication Led",
    desc: "Combining technology with effective communication and stakeholder engagement.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    desc: "Building scalable solutions designed for long-term growth.",
  },
];

export default function HomePage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/hero-core.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/45" />
        <HeroSparks />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            Umzila-AfriRoute
          </div>
          <h1 className="animate-fade-up font-serif text-5xl font-black leading-[1.05] text-white drop-shadow-2xl md:text-7xl">
            Where grassroots <span className="text-sage">meet tech</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md md:text-lg">
            Building practical technology and communication solutions that
            strengthen transport, agriculture, local commerce and community
            development.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore Our Solutions
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== EVIDENCE BAND ===================== */}
      <section className="border-b border-gray-200 bg-offwhite px-6 py-12 md:px-8">
        <div className="reveal mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-xl font-bold text-dark md:text-2xl">
            See the work already in progress
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
            Real platforms in development — not just plans on paper.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            {demos.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.label}
                  href={d.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-sage/40 bg-white px-5 py-3 text-sm font-semibold text-dark shadow-sm transition-all hover:-translate-y-0.5 hover:border-sage hover:shadow-md"
                >
                  <Icon size={18} className="text-sage" />
                  {d.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE DO ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            What We Do
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Innovation from the ground up
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-sage" />
          <div className="mt-6 space-y-4 text-[16px] leading-[1.9] text-gray-600">
            <p>
              Technology should not only serve large cities and established
              businesses. At Umzila-AfriRoute, we believe innovation can emerge
              from local communities and create meaningful opportunities for
              people, entrepreneurs, farmers, transport operators and producers.
            </p>
            <p>
              We develop community-focused technology platforms designed to
              improve communication, administration, market access and
              operational efficiency — combining technology development with
              communication expertise to create solutions that are practical,
              accessible and rooted in local realities.
            </p>
          </div>

          <blockquote className="mt-8 border-l-4 border-sage pl-5 font-serif text-lg italic leading-relaxed text-dark md:text-xl">
            &ldquo;Innovation does not have to come from the biggest city or the
            largest company. Sometimes it begins with understanding a local
            problem and having the courage to solve it.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ===================== OUR PLATFORMS (teaser) ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Our Platforms
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              Solutions built for real life
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-500">
              Three platforms, one goal — practical technology rooted in everyday
              realities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/50 hover:shadow-xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-white">
                    <Icon size={24} />
                  </span>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-forest/70">
                    {p.tag}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                    {p.desc}
                  </p>
                  <div className="mb-5 mt-4 flex flex-col gap-2">
                    {p.focus.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-2 text-[13px] text-gray-600"
                      >
                        <Check size={14} className="flex-shrink-0 text-sage" />
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/solutions"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-all hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore All Solutions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT PREVIEW (Vuna) ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              In Development
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              See it taking shape
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
              A first look at{" "}
              <strong className="text-dark">Vuna Marketplace</strong> — our
              curated marketplace for genuine makers and producers. 85%
              complete, and the first platform going live.
            </p>
          </div>

          <div className="mt-10">
            <ZoomImage
              src="https://res.cloudinary.com/dxdo1rhxz/image/upload/v1781655731/vunamarketplace_dlln6r.jpg"
              alt="Vuna Marketplace preview"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/solutions#vuna"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore Vuna Marketplace
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== WHY UMZILA-AFRIROUTE (nodes) ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Why Umzila-AfriRoute?
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              What sets us apart
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-offwhite bg-sage text-white shadow">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-serif text-lg font-bold text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SCHOLARHUB APP SHOWCASE ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              90% Complete
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              ScholarHub, in your hand
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
              Three connected apps — for parents, drivers and operators —
              bringing safety, coordination and transparency to scholar
              transport.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {scholarApps.map((app) => (
              <PhoneMockup
                key={app.label}
                src={app.src}
                alt={`ScholarHub ${app.label}`}
                label={app.label}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/solutions#scholarhub"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore ScholarHub
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== IMPACT TEASER ===================== */}
      <section className="bg-offwhite px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Our Impact
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Real change for real communities
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
            From supporting entrepreneurship and strengthening communities to
            encouraging innovation and economic growth — see the difference our
            platforms are built to make.
          </p>
          <Link
            href="/impact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
          >
            See Our Impact
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-white px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-bold text-sage md:text-5xl">
            Join the journey
          </h2>
          <p className="mx-auto mt-5 text-[16px] leading-[1.9] text-gray-600">
            Umzila-AfriRoute is building practical solutions for transport,
            agriculture, local commerce and community development. Explore our
            platforms, follow our progress, and see how technology can create
            opportunities from the ground up.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              View Our Portfolio
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-dark/20 px-7 py-3.5 text-[15px] font-medium text-dark transition-colors hover:bg-dark/5"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
