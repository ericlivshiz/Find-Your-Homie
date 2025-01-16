import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard/edit-posts");
  };

  const navigateToHousingListings = () => {
    router.push("/housing-listings");
  };

  return (
    <div>
      <section className="py-12 md:py-24 relative overflow-hidden text-white">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12 relative z-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your UCSB Housing Hub
            </h2>
            <p className="text-xl mb-6">
              Browse housing, sublease, and roommate listings instantly — no
              login required!
            </p>
            <p className="text-xl mb-6">
              Sign up to go to Your Dashboard, where you can manage your
              profile, create posts, and view your favorite listings.
            </p>
            <div className="space-x-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={navigateToHousingListings}
              >
                Browse Listings
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white"
                onClick={navigateToDashboard}
              >
                Your Dashboard
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/sb-ai-pic.jpg"
              alt="App Interface Mockup"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-blue-700 opacity-30 blur-3xl rounded-full -top-20 -left-10 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-slate-600 opacity-25 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}
