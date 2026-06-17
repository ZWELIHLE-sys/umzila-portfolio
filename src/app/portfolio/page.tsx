import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Bus,
  Store,
  Tractor,
  Video,
  Images,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Portfolio — Umzila-AfriRoute | Proof of Work",
  description:
    "Evidence of development across ScholarHub, Vuna Marketplace and Plaas-In — videos, screenshots, prototype diagrams and documents.",
};

const scholarVideos = [
  { title: "Parent App Walkthrough", src: "" },
  { title: "Driver App Walkthrough", src: "" },
  { title: "Operator App Walkthrough", src: "" },
];
const vunaScreens = [
  { title: "Homepage", src: "" },
  { title: "Marketplace", src: "" },
  { title: "Seller Profile", src: "" },
  { title: "Product Listing", src: "" },
];
const plaasMedia = [
  { title: "Prototype Screenshots", src: "" },
  { title: "Concept Diagrams", src: "" },
  { title: "Automation Demonstration", src: "" },
];

function PlatformHeading({
  icon: Icon,
  name,
  kind,
}: {
  icon: typeof Bus;
  name: string;
  kind: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-sage text-white">
        <Icon size={22} />
      </span>
      <div>
        <h2 className="font-serif text-2xl font-bold text-dark">{name}</h2>
        <div className="text-[11px] font-semibold uppercase tracking-[2px] text-forest/70">
          {kind}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/vr-tech.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/45" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            Portfolio
          </div>
          <h1 className="font-serif text-4xl font-black text-white drop-shadow-2xl md:text-6xl">
            Proof of <span className="text-sage">work</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md">
            These are not just ideas. Here is the evidence of development across
            our platforms — videos, screenshots, diagrams and documents.
          </p>
        </div>
      </section>

      {/* ===================== SCHOLARHUB VIDEOS ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <PlatformHeading icon={Bus} name="ScholarHub" kind="Videos" />
          <div className="grid gap-6 md:grid-cols-3">
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
                  subtitle="Screen recording"
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================== VUNA SCREENSHOTS ===================== */}
      <section className="border-t border-gray-100 bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <PlatformHeading icon={Store} name="Vuna Marketplace" kind="Screenshots" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vunaScreens.map((s) =>
              s.src ? (
                <div
                  key={s.title}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200"
                >
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <MediaPlaceholder
                  key={s.title}
                  icon={Images}
                  title={s.title}
                  subtitle="Screenshot"
                  aspect="aspect-[4/3]"
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================== PLAAS-IN ===================== */}
      <section className="border-t border-gray-100 bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <PlatformHeading
            icon={Tractor}
            name="Plaas-In"
            kind="Prototype & Concept"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {plaasMedia.map((m) => (
              <MediaPlaceholder
                key={m.title}
                icon={LayoutDashboard}
                title={m.title}
                subtitle="Coming soon"
                aspect="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="bg-offwhite px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Want to see more?
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
            Our platforms are in active development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-[15px] font-semibold text-dark shadow-lg shadow-sage/30 transition-transform hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-dark/20 px-7 py-3.5 text-[15px] font-medium text-dark transition-colors hover:bg-dark/5"
            >
              Explore the Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
