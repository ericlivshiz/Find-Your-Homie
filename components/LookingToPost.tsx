"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs"; // For checking auth
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LookingToPost() {
  const router = useRouter();
  const DemoMode = 1; // Set this to 1 for demo mode and 0 for regular mode
  const were = "We're";

  // Mock steps for your UI
  const steps = [
    {
      title: "Post Your Property",
      description:
        "Showcase your property to UCSB students with detailed descriptions and photos for quick and effective renting.",
    },
    {
      title: "Post Your Profile",
      description:
        "Create a profile to connect with potential roommates or students looking for housing.",
    },
  ];

  // State for controlling the "not logged in" dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Typed text animation
  const devMessage = "We're working hard on bringing you the best experience! Our dashboard is under construction and will be available soon. Stay tuned!";
  const regularMessage = "Thanks for helping our Gaucho community thrive! To ensure a safe and authentic environment, we require a UCSB email for sign-up. Once you're logged in, you'll be redirected to your Dashboard in the Edit Posts section—where we'll guide you, step by step, through creating or updating your posts. Let's get you started!";

  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const message = DemoMode === 1 ? devMessage : regularMessage;
  const words = message.split(" ");
  

  // Reveal words one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setTypedWords((prev) => [...prev, words[currentIndex]]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 75); // Adjust speed here (ms between words)

    return () => clearInterval(timer);
  }, [currentIndex, words]);

  // Reset typed animation text whenever the dialog closes or reopens
  useEffect(() => {
    if (!isDialogOpen) {
      setTypedWords([]);
      setCurrentIndex(0);
    }
  }, [isDialogOpen]);

  // Route to /dashboard/edit-posts if signed in
  const navigateToDashboard = () => {
    router.push("/dashboard/edit-posts");
  };

  const handleButtonClick = () => {
    if (DemoMode === 1) {
      setIsDialogOpen(false); // Close the dialog in demo mode
    } else {
      navigateToDashboard(); // Navigate to the dashboard in regular mode
    }
  };

  return (
    <div className="relative overflow-hidden py-16 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black animate-gradient-xy"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Looking To Post?</h1>
        <h2 className="text-xl text-center mb-12 text-yellow-300">Find the right audience for your housing needs:</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <SignedOut key={index}>
              {/* If user is SignedOut => show the step card that triggers the dialog */}
              <div
                onClick={() => setIsDialogOpen(true)}
                className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-md hover:shadow-2xl hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all text-center cursor-pointer border border-gray-700"
              >
                <div className="text-4xl mb-4">
                  {index === 0 ? "📝🏠" : "👤🏠"}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </SignedOut>
          ))}

          {/* If user is SignedIn => directly route on step click */}
          {steps.map((step, index) => (
            <SignedIn key={`signed-in-${index}`}>
              <div
                onClick={navigateToDashboard}
                className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-md hover:shadow-2xl hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 transition-all text-center cursor-pointer border border-gray-700"
              >
                <div className="text-4xl mb-4">
                  {index === 0 ? "📝🏠" : "👤🏠"}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </SignedIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-yellow-300">
            Our platform simplifies the process of sharing your property or profile with the UCSB community.
          </p>
        </div>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-gray-700 opacity-25 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse"></div>
      </div>

      {/* Dialog for non-logged in users */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] max-w-md bg-gradient-to-br from-slate-800 to-black text-gray-200 rounded-lg border border-gray-700 p-6 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-white mb-4">
              {DemoMode === 1 ? `${were} still working on this!` : "Ready to Post?"}
            </DialogTitle>
          </DialogHeader>

          {/* Typed text animation (simpler styling) */}
          <p className="text-sm leading-relaxed text-gray-300">{typedWords.join(" ")}</p>

          <div className="flex justify-end mt-6">
            <Button
              variant="outline"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
              onClick={handleButtonClick}
            >
              {DemoMode === 1 ? "Ok, Got It" : "Take me to Sign In"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

