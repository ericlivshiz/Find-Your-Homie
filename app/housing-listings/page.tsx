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
    website: 'https://www.ivproperties.com/',
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
    website: 'https://www.rlwa.com/isla-vista-listings',
    listings: [
      {
        id: 201,
        title: '2 Bedroom/ 2 Bathroom/ 5 Occupants',
        images: ['/assets/wolfe-property-1.png'],
        price: 4250,
        location: '6674 Trigo Road, #01, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
      },
      {
        id: 202,
        title: '2 Bedroom/ 1 Bath/ 5 Occupants',
        images: ['/assets/wolfe-property-2.png'],
        price: 3900,
        location: '6514 Sabado Tarde Road, #01, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
      },
      {
        id: 203,
        title: '2 Bedroom/ 1 Bath/ 5 Occupants',
        images: ['/assets/wolfe-property-3.png'],
        price: 4300,
        location: '6688 Del Playa Drive, #A, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
      }
    ],
  },
  {
    id: 3,
    name: 'Playa Life I.V.',
    logo: '/assets/playa-life-logo.png',
    rating: 4.0,
    website: 'https://www.playalifeiv.com/vacancies',
    listings: [
      {
        id: 301,
        title: '3 Bedroom/ 2 Bathroom (Gas/Water covered)',
        images: ['/assets/playa-property-1.png'],
        price: 10250,
        location: '6653 Del PLaya,5, Goleta, CA 93117',
        applicationStatus: 'Available 07/15/2025',
      },
      {
        id: 302,
        title: '4 Bedroom/ 2 Bathroom (2 refrigerators)',
        images: ['/assets/playa-property-2.png'],
        price: 12000,
        location: '6777 Del PLaya, 4, Goleta, CA 93117',
        applicationStatus: 'Available 07/17/2025',
      },
      {
        id: 303,
        title: '3 Bedroom/ 2.5 Bathroom (Hot Tub)',
        images: ['/assets/playa-property-3.png'],
        price: 14000,
        location: '6533 El Nido, Goleta, CA 93117',
        applicationStatus: 'Available 07/14/2025',
      }
    ]
  }
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

        {/* <div className="mb-8">
          <Filters />
        </div> */}

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

