"use client";

import Header from "@/components/Header";
import HowItWorks from "@/components/LookingToPost";
import WhyChooseUs from "./why-choose-us";
import HeroSection from "./hero-section";
import ListingsSections from "./listings-section";
import FooterSecion from "./footer-section";
import OurMission from "./OurMission";
import GetInTouch from "./GetInTouch";
import WelcomeDialog from "@/components/WelcomeDialog";  // Import the dialog component

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <WelcomeDialog /> {/* Show the dialog once on landing page load */}
        <HeroSection />
        <ListingsSections />
        <HowItWorks />
        <WhyChooseUs />
        <OurMission />
        <GetInTouch />
      </main>
      <FooterSecion />
    </div>
  );
}


