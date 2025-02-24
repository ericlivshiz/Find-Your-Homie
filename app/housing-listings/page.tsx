"use client";

import { useState } from "react";
import { ListingsSidebar } from "@/components/ListingsSidebar";
import SearchBar from './components/SearchBar'
import { CompanySection } from './components/CompanySection'
import Header from "@/components/Header";
import FooterSecion from "@/components/footer-section";
import { MobileNavbar } from "@/components/MobileListingsNavbar";
import { useRouter } from "next/navigation";

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
      },
      {
        id: 104,
        title: '3 Bedrooms/ 2 Bathrooms',
        images: ['/assets/iv-property-4.png'],
        price: 1200,
        location: '6522 Del Playa Drive - Unit A, Isla Vista',
        applicationStatus: 'Leased through June 2026',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6731-pasado-road-isla-vista-ca-2/unit-a/',
      },
      {
        id: 105,
        title: '2 Bedrooms/ 1 Bathroom',
        images: ['/assets/iv-property-5.png'],
        price: 1200,
        location: '6750 Del Playa Drive - Unit A, Isla Vista',
        applicationStatus: 'Leased through June 2026',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6617-trigo-road-isla-vista-ca-2/unit-a/',
      },
      {
        id: 106,
        title: '2 Bedrooms/ 1 Bathroom',
        images: ['/assets/iv-property-6.png'],
        price: 1200,
        location: '6516 El Nido Lane - Unit 1, Isla Vista',
        applicationStatus: 'Leased through June 2026',
        websiteUrl: 'https://www.ivproperties.com/properties/isla-vista-properties/6516-el-nido-ln-isla-vista-ca-1/unit-1/',
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
      },
      {
        id: 204,
        title: '2 Beds / 2  Baths / 5 Occupants',
        images: ['/assets/wolfe-property-4.png'],
        price: 4450,
        location: '6609 Sabado Tarde Road, #A, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
        websiteUrl: 'https://www.rlwa.com/listings/detail/7c5da76b-d5a7-4e90-afef-d341a2f24cc0',
      },
      {
        id: 205,
        title: '2 Beds / 2 Baths / 5 Occupants',
        images: ['/assets/wolfe-property-5.png'],
        price: 4800,
        location: '6657 El Colegio Road, #44, Isla Vista, CA 93117',
        applicationStatus: 'Available 06/25/2025',
        websiteUrl: 'https://www.rlwa.com/listings/detail/7c5da76b-d5a7-4e90-afef-d341a2f24cc0',
      },
      {
        id: 206,
        title: '4 Beds / 2 Baths / 9 Occupants',
        images: ['/assets/wolfe-property-6.png'],
        price: 11000,
        location: '6745 Del Playa, #A, Goleta, CA 93117',
        applicationStatus: 'Available 06/25/2025',
        websiteUrl: 'https://www.rlwa.com/listings/detail/1627ba76-311b-426f-afc0-c4d622e01be2',
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
        title: '3 Bedroom / 2 Bathroom (Gas/Water covered)',
        images: ['/assets/playa-property-1.png'],
        price: 10250,
        location: '6653 Del PLaya,5, Goleta, CA 93117',
        applicationStatus: 'Available 07/15/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/604dc8b1-f08d-4979-8e79-23b9e3474af7',
      },
      {
        id: 302,
        title: '4 Bedroom / 2 Bathroom (2 refrigerators)',
        images: ['/assets/playa-property-2.png'],
        price: 12000,
        location: '6777 Del PLaya, 4, Goleta, CA 93117',
        applicationStatus: 'Available 07/17/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/b871ff3c-4f66-447c-af55-78232bbacd92',
      },
      {
        id: 303,
        title: '3 Bedroom / 2.5 Bathroom (Hot Tub)',
        images: ['/assets/playa-property-3.png'],
        price: 14000,
        location: '6533 El Nido, Goleta, CA 93117',
        applicationStatus: 'Available 07/14/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/123f1a77-7696-45f4-80c8-05ca49ad64e6',
      },
      {
        id: 304,
        title: '6 Bedroom / 2.5 Bathroom',
        images: ['/assets/playa-property-4.png'],
        price: 19000,
        location: '6649 Del Playa, Goleta, CA 93117',
        applicationStatus: 'Available 07/01/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/89c04565-5acf-429b-a639-8d5209cd1020',
      },
      {
        id: 305,
        title: '2 Bedroom / 2 Bathroom ',
        images: ['/assets/playa-property-5.png'],
        price: 7200,
        location: '6736 Sueno, C, Goleta, CA 93117',
        applicationStatus: 'Available 07/14/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/e1f7400e-0595-49a9-a9f3-69b948515968',
      },
      {
        id: 306,
        title: '3 Bedroom / 2 Bathroom',
        images: ['/assets/playa-property-6.png'],
        price: 10250,
        location: '6561 Del Playa, 3, Goleta, CA 93117',
        applicationStatus: 'Available 07/03/2025',
        websiteUrl: 'https://www.playalifeiv.com/listings/detail/0cc66068-7d28-4a20-90eb-d2d87144c826',
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
      },
      {
        id: 404,
        title: '2 Bedroom / 2 Bath',
        images: ['/assets/meridian-group-property-4.png'],
        price: 3025,
        location: '426 Ellwood Beach Drive 07',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=7336',
      },
      {
        id: 405,
        title: '1 Bedroom / 1 Bath',
        images: ['/assets/meridian-group-property-5.png'],
        price: 2500,
        location: '1020 Cacique Street #03',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=175',
      },
      {
        id: 406,
        title: '1 Bedroom / 1 Bath',
        images: ['/assets/meridian-group-property-6.png'],
        price: 2950,
        location: '627 De La Vina Street #01',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://meridiangrouprem.com/details/?ID=1711',
      }
    ],
    
  },
  {
    id: 5,
    name: 'Capri at Isla Vista',
    logo: '/assets/capri-at-isla-vista-logo.png',
    rating: 4.0,
    website: 'https://capriiv.com/',
    listings: [
      {
        id: 501,
        title: 'Seville I',
        images: ['/assets/capri-at-isla-vista-property-1.png'],
        price: 1659,
        location: '6598 Seville Rd, Isla Vista, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/#1seville-I',
      },
      {
        id: 502,
        title: 'Seville II',
        images: ['/assets/capri-at-isla-vista-property-2.png'],
        price: 1469,
        location: '6598 Seville Rd, Isla Vista, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/#1seville-I',
      },
      {
        id: 503,
        title: 'Abrego Gaucho',
        images: ['/assets/capri-at-isla-vista-property-3.png'],
        price: 1469,
        location: '6778 Abrego Rd, Goleta, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/#3',
      },
      {
        id: 504,
        title: 'Abrego Playa',
        images: ['/assets/capri-at-isla-vista-property-4.png'],
        price: 1399,
        location: '6778 Abrego Rd, Goleta, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/',
      },
      {
        id: 505,
        title: 'Abrego Surf',
        images: ['/assets/capri-at-isla-vista-property-5.png'],
        price: 1399,
        location: '6778 Abrego Rd, Goleta, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/',
      },
      {
        id: 506,
        title: 'Abrego Sunshine Large',
        images: ['/assets/capri-at-isla-vista-property-6.png'],
        price: 1739,
        location: '6778 Abrego Rd, Goleta, CA 93117',
        applicationStatus: 'Open Now',
        websiteUrl: 'https://capriiv.com/floor-plans/',
      }
    ]
  }
]

export default function HousingListingsPage() {
  const router = useRouter();
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
  
  const handleCardClick = (housingId: number) => {
    router.push(`/housing-details/${housingId}`);
  };

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
                <CompanySection key={company.id} company={company} onCardClick={handleCardClick} />
              ))}
            </div>
          </main>
        </div>
      </div>
      <FooterSecion />
    </div>
  );
  
}


