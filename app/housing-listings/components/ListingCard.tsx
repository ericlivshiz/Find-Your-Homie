"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useToast } from "../../../hooks/use-toast";

interface Listing {
  id: number;
  title: string;
  images: string[];
  price: number;
  location: string;
  applicationStatus: string;
  websiteUrl: string;
}

interface ListingCardProps {
  listing: Listing;
  onCardClick: (housingId: number) => void;
}

export function ListingCard({ listing, onCardClick }: ListingCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleViewDetails = () => {
    onCardClick(listing.id);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Unliked" : "Liked",
      description: `You have ${
        isLiked ? "unliked" : "liked"
      } this listing.`,
      variant: isLiked ? "destructive" : "default",
    });
  };

  // Determine variant and text color for badge
  const isOpenNow = listing.applicationStatus === "Open Now";
  const badgeVariant = isOpenNow ? "default" : "secondary";
  const badgeTextClass = isOpenNow ? "text-white" : "text-black";

  return (
    <Card
      className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300"
      onClick={handleViewDetails}
    >
      {/* Heart (Like) Icon */}
      <div className="absolute top-2 right-2 z-10">
        <Heart
          onClick={toggleLike}
          strokeWidth={4}
          className={`cursor-pointer ${
            isLiked ? "text-red-500" : "text-black"
          }`}
        />
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src={listing.images[0]}
          alt={listing.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge
          variant={badgeVariant}
          className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold ${badgeTextClass}`}
        >
          {listing.applicationStatus}
        </Badge>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{listing.title}</h4>
        <p className="text-gray-300 text-sm mb-1">{listing.location}</p>
        <p className="text-xl font-semibold text-blue-400">
          ${listing.price}/month
        </p>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="p-6 bg-gray-900 bg-opacity-75 flex justify-center">
        <button
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            window.open(listing.websiteUrl, "_blank");
          }}
        >
          View Details
        </button>
      </CardFooter>
    </Card>
  );
}
