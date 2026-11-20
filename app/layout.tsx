import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { defaultLocale, getDictionary } from "@/data/dictionary";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  openGraph: {
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html
      lang={defaultLocale}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
