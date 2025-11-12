import HeroSection from "@/components/HeroSection";
import ProvenanceSection from "@/components/ProvenanceSection";
import NarrativeSection from "@/components/NarrativeSection";
import AboutArtistSection from "@/components/AboutArtistSection";
import InquirySection from "@/components/InquirySection";
import VisualGallerySection from "@/components/VisualGallerySection";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import MarketMomentSection from "@/components/MarketMomentSection";
import SilkscreenSection from "@/components/SilkscreenSection";
import React from "react";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Product", "VisualArtwork"],
    name: "Andy Warhol \u201cMarlon\u201d",
    creator: { "@type": "Person", name: "Andy Warhol" },
    artworkSurface: "canvas",
    artform: "silkscreen",
    material: "silkscreen ink on canvas",
    dateCreated: "1966",
    description: "Privately held Andy Warhol \u201cMarlon\u201d silkscreen with extensive provenance.",
    image: `${siteUrl}/Andy-Warhol-Marlon-Brando-1.jpg`,
    url: `${siteUrl}/`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      url: `${siteUrl}/#inquiry`,
      description: "Private listing, price on request",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Provenance", value: "Authenticated with extensive documentation (private)." },
      { "@type": "PropertyValue", name: "Production Year", value: "1966" }
    ]
  };
  return (
    <>
      <HeroSection />
      <ProvenanceSection />
      <NarrativeSection />
      <AboutArtistSection />
      <SilkscreenSection />
      <VisualGallerySection />
      <MarketMomentSection />
      <InquirySection />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CustomCursor />

    </>
  );
}
