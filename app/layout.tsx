import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// const headingFont = Playfair_Display({
//   variable: "--font-heading",
//   weight: ["700"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const bodyFont = Inter({
//   variable: "--font-body",
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
//   display: "swap",
// });

export const serif = Cormorant_Garamond({
  subsets:["latin"],
  weight:["300","400","500","600","700"],
  display:"swap",
  variable:"--font-serif",
  preload: true, 
});

export const sans = Inter({
  subsets:["latin"],
  weight:["300","400","500","600","700"],
  display:"swap",
  variable:"--font-sans",
  preload: true, 
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Andy Warhol “Marlon” — Private Offering, Provenance & Inquiry",
  description: "A privately held Andy Warhol “Marlon” silkscreen, authenticated with extensive provenance. Request private access to view documents under NDA.",
  openGraph: {
    title: "Andy Warhol “Marlon” — Private Offering, Provenance & Inquiry",
    description: "A privately held Andy Warhol “Marlon” silkscreen, authenticated with extensive provenance. Request private access to view documents under NDA.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/Andy-Warhol-Marlon-Brando-1.jpg",
        width: 1200,
        height: 630,
        alt: "Andy Warhol ‘Marlon’ — Private Offering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Warhol “Marlon” — Private Offering, Provenance & Inquiry",
    description: "A privately held Andy Warhol “Marlon” silkscreen, authenticated with extensive provenance. Request private access to view documents under NDA.",
    images: ["/Andy-Warhol-Marlon-Brando-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className='antialiase'>
        {children}
      </body>
    </html>
  );
}
