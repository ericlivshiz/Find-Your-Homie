'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Listing {
  id: number
  title: string
  images: string[]
  price: number
  location: string
  applicationStatus: string
  websiteUrl: string
}

export function ListingCard({ listing }: { listing: Listing }) {
  const handleViewDetails = () => {
    console.log("Opening URL:", listing.websiteUrl);
    window.open(listing.websiteUrl, "_blank");
  };

  return (
    <Card className="rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300">
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
          variant={listing.applicationStatus === "Open Now" ? "default" : "secondary"}
          className="absolute top-4 left-4 px-3 py-1 bg-opacity-90 text-sm font-semibold text-white bg-blue-600 rounded-full"
        >
          {listing.applicationStatus}
        </Badge>
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{listing.title}</h4>
        <p className="text-gray-300 text-sm mb-1">{listing.location}</p>
        <p className="text-xl font-semibold text-blue-400">${listing.price}/month</p>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="p-6 bg-gray-900 bg-opacity-75 flex justify-center">
        <button
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </CardFooter>
    </Card>
  );
}


