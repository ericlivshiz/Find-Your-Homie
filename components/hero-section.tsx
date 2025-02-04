"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const DemoMode = 1;

  const message =
    "We’re working hard to bring you the best experience! Our dashboard is under construction and will be available soon. Stay tuned for updates!";

  const words = message.split(" ");

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedWords((prev) => [...prev, words[currentIndex]]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100); // Adjust speed here

    return () => clearInterval(timer);
  }, [currentIndex, words]);

  const navigateToDashboard = () => {
    if (!DemoMode) {
      router.push("/dashboard/edit-posts");
    } else {
      setIsDialogOpen(true); // Open dialog in demo mode
    }
  };

  const navigateToHousingListings = () => {
    router.push("/housing-listings");
  };

  return (
    <div>
      <section className="py-12 md:py-24 relative overflow-hidden text-white">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12 relative z-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your UCSB Housing Hub
            </h2>
            <p className="text-xl mb-6">
              Browse housing, sublease, and roommate listings instantly — no login required!
            </p>
            <p className="text-xl mb-6">
              Sign up to go to Your Dashboard, where you can manage your profile, create posts, and view your favorite listings.
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
        </div>
      </section>

      {/* Demo Mode Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="sm:max-w-[700px] max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-lg p-8 shadow-xl transition-all"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white mb-4">
              Demo Mode - Feature Coming Soon
            </DialogTitle>
          </DialogHeader>
          <div className="text-center text-lg text-gray-300 mb-6">
            <p>{typedWords.join(" ")}</p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-500 transition-all"
              onClick={() => setIsDialogOpen(false)}
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
