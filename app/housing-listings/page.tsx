"use client";

import { useState } from "react";
import { ListingsSidebar } from "@/components/ListingsSidebar";
import BlueHeader from "@/components/BlueHeader";
import SearchBar from './components/SearchBar'
import { Filters } from './components/Filters'
import { CompanySection } from './components/CompanySection'
import Header from "@/components/Header";
import FooterSecion from "@/components/footer-section";
import { MobileNavbar } from "@/components/MobileListingsNavbar";
import CtrlDialogListener from './components/CtrlDialogListener'

interface Listing {
  id: number;
  title: string;
  images: string[];
  price: number;
  location: string;
  applicationStatus: string;
  websiteUrl: string;
}

const mockCompanies = [
  {
    id: 1,
    name: 'IV Properties',
    logo: '/assets/svg/ivproperties-logo-name.svg',
    rating: 4.5,
    website: 'https://www.ivproperties.com/properties/isla-vista-properties/',
    listings: [
      {
        id: 101,
        title: '4 Bedroom + 1 study room/ 3 Bathroom',
        images: ['/assets/iv-property-1.png'],
        price: 1250,
        location: '6850 Del Playa Dr, Isla Vista, CA',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6850-del-playa/',
      },
      {
        id: 102,
        title: '3 Bedroom + 1 garage/ 2 Bathroom',
        images: ['/assets/iv-property-2.png'],
        price: 1200,
        location: '6611 Pasado Road - Unit A, Isla Vista',
        applicationStatus: 'Leased through June 2026',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6611-pasado-road-isla-vista-ca/unit-a/',
      },
      {
        id: 103,
        title: '2 Bedrooms/ 1.5 Bathrooms',
        images: ['/assets/iv-property-3.png'],
        price: 1150,
        location: '6710 Pasado Road - Unit 1, Isla Vista',
        applicationStatus: 'Leased through June 2026',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6710-pasado-road-isla-vista-ca/unit-1/',
      }
    ],
  },
  {
    id: 2,
    name: 'Wolfe & Associates',
    logo: '/assets/wolfe-logo-2.png',
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
        websiteUrl: 'https://www.rlwa.com/listings/detail/c0ed2858-3b45-4249-9aca-144ffcac2bd1',
      },
      {
        id: 202,
        title: '2 Bedroom/ 1 Bath/ 5 Occupants',
        images: ['/assets/wolfe-property-2.png'],
        price: 3900,
        location: '6514 Sabado Tarde Road, #01, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
        websiteUrl: 'https://www.rlwa.com/listings/detail/f69d8d29-f188-4d42-a244-dfd975ed5f11',
      },
      {
        id: 203,
        title: '2 Bedroom/ 1 Bath/ 5 Occupants',
        images: ['/assets/wolfe-property-3.png'],
        price: 4300,
        location: '6688 Del Playa Drive, #A, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
        websiteUrl: 'https://www.rlwa.com/listings/detail/23696b90-8780-4da1-ad45-f23b067e9caf',
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
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/604dc8b1-f08d-4979-8e79-23b9e3474af7',
      },
      {
        id: 302,
        title: '4 Bedroom/ 2 Bathroom (2 refrigerators)',
        images: ['/assets/playa-property-2.png'],
        price: 12000,
        location: '6777 Del PLaya, 4, Goleta, CA 93117',
        applicationStatus: 'Available 07/17/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/b871ff3c-4f66-447c-af55-78232bbacd92',
      },
      {
        id: 303,
        title: '3 Bedroom/ 2.5 Bathroom (Hot Tub)',
        images: ['/assets/playa-property-3.png'],
        price: 14000,
        location: '6533 El Nido, Goleta, CA 93117',
        applicationStatus: 'Available 07/14/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/123f1a77-7696-45f4-80c8-05ca49ad64e6',
      }
    ],
  },
  {
    id: 4,
    name: 'Meridian Group',
    logo: '/assets/MeridianIcon.png',
    rating: 4.0,
    website: 'https://meridiangrouprem.com/available-rentals/',
    listings: [
      {
        id: 401,
        title: '1 Bedroom / 1 Bath',
        images: ['/assets/meridian-group-property-1.png'],
        price: 2650,
        location: '223 EllWood Beach Drive, 04, Goleta, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=7313',
      },
      {
        id: 402,
        title: '1 Bedroom / 1 Bath',
        images: ['/assets/meridian-group-property-2.png'],
        price: 1995,
        location: '165 N. 5th Street #201',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=595',
      },
      {
        id: 403,
        title: '1 Bedroom / 1 Bath',
        images: ['/assets/meridian-group-property-3.png'],
        price: 2650,
        location: '3720 Monterey Pine Street Unit D212',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=2450',
      }
    ],
    
  }
]

export default function HousingListingsPage() {
  const [housingFilters, setHousingFilters] = useState({
    isDialogOpen: false,
    searchTerm: "",
    housingType: "all",
    occupancy: "any",
    beds: "any",
    baths: "any",
    rentType: "noMax",
    minPrice: "",
    maxPrice: "",
  });
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* <CtrlDialogListener housingFilters={housingFilters} setHousingFilters={setHousingFilters}/> */}
      <div className="flex flex-grow">
        {/* Sidebar visible on medium and larger screens */}
        <div className="hidden md:block">
          <ListingsSidebar />
        </div>
  
        <div className="flex-grow">
          <Header />
          {/* Mobile Navbar placed under Header for small screens */}
          <div className="md:hidden">
            <MobileNavbar />
          </div>
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-300">Looking for Housing</h2>
            <div className="mb-6">
              <SearchBar housingFilters={housingFilters} setHousingFilters={setHousingFilters}/>
            </div>
            <div className="space-y-12">
              {mockCompanies.map((company) => (
                <CompanySection key={company.id} company={company} />
              ))}
            </div>
          </main>
        </div>
      </div>
      <FooterSecion />
    </div>
  );
  
}


