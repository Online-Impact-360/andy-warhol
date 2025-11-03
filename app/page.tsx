import HeroSection from "@/components/HeroSection";
import ProvenanceSection from "@/components/ProvenanceSection";
import NarrativeSection from "@/components/NarrativeSection";
import AboutArtistSection from "@/components/AboutArtistSection";
import InquirySection from "@/components/InquirySection";
import VisualGallerySection from "@/components/VisualGallerySection";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import MarketMomentSection from "@/components/MarketMomentSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ProvenanceSection />
      <NarrativeSection />
      <AboutArtistSection />
      <VisualGallerySection />
      <MarketMomentSection />
      <InquirySection />
      <Footer />

      <CustomCursor />

    </>
  );
}
