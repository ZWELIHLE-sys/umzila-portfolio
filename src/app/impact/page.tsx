import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Bus,
  Tractor,
  Store,
  Rocket,
  Check,
  ArrowRight,
  Briefcase,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import HeroSparks from "@/components/HeroSparks";

export const metadata: Metadata = {
  title: "Impact — Umzila-AfriRoute | Real Change for Communities",
  description:
    "If Umzila-AfriRoute succeeds, what difference will it make? The outcomes our platforms aim to create for people, communities, the economy and the municipality.",
};

const areas = [
  {
    icon: TrendingUp,
    title: "Economic Impact",
    intro:
      "Our platforms are designed to support economic participation and local enterprise development.",
    points: [
      "Increased business efficiency",
      "Improved access to opportunities",
      "Support for entrepreneurship",
      "Greater market visibility",
      "Strengthened local value chains",
      "Increased digital participation",
    ],
  },
  {
    icon: Users,
    title: "Community Impact",
    intro:
      "Communities benefit when information flows efficiently and services become easier to manage.",
    points: [
      "Improved communication between stakeholders",
      "Increased transparency",
      "Simplified administration",
      "Encouraged digital inclusion",
      "Stronger community participation",
    ],
  },
  {
    icon: Bus,
    title: "Transport Impact",
    intro:
      "Through ScholarHub, we aim to support better communication and administration within scholar transport.",
    points: [
      "Improved communication between parents and operators",
      "Better administrative management",
      "Increased operational transparency",
      "Improved service coordination",
      "Greater confidence among stakeholders",
    ],
  },
  {
    icon: Tractor,
    title: "Agricultural Impact",
    intro:
      "Through Plaas-In, we aim to support farmers with practical digital tools for farm administration and record keeping.",
    points: [
      "Better livestock record management",
      "Improved health tracking",
      "Better breeding and bloodline records",
      "Improved farm reporting",
      "Readiness for future agricultural technology",
    ],
  },
  {
    icon: Store,
    title: "Local Producer Impact",
    intro:
      "Through Vuna Marketplace, we aim to create greater visibility for people who make, craft and produce.",
    points: [
      "Increased exposure for local producers",
      "Better market access",
      "Support for small businesses",
      "Promotion of local products",
      "Encouragement of entrepreneurship",
    ],
  },
  {
    icon: Rocket,
    title: "Youth Impact",
    intro:
      "As a youth-led initiative, we believe young people should not only consume technology but create it.",
    points: [
      "Innovation",
      "Entrepreneurship",
      "Skills development",
      "Problem solving",
      "Community leadership",
    ],
  },
];

const municipal = [
  "More competitive local economies",
  "Greater digital participation",
  "Stronger entrepreneurial ecosystems",
  "Improved access to opportunities",
  "Future-ready communities",
];

const impactSummary = [
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

export default function ImpactPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-emerald to-forest px-6 py-24 md:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl"
        />
        <HeroSparks />

        <div className="hero-enter relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            Impact
          </div>
          <h1 className="font-serif text-4xl font-black text-white drop-shadow-2xl md:text-6xl">
            Building solutions that create{" "}
            <span className="text-sage">real change</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md">
            Technology should do more than exist — it should solve problems,
            create opportunities, strengthen communities and contribute to
            economic growth.
          </p>
        </div>
      </section>

      {/* ===================== GOAL STATEMENT ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-dark md:text-3xl">
            &ldquo;To use technology and communication to create practical
            solutions that improve everyday life.&rdquo;
          </p>
        </div>
      </section>

      {/* ===================== WHY IMPACT MATTERS ===================== */}
      <section className="bg-white px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Why Impact Matters
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Closing the gap
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-[16px] leading-[1.9] text-gray-600">
            <p>
              Many communities continue to face challenges related to access to
              information, administration, market opportunities and digital
              participation.
            </p>
            <p>
              While technology continues to advance globally, many local
              challenges remain unsolved. Umzila-AfriRoute aims to help close
              this gap by developing solutions that are accessible, relevant and
              rooted in local realities.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR IMPACT (node summary) ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Our Impact
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              The difference we aim to make
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {impactSummary.map((item) => {
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

      {/* ===================== AREAS OF IMPACT ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Areas of Impact
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              Where the change happens
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-sage/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sage text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-dark">
                      {area.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {area.intro}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {area.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 flex-shrink-0 text-sage"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== MUNICIPAL IMPACT ===================== */}
      <section className="bg-white px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            For Partners &amp; Institutions
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Impact at scale
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.9] text-gray-600">
            Umzila-AfriRoute aligns with broader goals of economic development,
            digital transformation and community empowerment. By backing
            innovation at grassroots level, municipalities, partners and
            development institutions can help build:
          </p>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {municipal.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-[15px] font-medium text-dark"
              >
                <Check size={18} className="mt-0.5 flex-shrink-0 text-sage" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg font-bold text-dark md:text-xl">
            Technology should not only reach urban centres — it should also serve
            rural and township communities.
          </p>
        </div>
      </section>

      {/* ===================== LONG-TERM GOAL ===================== */}
      <section className="bg-white px-6 py-24 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Our Long-Term Goal
          </div>
          <h2 className="mx-auto font-serif text-3xl font-bold leading-tight text-sage md:text-4xl">
            Opportunities where they&apos;re needed most
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-6 text-[16px] leading-[1.9] text-gray-600">
            Our long-term vision is to create solutions that help communities
            become more connected, productive, informed and economically active.
          </p>
          <p className="mx-auto mt-6 font-serif text-xl italic text-dark md:text-2xl">
            &ldquo;Technology should create opportunities where opportunities are
            needed most.&rdquo;
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              About Umzila-AfriRoute
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-dark/20 px-7 py-3.5 text-[15px] font-medium text-dark transition-colors hover:bg-dark/5"
            >
              Get In Touch
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Building practical solutions. Strengthening communities. Creating
            opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
