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
    console.log("Opening URL:", listing.websiteUrl)
    window.open(listing.websiteUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden bg-slate-700 bg-opacity-80">
      <Image
        src={listing.images[0]}
        alt={listing.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover "
      />
      <CardContent className="p-4">
        <h4 className="font-extrabold text-lg mb-2">{listing.title}</h4>
        <p className="font-bold mb-2">{listing.location}</p>
        <p className="font-bold text-lg mb-2">${listing.price}/month</p>
        <Badge variant={listing.applicationStatus === 'Open Now' ? 'default' : 'secondary'}>
          {listing.applicationStatus}
        </Badge>
      </CardContent>
      <CardFooter className="bg-slate-700 bg-opacity-80 p-4">
        <button
          className="w-full bg-slate-800 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </CardFooter>
    </Card>
  );
}

