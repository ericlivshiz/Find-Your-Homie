"use client";

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter(); 

  const navigateToHousingListings = () => {
    router.push('/housing-listings');
  };

  const navigateToSubleaseListings = () => {
    router.push('/sublease-listings');
  };

  const navigateToRoommateMatching = () => {
    router.push('/roommate-matching');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Next Home or Roommate at UCSB — Fast and Easy
              </h2>
              <p className="text-xl mb-6">
                Browse listings, post subleases, and connect with roommates in one place.
              </p>
              <div className="space-x-4">
                <Button variant="secondary" size="lg" onClick={navigateToHousingListings}>
                  Browse Listings
                </Button>
                <Button variant="outline" size="lg" className="text-blue-600" onClick={navigateToSubleaseListings}>
                  Post a Listing
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/sb-ai-pic.jpg"
                alt="App Interface Mockup"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard
                title="Find Housing Quickly"
                description="Browse through a wide range of listings tailored for UCSB students."
                icon="🏠"
                onClick={navigateToHousingListings}
              />
              <BenefitCard
                title="Post Subleases Easily"
                description="List your space in minutes and reach thousands of potential tenants."
                icon="📝"
                onClick={navigateToSubleaseListings}
              />
              <BenefitCard
                title="Connect with Roommates"
                description="Find compatible roommates based on your preferences and lifestyle."
                icon="🤝"
                onClick={navigateToRoommateMatching}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 bg-blue-600 text-white text-center">
        <p>Built by Gauchos, for Gauchos.</p>
      </footer>
    </div>
  )
}

function BenefitCard({ title, description, icon, onClick }: { title: string; description: string; icon: string; onClick?: () => void }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer" onClick={onClick}>
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

