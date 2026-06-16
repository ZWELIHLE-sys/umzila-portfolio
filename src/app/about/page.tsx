import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Code2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export const metadata: Metadata = {
  title: "About — Zwelihle Mhlongo | Umzila-AfriRoute",
  description:
    "The story of Zwelihle Mhlongo, founder of Umzila-AfriRoute — from years on paper to digital platforms for Africa's informal and rural communities.",
};

const qualifications = [
  {
    icon: GraduationCap,
    title: "Diploma in Public Relations and Communications",
    sub: "Formal qualification in media, communication strategy and stakeholder engagement.",
  },
  {
    icon: Code2,
    title: "Certificate in Full-Stack Web Development",
    sub: "FNB Academy Bootcamp — Next.js, TypeScript, React, PostgreSQL, Prisma.",
  },
  {
    icon: ShieldCheck,
    title: "Registered POPIA Information Officer",
    sub: "Formally registered with the Information Regulator of South Africa.",
  },
];

const journey = [
  {
    year: "2017",
    title: "Work Integrated Learning",
    place: "Christ the King Hospital",
    desc: "Six months of practical PR experience — applying communications skills in a real institutional environment.",
  },
  {
    year: "2020",
    title: "Teaching Assistant",
    place: "Soul Primary School",
    desc: "Six months supporting learners during the COVID-19 period. Community service during a national crisis.",
  },
  {
    year: "2021–2022",
    title: "A New Venture in Johannesburg",
    place: "Food business with my brother",
    desc: "Moved to Johannesburg chasing opportunity and ran a food business with my brother. I returned home the following year to support my family — a decision that grounds everything I build today.",
  },
  {
    year: "2023–2024",
    title: "Self-Directed Learning",
    place: "Jolivet, KwaZulu-Natal",
    desc: "Taught myself technology online, carrying blueprint ideas on paper — waiting for the right opportunity with patience and determination.",
  },
  {
    year: "2025",
    title: "FNB Academy Bootcamp",
    place: "Full-Stack Development Certificate",
    desc: "Grabbed the opportunity with both hands. This is where the ideas on paper finally got a technical foundation.",
  },
  {
    year: "2026",
    title: "Umzila-AfriRoute",
    place: "Founder & Developer",
    desc: "Building Vuna, ScholarHub, SmartRank and Velaphi — turning years of ideas into real platforms for real communities.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HEADER ===================== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        {/* Background photo */}
        <Image
          src="/images/hero-cave.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark/90" />

        {/* Frosted glass panel */}
        <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl md:p-12">
          <div className="text-[11px] font-semibold uppercase tracking-[3px] text-sage">
            About Me
          </div>
          <h1 className="mt-3 font-serif text-4xl font-black text-white md:text-6xl">
            Zwelihle Mhlongo
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-mint/90">
            A technology and communications company from KwaZulu-Natal —
            building digital platforms that create real economic opportunity for
            Africa&apos;s informal and rural communities.
          </p>
        </div>
      </section>

      {/* ===================== WHO I AM ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[auto_1fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[18rem]">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-sage/40 bg-mint/40"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
              <Image
                src="/images/zwelihle.jpg"
                alt="Zwelihle Mhlongo, Founder of Umzila-AfriRoute"
                fill
                sizes="18rem"
                className="object-cover"
              />
            </div>
          </div>

          {/* Intro */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-sage">Who I Am</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-sage" />
            <p className="mt-6 text-[16px] leading-[1.9] text-gray-600">
              I&apos;m a Public Relations and Communications graduate from
              Jolivet, in the Harry Gwala District of KwaZulu-Natal. I also hold
              a Full-Stack Development Certificate from FNB Academy and am a
              registered POPIA Information Officer.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-gray-600">
              I&apos;m the founder of Umzila-AfriRoute — a technology and
              communications company building digital platforms for communities
              in the informal economy.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== QUALIFICATIONS ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-dark">
            Qualifications
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {qualifications.map((q) => {
              const Icon = q.icon;
              return (
                <div
                  key={q.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-sage/50 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sage text-white">
                    <Icon size={22} />
                  </span>
                  <div>
                    <div className="font-semibold text-dark">{q.title}</div>
                    <div className="mt-1 text-sm text-gray-500">{q.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-dark">My Journey</h2>

          <div className="relative mt-10">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute bottom-3 left-[19px] top-3 w-0.5 bg-mint"
            />

            <div className="flex flex-col gap-7">
              {journey.map((item) => (
                <div key={item.year} className="relative flex pl-12">
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-3 top-5 h-4 w-4 rounded-full border-[3px] border-sage bg-white"
                  />
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="font-semibold text-dark">{item.title}</div>
                      <span className="rounded-full bg-sage px-2.5 py-1 text-[11px] font-semibold text-dark">
                        {item.year}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-dark/50">
                      {item.place}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY + CTA ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-4xl rounded-3xl bg-sage p-10 text-center md:p-14">
          <div className="text-[11px] font-semibold uppercase tracking-[3px] text-dark/70">
            What Drives Me
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-dark md:text-4xl">
            The years I spent unemployed were not wasted. They were research.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] text-dark/80">
            Every platform I build comes from lived experience — not a textbook.
            The taxi industry, scholar transport, African commerce, community
            delivery. I didn&apos;t study these problems from a distance. I lived
            inside them. That&apos;s the foundation everything else is built on.
          </p>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg font-bold text-dark md:text-xl">
            This is what happens when education finally meets opportunity.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-sm font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
          >
            See What I Built
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-dark/20 px-7 py-3.5 text-sm font-medium text-dark transition-colors hover:bg-dark/5"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
