"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const mockListings = [
  { id: 1, title: "Cozy Studio Near Campus", createdAt: "about 2 weeks ago" },
  { id: 2, title: "Shared 2BR Apartment", createdAt: "about 3 weeks ago" },
  { id: 3, title: "Spacious 3BR House", createdAt: "about 8 weeks ago" },
]

export function ListingList() {
  const [listings, setListings] = useState(mockListings)

  const handleDelete = (id: number) => {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  return (
    <div className="space-y-4">
      {listings.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          You have no current listings.
        </div>
      ) : (
        listings.map((listing) => (
          <div
            key={listing.id}
            className="flex items-center justify-between rounded-lg bg-[#1A1F26] p-4 hover:bg-[#1E242D] transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded bg-gray-800 flex items-center justify-center">
                <Image src="/assets/img-placeholder.png" alt="Listing icon" width={24} height={24} className="text-gray-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">{listing.title}</h3>
                <p className="text-sm text-gray-400">Created {listing.createdAt}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(listing.id)}
              className="text-gray-400 hover:text-red-400 hover:bg-red-400/10"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        ))
      )}
    </div>
  )
}

