import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ListingsSections() {
  const router = useRouter();

  const navigateToHousingListings = () => {
    router.push("/housing-listings");
  };

  const navigateToRoommateMatching = () => {
    router.push("/roommate-matching");
  };

  // Which dialog is open: "housing" or "roommates" (or null if none)
  const [activeDialog, setActiveDialog] = useState<"housing" | "roommates" | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Typed text data
  const housingMessage =
    "We're thrilled you're looking to explore housing listings! No sign-in is required here—feel free to browse all you want. Hit OK to jump right into our listings. Once you're on the page you can click on Find Housing to filter or A.I Search!";
  const roommateMessage =
    "Looking to find compatible roommates? You've come to the right place, and you can do it all without logging in. Just tap OK to dive in and start matching. Once you're on the page you can click on Find Roommates to filter or A.I Search!";
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine which message to display based on the active dialog
  const message = activeDialog === "housing" ? housingMessage : roommateMessage;
  const words = message.split(" ");

  // Reveal words one by one when the dialog is open
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDialogOpen && activeDialog && currentIndex < words.length) {
      timer = setInterval(() => {
        setTypedWords((prev) => [...prev, words[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 40); // Speed in ms between words
    }

    return () => clearInterval(timer);
  }, [isDialogOpen, activeDialog, currentIndex, words]);

  // Reset typed animation text whenever the dialog closes or reopens
  useEffect(() => {
    if (!isDialogOpen) {
      setTypedWords([]);
      setCurrentIndex(0);
    }
  }, [isDialogOpen]);

  // Click handlers for each card
  const handleHousingClick = () => {
    setActiveDialog("housing");
    setIsDialogOpen(true);
  };

  const handleRoommateClick = () => {
    setActiveDialog("roommates");
    setIsDialogOpen(true);
  };

  // "OK" button in the dialog—route user accordingly
  const handleDialogConfirm = () => {
    if (activeDialog === "housing") {
      navigateToHousingListings();
    } else if (activeDialog === "roommates") {
      navigateToRoommateMatching();
    }
    setIsDialogOpen(false);
  };

  return (
    <div>
      <section className="py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl font-extrabold text-center mb-8 text-white">
            Check Out Our Listings!
          </h3>
          <h4 className="text-xl text-center mb-12 text-yellow-300">
            View Housing and UCSB Profiles | No Sign-in Needed
          </h4>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {/* Card for Housing */}
            <div
              onClick={handleHousingClick}
              className="
                relative
                bg-gradient-to-br
                from-gray-800
                via-gray-900
                to-black
                p-6
                rounded-xl
                shadow-md
                hover:shadow-2xl
                hover:from-gray-700
                hover:via-gray-800
                hover:to-gray-900
                transition-all
                text-center
                cursor-pointer
                border
                border-gray-700
              "
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Find Housing Quickly
              </h3>
              <p className="text-slate-200">
                Browse through a wide range of listings tailored for UCSB students.
              </p>
            </div>

            {/* Card for Roommates */}
            <div
              onClick={handleRoommateClick}
              className="
                relative
                bg-gradient-to-br
                from-gray-800
                via-gray-900
                to-black
                p-6
                rounded-xl
                shadow-md
                hover:shadow-2xl
                hover:from-gray-700
                hover:via-gray-800
                hover:to-gray-900
                transition-all
                text-center
                cursor-pointer
                border
                border-gray-700
              "
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Connect with Roommates
              </h3>
              <p className="text-slate-200">
                Find compatible roommates based on your preferences and lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-gray-600 opacity-30 blur-3xl rounded-full -top-10 -left-20 animate-pulse"></div>
        </div>
      </section>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="
            sm:max-w-[425px]
            max-w-md
            bg-gradient-to-br
            from-slate-800
            to-black
            text-gray-200
            rounded-lg
            border
            border-gray-700
            p-6
            shadow-xl
          "
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-white mb-4">
              Quick Heads-up
            </DialogTitle>
          </DialogHeader>

          {/* Typed text animation */}
          <p className="text-sm leading-relaxed text-gray-300">
            {typedWords.join(" ")}
          </p>

          <div className="flex justify-end mt-6">
            <Button
              variant="outline"
              className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-md
                font-semibold
                shadow-md
                hover:bg-blue-500
                active:bg-blue-700
                transition-colors
              "
              onClick={handleDialogConfirm}
            >
              OK, Got It
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
