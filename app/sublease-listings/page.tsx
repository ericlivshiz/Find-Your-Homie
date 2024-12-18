import BlueHeader from "@/components/BlueHeader";
import SubleaseCard from './components/SubleaseCard'
import PostSubleaseButton from './components/PostSubleaseButton'

// This is mock data. In a real application, you'd fetch this from an API or database.
const subleases = [
  {
    id: 1,
    title: "2-Bedroom Apartment on Trigo",
    rent: 1500,
    moveInDate: "2023-09-01",
    moveOutDate: "2024-06-30",
    location: "Isla Vista, CA",
    imageUrl: "/assets/playa-property-1.png"
  },
  {
    id: 2,
    title: "Studio near UCSB",
    rent: 1200,
    moveInDate: "2023-08-15",
    moveOutDate: "2024-05-31",
    location: "Goleta, CA",
    imageUrl: "/assets/playa-property-2.png"
  },
  {
    id: 3,
    title: "3-Bedroom Apartment on El Nido",
    rent: 1800,
    moveInDate: "2023-07-01",
    moveOutDate: "2024-04-30",
    location: "Goleta, CA",
    imageUrl: "/assets/playa-property-3.png"
  },
  {
    id: 4,
    title: "2-Bedroom Apartment on Trigo",
    rent: 1750,
    moveInDate: "2023-09-01",
    moveOutDate: "2024-06-30",
    location: "Isla Vista, CA",
    imageUrl: "/assets/iv-property-1.png"
  }
  // Add more mock data as needed
]

export default function SubleaseListingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Sublease Listings</h1>
        <PostSubleaseButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {subleases.map((sublease) => (
            <SubleaseCard key={sublease.id} sublease={sublease} />
          ))}
        </div>
      </div>
    </div>
  )
}

