'use client'

import { ListingsSidebar } from "@/components/ListingsSidebar";
import BlueHeader from "@/components/BlueHeader";
import RoommateCard from './components/RoommateCard'
import PostProfileButton from './components/PostProfileButton'
import { fetchPersonData } from "@/lib/supabasePersonQuery";
import { useState, useEffect } from 'react';
import GenderFilter from "./components/GenderFilter";
import SleepHabitsFilter from "./components/SleepHabitsFilter";
import LifestyleFilter from "./components/LifestyleFilter";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    gender: '',
    bio: '',
    budget: '',
    sleeping_habits: '',
    smoking: false,
    drinking: false,
    pets: false,
    move_in: '',
    contact_info: '',
    image: null,
  });
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

  const toggleFiltersExpand = () => {
    setIsFiltersExpanded(!isFiltersExpanded);
  };

  const handleGenderFilterChange = (gender: string) => {
    // Implement the logic to filter roommates based on gender
  };

  const handleSleepHabitsFilterChange = (habit: string) => {
    // Implement the logic to filter roommates based on sleep habits
  };

  const handleLifestyleFilterChange = (smoking: boolean, drinking: boolean, pets: boolean) => {
    // Implement the logic to filter roommates based on lifestyle
  };

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        <ListingsSidebar />
        <div className="flex-grow">
          <BlueHeader />
          <div className="container mx-auto px-4 py-8">
            <div className="bg-grey shadow-md rounded-lg p-6 mb-8">
              <div className="flex items-center cursor-pointer" onClick={toggleFiltersExpand}>
                {isFiltersExpanded ? <ChevronUp className="text-gray-500 mr-2" /> : <ChevronDown className="text-gray-500 mr-2" />}
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Filters
                </h2>
              </div>
              {isFiltersExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GenderFilter onFilterChange={handleGenderFilterChange} />
                  <SleepHabitsFilter onFilterChange={handleSleepHabitsFilterChange} />
                  <LifestyleFilter onFilterChange={handleLifestyleFilterChange} />
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <main className="w-full md:w-3/4">
                <PostProfileButton />
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
    </div>
  )
}

