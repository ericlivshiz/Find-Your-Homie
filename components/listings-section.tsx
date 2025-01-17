import { useRouter } from "next/navigation";
import React from "react";

export default function ListingsSections() {
  const router = useRouter();

  const navigateToHousingListings = () => {
    router.push("/housing-listings");
  };

  const navigateToSubleaseListings = () => {
    router.push("/sublease-listings");
  };

  const navigateToRoommateMatching = () => {
    router.push("/roommate-matching");
  };

  return (
    <div>
      <section className="py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-xy"></div>
  
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl font-extrabold text-center mb-8 text-white">
            Check Out Our Listings!
          </h3>
          <h4 className="text-xl text-center mb-12 text-yellow-300">
            View Housing and UCSB Profiles | No Sign-in Needed
          </h4>
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <BenefitCard
              title="Find Housing Quickly"
              description="Browse through a wide range of listings tailored for UCSB students."
              icon="🏠"
              onClick={navigateToHousingListings}
            />
            <BenefitCard
              title="Connect with Roommates"
              description="Find compatible roommates based on your preferences and lifestyle."
              icon="🤝"
              onClick={navigateToRoommateMatching}
            />
          </div>
        </div>
  
        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-gray-600 opacity-30 blur-3xl rounded-full -top-10 -left-20 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-gray-700 opacity-25 blur-3xl rounded-full -bottom-20 -right-10 animate-pulse"></div>
        </div>
      </section>
    </div>
  );  
}

function BenefitCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-slate-700 bg-opacity-80 p-6 rounded-lg shadow-md text-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-slate-200">{description}</p>
    </div>
  );
}
