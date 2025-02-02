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

  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedWords((prev) => [...prev, words[currentIndex]]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 75);

    return () => clearInterval(timer);
  }, [currentIndex, words]);

  const handleJoinWaitlist = () => {
    toast({
      title: "Join Waitlist",
      description: "You have successfully joined the waitlist!",
      variant: "default",
    });
    // Redirect to the waitlist page or show additional actions
  };

  return (
    <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible}>
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
