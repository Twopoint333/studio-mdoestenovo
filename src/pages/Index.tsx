import { Hero } from "@/components/landing/Hero";
import { Header } from "@/components/landing/Header";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { MarketingCampaigns } from "@/components/landing/MarketingCampaigns";
import { Advantages } from "@/components/landing/Advantages";
import { BusinessTypes } from "@/components/landing/BusinessTypes";
import { DeliveryOptions } from "@/components/landing/DeliveryOptions";
import { TeamSection } from "@/components/landing/TeamSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";
import { useState, useEffect } from "react";
// import { useScroll } from "@/hooks/useScroll";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const { scrollY, lastScrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // This logic can be simplified or removed if useScroll is commented out
      // For now, let's keep a simple visibility toggle
      setVisible(true); 
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} visible={visible} />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <MarketingCampaigns />
        <Advantages />
        <BusinessTypes />
        <DeliveryOptions />
        <TeamSection />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
