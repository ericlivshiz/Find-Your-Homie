"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // Importing Shadcn Dialog components
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WelcomeDialog = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(true);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const message =
    "We wanted to show off a little demo in hopes of getting feedback and finding people interested in contributing. Join our waitlist today, and be the first to know when we launch!";

  const words = message.split(" ");

  // Check localStorage on initial load to see if dialog was already closed
  useEffect(() => {
    const dialogClosed = localStorage.getItem("dialogClosed");
    if (dialogClosed === "true") {
      setIsDialogVisible(false); // Hide the dialog if it's already closed
    }

    // Handle the typing effect
    const timer = setInterval(() => {
      setTypedWords((prev) => [...prev, words[currentIndex]]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 75);

    return () => clearInterval(timer);
  }, [currentIndex, words]);

  // Close the dialog and store the state in localStorage
  const handleDialogClose = () => {
    setIsDialogVisible(false);
    localStorage.setItem("dialogClosed", "true"); // Persist the state in localStorage
  };

  const handleJoinWaitlist = () => {
    handleDialogClose();

    // Scroll to the bottom of the page (where the Join Waitlist section is)
    const joinWaitlistSection = document.getElementById("join-waitlist-section");
    if (joinWaitlistSection) {
      joinWaitlistSection.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };

  return (
    <Dialog open={isDialogVisible} onOpenChange={(open) => { setIsDialogVisible(open); if (!open) handleDialogClose(); }}>
      <DialogTrigger asChild>
        <div />
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[700px] max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-lg p-8 shadow-2xl transition-all"
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-extrabold text-white mb-4 text-center">
            Welcome to Find Your Homie
          </DialogTitle>
        </DialogHeader>

        {/* Typed text animation */}
        <p className="text-lg text-center leading-relaxed text-gray-200">
          {typedWords.join(" ")}
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
