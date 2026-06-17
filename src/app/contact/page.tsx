import type { Metadata } from "next";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Bus,
  Store,
  Tractor,
  Handshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import ContactForm from "@/components/ContactForm";

// Contact form endpoint. Create a free form at formspree.io and set its
// recipient to zweh.mhlongo@gmail.com (your phone default; you can also add
// umzilascholarhub@outlook.com), then replace YOUR_FORM_ID below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeoonpg";

export const metadata: Metadata = {
  title: "Contact — Umzila-AfriRoute | Get In Touch",
  description:
    "Reach Umzila-AfriRoute — for partnerships, collaboration and community engagement across transport, agriculture and local commerce.",
};

const contactInfo = [
  {
    icon: User,
    label: "Founder",
    values: ["Zwelihle Mhlongo", "Founder & Project Lead"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["umzilascholarhub@outlook.com", "zweh.mhlongo@gmail.com"],
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    values: ["063 825 5349", "071 534 9139"],
  },
  {
    icon: Globe,
    label: "Website",
    values: ["Umzila-AfriRoute.co.za"],
  },
  {
    icon: MapPin,
    label: "Location",
    values: [
      "Jolivet, JPP Municipality",
      "Harry Gwala District",
      "KwaZulu-Natal, South Africa",
    ],
  },
];

const areas = [
  {
    icon: Bus,
    title: "ScholarHub",
    tags: [
      "Scholar Transport Operators",
      "Schools",
      "Education Stakeholders",
      "Parents",
      "Transport Associations",
    ],
  },
  {
    icon: Store,
    title: "Vuna Marketplace",
    tags: ["Farmers", "Makers", "Artisans", "Producers", "Small Businesses"],
  },
  {
    icon: Tractor,
    title: "Plaas-In",
    tags: [
      "Livestock Farmers",
      "Crop Farmers",
      "Agricultural Stakeholders",
      "Development Programmes",
    ],
  },
  {
    icon: Handshake,
    title: "Partnerships",
    tags: [
      "Municipalities",
      "Development Agencies",
      "NGOs",
      "Community Organisations",
      "Technology Partners",
    ],
  },
];

export default function ContactPage() {
  return (
    <main>
      <RevealInit />
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6 py-24 md:px-8">
        <Image
          src="/images/vision.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/45" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-mint backdrop-blur-md">
            Contact Us
          </div>
          <h1 className="font-serif text-4xl font-black text-white drop-shadow-2xl md:text-6xl">
            Get in <span className="text-sage">touch</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.8] text-mint/95 drop-shadow-md">
            Whether you&apos;re a partner, funder, operator, farmer, school or
            simply curious about our work — we&apos;d be glad to hear from you.
          </p>
        </div>
      </section>

      {/* ===================== WELCOME + CONTACT INFO ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <p className="mx-auto max-w-3xl text-center text-[16px] leading-[1.9] text-gray-600">
            Thank you for your interest in Umzila-AfriRoute. Whether you are a
            transport operator, farmer, producer, school representative,
            community organisation, potential partner, investor, or simply
            interested in learning more about our work, we would be happy to hear
            from you. We welcome opportunities for collaboration, partnerships
            and community engagement.
          </p>

          <div className="relative mt-16">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sage text-white shadow">
                      <Icon size={20} />
                    </span>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-forest/70">
                      {item.label}
                    </div>
                    <div className="mt-1 flex flex-col gap-0.5">
                      {item.values.map((v) => (
                        <span
                          key={v}
                          className="break-words text-[13px] font-medium text-dark"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== AREAS OF INTEREST ===================== */}
      <section className="bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
              Areas of Interest
            </div>
            <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
              Who we&apos;d love to hear from
            </h2>
            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-sage/30 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-sage text-white shadow">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 font-serif text-lg font-bold text-dark">
                      {area.title}
                    </h3>
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {area.tags.map((t) => (
                        <li key={t} className="text-sm text-gray-600">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SEND A MESSAGE ===================== */}
      <section id="message" className="scroll-mt-20 bg-white px-6 py-20 md:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Send Us a Message
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Drop us a line
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.9] text-gray-600">
            We aim to respond to enquiries as quickly as possible and value every
            opportunity to connect with communities, businesses and
            organisations that share our vision.
          </p>

          <ContactForm endpoint={FORMSPREE_ENDPOINT} />
        </div>
      </section>

      {/* ===================== CONNECT WITH US ===================== */}
      <section className="bg-white px-6 py-20 text-center md:px-8">
        <div className="reveal mx-auto max-w-2xl">
          <div className="mb-3 inline-flex rounded-full bg-sage px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-dark">
            Connect With Us
          </div>
          <h2 className="font-serif text-3xl font-bold text-sage md:text-4xl">
            Follow our journey
          </h2>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-sage" />
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] text-gray-600">
            Follow our journey as we continue developing solutions that support
            transport, agriculture, local commerce and community empowerment.
          </p>

          <div className="mt-8">
            <p className="font-serif text-lg font-bold text-dark">
              Umzila-AfriRoute
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-sage">
              Where grassroots meet tech
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Building practical solutions. Strengthening communities. Creating
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
