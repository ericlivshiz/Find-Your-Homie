'use client'

import React, { useEffect, useState } from "react";
import BlueHeader from "@/components/BlueHeader";
import SubleaseCard from "./components/SubleaseCard";
import PostSubleaseButton from "./components/PostSubleaseButton";
import { fetchSubleaseData } from "@/lib/supabaseSubleaseQuery";

// Define a type for your sublease data
type SubleaseType = {
  id: number;
  title: string;
  address: string;
  unitNumber: string;
  rent: number;
  moveInDate: string;
  moveOutDate: string;
  location: string;
  description: string;
  contactInfo: string;
  image_url: string;
};

export default function SubleaseListingsPage() {
  const [subleases, setSubleases] = useState<SubleaseType[]>([]);

  useEffect(() => {
    const loadSubleaseData = async () => {
      try {
        const data = await fetchSubleaseData();
        console.log("Sublease data fetched:", data); // Log the data to console
        setSubleases(data);
      } catch (error) {
        console.error("Error fetching sublease data:", error);
      }
    };

    loadSubleaseData();
  }, []);

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
  );
}

