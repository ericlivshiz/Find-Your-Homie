"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  Users,
  Flame,
  ThumbsUp,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const images = [
  "/assets/img-placeholder.png",
  "/assets/img-placeholder.png",
  "/assets/img-placeholder.png",
  "/assets/img-placeholder.png",
];

export default function HousingDetailsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogMessage = "What'd You Like About this Listing?"

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const routeToHousingListings = () => {
    router.push("/housing-listings");
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const applicants = 12; // Example number of applicants

  let hotnessMessage = "";
  let hotnessIcon = <ThumbsUp className="w-5 h-5 mr-2" />;
  let hotnessColor = "bg-green-500";

  if (applicants >= 8) {
    hotnessMessage = "Really Hot Place!";
    hotnessIcon = <Flame className="w-5 h-5 mr-2" />;
    hotnessColor = "bg-red-500";
  } else if (applicants >= 4) {
    hotnessMessage = "Pretty Hot Place!";
    hotnessIcon = <AlertTriangle className="w-5 h-5 mr-2" />;
    hotnessColor = "bg-yellow-500";
  } else {
    hotnessMessage = "Good Chance to Apply!";
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <Header />

      <div className="container mx-auto px-6 py-4 text-center">
        <h2 className="text-2xl font-bold text-white">123 Testing Dr, Isla Vista, CA</h2>
      </div>

      <div className="container mx-auto px-6 py-4 flex justify-center space-x-4 mb-8">
        <Button 
          onClick={routeToHousingListings}  // Go back to the previous page
          className="bg-blue-600 hover:bg-blue-700 font-semibold text-white px-6 py-3 rounded-lg shadow-md transition duration-200 flex items-center"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Listings
        </Button>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-black hover:bg-gray-800 border border-white font-semibold text-white px-6 py-3 rounded-lg shadow-md transition duration-200 flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" /> More Places Like This
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-b from-black via-slate-900 to-black animate-gradient-xy text-white rounded-lg p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">{dialogMessage}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 relative">
              <Sparkles className="absolute left-3 top-3 w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Get Similar Results With A.I"
                className="w-full pl-10 pr-4 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 relative">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, index) => (
              <div key={index} className="focus:outline-none">
                <Image
                  src={src || "/assets/img-placeholder.png"}
                  alt={`House image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-[60vh] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-75 rounded-full px-3 py-1 text-sm">
            {currentSlide + 1} / {images.length}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
            onClick={goToPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
            onClick={goToNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg relative"
          >
            <div
              className={`absolute top-0 right-0 mt-4 mr-4 px-4 py-2 rounded-lg text-sm font-bold flex items-center ${hotnessColor} animate-pulse`}
            >
              {hotnessIcon}
              <span>{hotnessMessage}</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Luxurious Waterfront Villa
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>4 Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                <span>3 Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-2" />
                <span>3,500 sq ft</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{applicants} Applicants</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the epitome of luxury living in this stunning
              waterfront villa. Boasting breathtaking views and state-of-the-art
              amenities, this property offers an unparalleled lifestyle for the
              discerning homeowner.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">
                $8000/mo
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500">
                Submit An Application
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
