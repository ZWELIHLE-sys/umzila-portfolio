import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zwelihle Mhlongo — Umzila-AfriRoute",
  description:
    "Founder of Umzila-AfriRoute. Building digital infrastructure for African communities excluded from the formal economy. From KwaZulu-Natal — for Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="bg-white font-sans text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
