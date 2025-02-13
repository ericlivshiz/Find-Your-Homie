import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ListingCard } from './ListingCard'
import { StarRating } from './StarRating'

interface Company {
  id: number
  name: string
  logo: string
  rating: number
  listings: Listing[]
  website: string
}

interface Listing {
  id: number
  title: string
  images: string[]
  price: number
  location: string
  applicationStatus: string
  websiteUrl: string
}

export function CompanySection({ company, onCardClick }: { company: Company; onCardClick: (housingId: number) => void; }) {
  const [avgRating, setAvgRating] = useState<number | null>(null)

  useEffect(() => {
    const fetchRating = async () => {
      const response = await fetch(`/api/avgRating?companyId=${company.id}`)
      const data = await response.json()

      if (data.averageRating) {
        setAvgRating(data.averageRating)
      }
    }

    fetchRating()
  }, [company.id])

  return (
    <section>
      <div className="flex items-center mb-4">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={50}
          height={50}
          className="mr-4"
        />
        <Link href={`/company-reviews/${company.id}`} className="text-xl font-semibold hover:underline">
          {company.name}
        </Link>
        <div className="ml-4">
          {avgRating !== null ? (
            <StarRating rating={avgRating} />
          ) : (
            <span className="text-gray-400">Loading...</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {company.listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onCardClick={onCardClick} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          See More
        </a>
      </div>
    </section>
  )
}
