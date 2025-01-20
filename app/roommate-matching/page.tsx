"use client";

import { ListingsSidebar } from "@/components/ListingsSidebar";
import BlueHeader from "@/components/BlueHeader";
import RoommateCard from "./components/RoommateCard";
import PostProfileButton from "./components/PostProfileButton";
import { fetchPersonData } from "@/lib/supabasePersonQuery";
import { useState, useEffect } from "react";
import FooterSection from "@/components/footer-section";
import Header from "@/components/Header";
import SearchBar from "./components/SearchBar";
import { MobileNavbar } from "@/components/MobileListingsNavbar";

// Define a type for your roommate data
type RoommateType = {
  id: number;
  name: string;
  gender: string;
  bio: string;
  budget: string;
  sleeping_habits: string;
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  move_in: string;
  contact_info: string;
  image_url: string;
};

// Define a type for your state
type FormDataType = {
  name: string;
  gender: string;
  bio: string;
  budget: string;
  sleeping_habits: string;
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  move_in: string;
  contact_info: string;
  image: File | null;
};

export default function RoommateListingsPage() {
  const [people, setPeople] = useState<RoommateType[]>([]);

  useEffect(() => {
    const loadPersonData = async () => {
      try {
        const data = await fetchPersonData();
        console.log("Person data fetched:", data); // Log the data to console
        setPeople(data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };

    loadPersonData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
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
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-300">Looking for Roommates</h2>
            <div className="mb-6">
              <SearchBar />
            </div>
  
            {/* Roommate Listings */}
            <div className="flex flex-col md:flex-row gap-8">
              <main className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {people.map((person) => (
                    <RoommateCard key={person.id} {...person} />
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
  
}

