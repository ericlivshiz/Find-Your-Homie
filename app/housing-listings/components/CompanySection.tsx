import Image from 'next/image'
import { ListingCard } from './ListingCard'
import { StarRating } from './StarRating'

interface Company {
  id: number
  name: string
  logo: string
  rating: number
  listings: Listing[]
}

interface Listing {
  id: number
  title: string
  images: string[]
  price: number
  location: string
  applicationStatus: string
}

export function CompanySection({ company }: { company: Company }) {
  return (
    <section>
      <div className="flex items-center mb-4">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <h3 className="text-xl font-semibold">{company.name}</h3>
        <div className="ml-4">
          <StarRating rating={company.rating} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {company.listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  )
}

