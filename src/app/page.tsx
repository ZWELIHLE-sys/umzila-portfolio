import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bus,
  Store,
  Tractor,
  Briefcase,
  Users,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  Wrench,
  Cpu,
  Sprout,
  Layers,
  Play,
  Images,
  Check,
  GraduationCap,
  Code2,
  Laptop,
  MessagesSquare,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import HeroSparks from "@/components/HeroSparks";

const demos = [
  { icon: Play, label: "ScholarHub Demo" },
  { icon: Images, label: "Vuna Marketplace" },
  { icon: Lightbulb, label: "Plaas-In Concept" },
];

const platforms = [
  {
    icon: Bus,
    name: "ScholarHub",
    tag: "Scholar Transport",
    desc: "Supporting scholar transport administration through improved communication and coordination between operators, drivers, parents and schools.",
    focus: [
      "Scholar Transport Administration",
      "Parent Communication",
      "Driver Management",
      "Operator Tools",
      "Future Educational Integration",
    ],
  },
  {
    icon: Store,
    name: "Vuna Marketplace",
    tag: "Makers & Producers",
    desc: "A curated marketplace for people who genuinely make, craft and produce — artisans creating their own goods, fashion designers and farmers selling their own branded products like farm-fresh eggs. No resellers, no dropshipping.",
    focus: [
      "Local Producers",
      "Farmers",
      "Artisans",
      "Makers",
      "Market Visibility",
    ],
  },
  {
    icon: Tractor,
    name: "Plaas-In",
    tag: "Agriculture",
    desc: "A practical agricultural administration platform supporting farmers through digital record keeping and farm management — starting with livestock.",
    focus: [
      "Livestock Registry",
      "Breed Management",
      "Health Records",
      "Bloodline Tracking",
      "WhatsApp Automation",
    ],
  },
];

const impact = [
  {
    icon: Briefcase,
    title: "Supporting Entrepreneurship",
    desc: "Helping local businesses and producers access opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Strengthening Communities",
    desc: "Improving communication, transparency and participation.",
  },
  {
    icon: Lightbulb,
    title: "Encouraging Innovation",
    desc: "Developing practical solutions for local challenges.",
  },
  {
    icon: TrendingUp,
    title: "Promoting Economic Growth",
    desc: "Supporting sectors that contribute to community development.",
  },
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

const values = [
  {
    icon: Users,
    title: "Community First",
    desc: "We start with the people who live the problem — never a market found in a spreadsheet.",
  },
  {
    icon: Wrench,
    title: "Built From Experience",
    desc: "Every platform is shaped by real conditions on the ground: the rank, the route, the rural road.",
  },
  {
    icon: Cpu,
    title: "Technology as a Tool",
    desc: "Software is the means, not the mission. If it doesn't change lives, it doesn't ship.",
  },
  {
    icon: Sprout,
    title: "Sovereignty as the Goal",
    desc: "Communities owning their systems, their data, and their share of the economy.",
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
              href="/#solutions"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Explore Our Platforms
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              View Our Portfolio
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
                  href="/#solutions"
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

      {/* ===================== OUR PLATFORMS (Solutions) ===================== */}
      <section
        id="solutions"
        className="scroll-mt-20 bg-offwhite px-6 py-20 md:px-8"
      >
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Our Platforms
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              Solutions built for real life
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-500">
              Different platforms, one goal — practical technology rooted in
              everyday realities.
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
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-all hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== OUR IMPACT ===================== */}
      <section id="impact" className="scroll-mt-20 bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Our Impact
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              The difference we&apos;re building toward
            </h2>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {impact.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sage text-white shadow">
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

      {/* ===================== MISSION ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              The Mission
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              Building from the ground level up
            </h2>
            <p className="mx-auto mt-4 text-[16px] leading-[1.9] text-gray-600">
              We don&apos;t build technology for its own sake. Every platform
              begins with a real problem — in transport, agriculture, local
              commerce or community development. Technology is only the tool;
              community ownership is the goal.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-offwhite bg-sage text-white shadow">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-dark">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-gray-600">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VISION ===================== */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/vision2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />

        <div className="reveal relative z-10 mx-auto w-full max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
            <Layers size={13} />
            Our Vision
          </div>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl">
            Technology that reaches where it&apos;s needed most
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-sage" />
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-mint/95 drop-shadow-md md:text-lg">
            To build innovative technology and communication solutions that
            empower communities, strengthen local economies, and create
            opportunities where they are needed most.
          </p>
          <p className="mt-4 max-w-2xl text-[16px] font-medium leading-[1.9] text-white drop-shadow-md md:text-lg">
            The future shouldn&apos;t arrive only in the cities — it should reach
            everyone.
          </p>
        </div>
      </section>

      {/* ===================== WHY UMZILA-AFRIROUTE ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Why Umzila-AfriRoute?
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              What sets us apart
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop only) */}
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
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sage text-white shadow">
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

      {/* ===================== FOUNDER (text only) ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Founder
          </div>
          <h2 className="font-serif text-3xl font-bold text-dark">
            Zwelihle Mhlongo
          </h2>
          <p className="mt-1 text-sm font-semibold text-forest">
            Umzila-AfriRoute
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} className="flex-shrink-0 text-sage" />
              Diploma in Public Relations Management (University of Zululand)
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={16} className="flex-shrink-0 text-sage" />
              Full Stack Developer Certificate (FNB App Academy)
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.9] text-gray-600">
            Driven by a passion for combining technology, communication and
            community understanding to create practical solutions that generate
            opportunities and positive impact.
          </p>
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
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              View Portfolio
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-dark/20 px-7 py-3.5 text-[15px] font-medium text-dark transition-colors hover:bg-dark/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
