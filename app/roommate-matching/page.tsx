'use client'

import BlueHeader from "@/components/BlueHeader";
import RoommateCard from './components/RoommateCard'
import PostProfileButton from './components/PostProfileButton'
import { fetchPersonData } from "@/lib/supabasePersonQuery";
import { useState, useEffect } from 'react';

/* const dummyListings = [
  {
    id: 1,
    name: 'John D.',
    gender: 'Male',
    bio: 'Easygoing software developer looking for a quiet space.',
    budget: '800-1200',
    sleepingHabits: 'Night owl',
    smoking: false,
    drinking: true,
    pets: true,
    moveInDate: '2024-03-01',
    contactInfo: 'john.doe@example.com',
    image: '/assets/random-guy.png'
  },
  {
    id: 2,
    name: 'Sarah M.',
    gender: 'Female',
    bio: 'Grad student seeking roommate for shared apartment.',
    budget: '600-900',
    sleepingHabits: 'Early bird',
    smoking: false,
    drinking: false,
    pets: false,
    moveInDate: '2024-02-15',
    contactInfo: 'sarah.m@example.com',
    image: '/assets/random-girl.png'
  },
  // Add more dummy listings as needed
] */

// Define a type for your state
type FormDataType = {
  name: string;
  gender: string;
  bio: string;
  budget: string;
  sleepingHabits: string;
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  moveInDate: string;
  contactInfo: string;
  image: File | null;
};

export default function RoommateListingsPage() {
  const [people, setPeople] = useState<any[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    gender: '',
    bio: '',
    budget: '',
    sleepingHabits: '',
    smoking: false,
    drinking: false,
    pets: false,
    moveInDate: '',
    contactInfo: '',
    image: null,
  });

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
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />
      <div className="container mx-auto px-4 py-8">
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
  )
}

