import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Code2,
  ShieldCheck,
  Globe,
  Hammer,
  CheckCircle2,
  ClipboardList,
  ArrowRight,
  Sparkles,
  Layers,
  Users,
  Wrench,
  Cpu,
  Sprout,
  Store,
  Bus,
  Car,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

const qualifications = [
  { icon: GraduationCap, label: "Diploma — PR & Communications (University of Zululand)" },
  { icon: Code2, label: "Full-Stack Development (FNB Academy)" },
  { icon: ShieldCheck, label: "Registered POPIA Information Officer" },
];

const stats = [
  { num: "4+", label: "Products Built" },
  { num: "2", label: "Divisions" },
  { num: "KZN", label: "Home Base" },
  { icon: Globe, label: "Pan-African Vision" },
];

const products = [
  {
    name: "Vuna",
    icon: Store,
    tag: "African Marketplace",
    desc: "Africa's verified handmade marketplace — connecting local creators with buyers across South Africa and the world.",
    slogan: "Reap What Africa Makes",
    status: "In Development",
    statusIcon: Hammer,
  },
  {
    name: "ScholarHub",
    icon: Bus,
    tag: "Scholar Transport",
    desc: "A digital management system bringing scholar transport operators, parents and schools onto one trusted platform.",
    slogan: "Safe. Professional. Accountable.",
    status: "95% Complete",
    statusIcon: CheckCircle2,
  },
  {
    name: "SmartRank",
    icon: Car,
    tag: "Taxi Rank Management",
    desc: "A queue management system for South African taxi ranks, built from real, lived experience in the industry.",
    slogan: "From the Rank — For the Rank.",
    status: "In Development",
    statusIcon: Hammer,
  },
  {
    name: "Velaphi",
    icon: Truck,
    tag: "Mobility & Delivery",
    desc: "An early concept for community mobility and delivery in the last kilometer — designed to move people and parcels.",
    slogan: "Where public transport ends, Velaphi begins.",
    status: "Blueprint",
    statusIcon: ClipboardList,
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
        {/* Background photo (drop public/images/hero-cave.jpg) */}
        <Image
          src="/images/vr-tech.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Readability overlay (deep teal, bottom-weighted) */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/35" />

        {/* Text lives directly on the photo */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          {/* Location tag */}
          <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-mint backdrop-blur-md">
            <MapPin size={12} />
            Jolivet, KwaZulu-Natal
          </div>

          {/* Name */}
          <h1 className="animate-fade-up font-serif text-6xl font-black leading-[1] text-white drop-shadow-2xl md:text-8xl">
            Zwelihle
            <span className="mt-2 block text-sage">Mhlongo</span>
          </h1>

          {/* Title */}
          <div className="mt-6 text-lg font-medium tracking-wide text-sage drop-shadow-lg md:text-xl">
            Founder — Umzila-AfriRoute
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md md:text-lg">
            A technology and communications company from KwaZulu-Natal —
            building digital platforms that create real economic opportunity for
            Africa&apos;s informal and rural communities.
          </p>

          {/* Qualifications */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {qualifications.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] text-white backdrop-blur-md"
              >
                <Icon size={14} className="text-sage" />
                {label}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              View My Products
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <div className="border-b border-gray-200 bg-white px-6 py-10 md:px-8">
        <div className="reveal mx-auto flex max-w-5xl flex-wrap justify-center gap-x-16 gap-y-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center font-serif text-3xl font-bold text-sage">
                  {Icon ? <Icon size={30} /> : stat.num}
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================== WHO I AM (portrait) ===================== */}
      <section className="bg-white px-6 py-24 md:px-8">
        <div className="reveal mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            {/* Decorative layered frame */}
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-sage/40 bg-mint/40"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
              <Image
                src="/images/zwelihle.jpg"
                alt="Zwelihle Mhlongo, Founder of Umzila-AfriRoute"
                fill
                sizes="(max-width: 1024px) 24rem, 26rem"
                className="object-cover"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-sage px-5 py-3 shadow-lg md:-right-5">
              <div className="font-serif text-lg font-bold text-dark">
                Founder
              </div>
              <div className="text-xs font-medium text-dark/70">
                Umzila-AfriRoute
              </div>
            </div>
          </div>

          {/* Intro */}
          <div>
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Who I Am
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-sage md:text-5xl">
              Where grassroots meets tech
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-sage" />
            <p className="mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
              I&apos;m Zwelihle Mhlongo — founder of Umzila-AfriRoute. I&apos;m
              from Jolivet, KwaZulu-Natal, and I build for the communities I come
              from, not the ones I read about.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.9] text-gray-600">
              My work bridges full-stack development and strategic communication
              — but the real foundation is what I&apos;ve lived: the taxi rank,
              the informal shop, the scholar transport route. Those are the
              problems I understand, and the people I build for.
            </p>

            {/* Focus areas */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Technology", "Public Relations", "Community Development"].map(
                (focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-sage/40 bg-mint/50 px-4 py-1.5 text-[12px] font-medium text-forest"
                  >
                    {focus}
                  </span>
                ),
              )}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-sm font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Read My Full Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS PREVIEW ===================== */}
      <section className="bg-offwhite px-6 py-20 md:px-8">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            <Sparkles size={13} />
            The Portfolio
          </div>
          <h2 className="font-serif text-4xl font-bold text-sage">
            What I Am Building
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-500">
            Every product starts from a real community problem — and works
            toward a real solution.
          </p>
        </div>

        <div className="reveal mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;
            const StatusIcon = product.statusIcon;
            return (
              <div
                key={product.name}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sage/50 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-white">
                  <Icon size={24} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-forest/70">
                  {product.tag}
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-gray-600">
                  {product.desc}
                </p>
                <div className="mt-3 text-xs italic text-gray-500">
                  &ldquo;{product.slogan}&rdquo;
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/60 px-2.5 py-1 text-[11px] font-medium text-forest">
                    <StatusIcon size={12} />
                    {product.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-sm font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== VISION (VR photo) ===================== */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-24 md:px-8">
        {/* Background photo */}
        <Image
          src="/images/code.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30" />

        {/* Text on top of the photo */}
        <div className="reveal relative z-10 mx-auto w-full max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
            <Layers size={13} />
            The Vision
          </div>
          <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl">
            Technology that reaches the last kilometer
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-sage" />
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-mint/95 drop-shadow-md md:text-lg">
            Umzila-AfriRoute — a technology and communications company from
            KwaZulu-Natal. Our work sits at the intersection of digital
            development and strategic communication, building platforms that
            create real economic opportunity for African communities. Every
            product we build starts from lived experience and a genuine belief
            that African people deserve better digital infrastructure.
          </p>
          <p className="mt-4 max-w-2xl text-[16px] font-medium leading-[1.9] text-white drop-shadow-md md:text-lg">
            The future shouldn&apos;t arrive only in the cities — it should reach
            everyone.
          </p>
          <Link
            href="/vision"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
          >
            Explore the Vision
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="relative overflow-hidden bg-offwhite px-6 py-24 md:px-8">
        <div className="reveal mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Statement */}
          <div>
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              The Mission
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-sage md:text-5xl">
              Building from the ground level up
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-sage" />
            <p className="mt-6 max-w-lg text-[16px] leading-[1.9] text-gray-600">
              We don&apos;t build technology for its own sake. Every
              Umzila-AfriRoute product answers a problem we&apos;ve watched play
              out in real life — in the taxi industry, informal commerce,
              scholar transport, and among rural creators. Technology is only
              ever the tool. Community sovereignty — people owning their own
              systems, data, and economy — is the goal.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-dark">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
