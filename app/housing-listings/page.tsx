import BlueHeader from "@/components/BlueHeader";
import { SearchBar } from './components/SearchBar'
import { Filters } from './components/Filters'
import { CompanySection } from './components/CompanySection'

const mockCompanies = [
  {
    id: 1,
    name: 'IV Properties',
    logo: '/assets/iv-properties-logo.png',
    rating: 4.5,
    listings: [
      {
        id: 101,
        title: '4 Bedroom + 1 study room/ 3 Bathroom',
        images: ['/assets/iv-property-1.png'],
        price: 1250,
        location: '6850 Del Playa Dr, Isla Vista, CA',
        applicationStatus: 'Open Now',
      },
      {
        id: 102,
        title: '3 Bedroom + 1 garage/ 2 Bathroom',
        images: ['/assets/iv-property-2.png'],
        price: 1200,
        location: '6611 Pasado Road - Unit A, Isla Vista',
        applicationStatus: 'Leased through June 2026',
      },
      {
        id: 103,
        title: '2 Bedrooms/ 1.5 Bathrooms',
        images: ['/assets/iv-property-3.png'],
        price: 1150,
        location: '6710 Pasado Road - Unit 1, Isla Vista',
        applicationStatus: 'Leased through June 2026',
      }
    ],
  },
  {
    id: 2,
    name: 'Wolfe & Associates',
    logo: '/assets/wolfe-logo.png',
    rating: 4.2,
    listings: [
      {
        id: 201,
        title: '2 Bedroom/ 2 Bathroom/ 5 Occupants',
        images: ['/assets/wolfe-property-1.png'],
        price: 4250,
        location: '6674 Trigo Road, #01, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
      },
    ],
  },
]

export default function HousingListingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Looking for Housing</h2>
        
        <div className="mb-6">
          <SearchBar />
        </div>

        <div className="mb-8">
          <Filters />
        </div>

        <div className="space-y-12">
          {mockCompanies.map((company) => (
            <CompanySection key={company.id} company={company} />
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Built by Gauchos, for Gauchos.</p>
        </div>
      </footer>
    </div>
  )
}

