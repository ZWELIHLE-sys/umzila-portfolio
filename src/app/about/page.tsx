import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  Target,
  Bus,
  Store,
  Tractor,
  CheckCircle2,
  GraduationCap,
  Code2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export const metadata: Metadata = {
  title: "About — Umzila-AfriRoute | Where Grassroots Meet Tech",
  description:
    "Umzila-AfriRoute is a technology and communications initiative building practical digital solutions for communities, entrepreneurs, transport operators, farmers and local producers.",
};

const platforms = [
  {
    icon: Bus,
    name: "ScholarHub",
    tag: "Scholar Transport",
    desc: "A scholar transport administration platform that improves communication and coordination between operators, drivers, parents and schools — supporting safer, more organized and more transparent services.",
  },
  {
    icon: Store,
    name: "Vuna",
    tag: "Local Marketplace",
    desc: "A curated marketplace for genuine makers, artisans, farmers and local producers. Built to give the people who create, grow and produce greater visibility and access to customers — celebrating local production, not reselling.",
  },
  {
    icon: Tractor,
    name: "Plaas-In",
    tag: "Agriculture",
    desc: "An agricultural administration platform supporting farmers with practical digital tools — starting with livestock management and record keeping, with dairy, poultry, crop management and automation planned.",
  },
];

const commitments = [
  "Community-focused innovation",
  "Practical and accessible technology",
  "Continuous learning and improvement",
  "Supporting entrepreneurship",
  "Strengthening local economic participation",
  "Creating opportunities through digital solutions",
];

export default function AboutPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HEADER ===================== */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/hero-cave.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/45" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            About Umzila-AfriRoute
          </div>
          <h1 className="font-serif text-4xl font-black text-white drop-shadow-2xl md:text-6xl">
            Where grassroots <span className="text-sage">meet tech</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md">
            A technology and communications initiative developing practical
            digital solutions for the communities, entrepreneurs, transport
            operators, farmers and local producers too often left behind.
          </p>
        </div>
      </section>

      {/* ===================== WHO WE ARE ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Who We Are
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Built from lived experience
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-sage" />
          <div className="mt-6 space-y-4 text-[16px] leading-[1.9] text-gray-600">
            <p>
              Umzila-AfriRoute is a technology and communications initiative
              founded to develop practical digital solutions that respond to
              real challenges faced by communities, entrepreneurs, transport
              operators, farmers and local producers.
            </p>
            <p>
              The idea was born from lived experience and a belief that
              innovation should not be limited to large cities or well-funded
              organizations. Many communities still face barriers to
              information, market access, administration and digital
              participation. Umzila-AfriRoute exists to help bridge those gaps
              through accessible and locally relevant technology.
            </p>
            <p>
              Our approach combines technology development, communication
              expertise and community understanding to create solutions that are
              practical, scalable and rooted in everyday realities.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== VISION & MISSION ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-white">
              <Eye size={24} />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-bold text-dark">
              Our Vision
            </h3>
            <p className="mt-3 text-[15px] leading-[1.9] text-gray-600">
              To build innovative digital solutions that empower communities,
              strengthen local economies, and ensure that technology reaches
              places where it can make a meaningful difference.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-white">
              <Target size={24} />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-bold text-dark">
              Our Mission
            </h3>
            <p className="mt-3 text-[15px] leading-[1.9] text-gray-600">
              To design and develop community-focused platforms that improve
              communication, administration, access to opportunities and
              economic participation across transport, agriculture, education
              and local commerce.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE ARE BUILDING ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              The Platforms
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              What We Are Building
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== WHY TECH + COMMUNICATION ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-4xl rounded-3xl bg-sage p-10 text-center md:p-14">
          <div className="text-[11px] font-semibold uppercase tracking-[3px] text-dark/70">
            Our Approach
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-dark md:text-4xl">
            Why technology and communication?
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-[15px] leading-[1.9] text-dark/80">
            <p>
              Technology alone is not enough. Many good solutions fail because
              they do not understand the people they are meant to serve.
            </p>
            <p>
              Umzila-AfriRoute combines technology with communication because
              successful innovation requires listening, understanding, educating
              and building trust — an approach shaped by the founder&apos;s
              background in Public Relations Management and the belief that
              meaningful solutions begin with understanding real community needs.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== OUR COMMITMENT ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Our Commitment
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 size={22} className="flex-shrink-0 text-sage" />
                <span className="font-medium text-dark">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOOKING AHEAD ===================== */}
      <section className="bg-dark px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[3px] text-sage">
            Looking Ahead
          </div>
          <h2 className="mx-auto mt-4 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
            Different platforms, one common goal
          </h2>
          <p className="mx-auto mt-6 text-[16px] leading-[1.9] text-mint/80">
            Umzila-AfriRoute is currently growing through the development of
            ScholarHub, Vuna and Plaas-In. While each platform serves a
            different purpose, they share one goal: using technology and
            communication to create practical solutions that improve lives and
            unlock opportunities.
          </p>
          <p className="mt-7 font-serif text-xl font-bold text-sage md:text-2xl">
            Umzila-AfriRoute — where grassroots meet tech.
          </p>
        </div>
      </section>

      {/* ===================== FOUNDER ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[15rem]">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-sage/40 bg-mint/40"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
              <Image
                src="/images/zwelihle.jpg"
                alt="Zwelihle Mhlongo, Founder of Umzila-AfriRoute"
                fill
                sizes="15rem"
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Founder
            </div>
            <h3 className="font-serif text-2xl font-bold text-dark">
              Zwelihle Mhlongo
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <GraduationCap size={16} className="flex-shrink-0 text-sage" />
                Diploma in Public Relations Management — University of Zululand
              </span>
              <span className="flex items-center gap-2">
                <Code2 size={16} className="flex-shrink-0 text-sage" />
                Full Stack Developer Certificate — FNB App Academy
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-[1.9] text-gray-600">
              Founder of Umzila-AfriRoute, driven by a passion for building
              practical technology solutions that respond to local realities and
              create opportunities for communities.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-sm font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
              >
                See What We&apos;re Building
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-dark/20 px-7 py-3.5 text-sm font-medium text-dark transition-colors hover:bg-dark/5"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
