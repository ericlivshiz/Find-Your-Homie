"use client";

import Header from "@/components/Header";
import HowItWorks from "@/components/how-it-works";
import WhyChooseUs from "./why-choose-us";
import HeroSection from "./hero-section";
import ListingsSections from "./listings-section";
import FooterSecion from "./footer-section";

export default function LandingPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ListingsSections />
        <HowItWorks />
        <WhyChooseUs />
      </main>

      <FooterSecion />
    </div>
  );
}
