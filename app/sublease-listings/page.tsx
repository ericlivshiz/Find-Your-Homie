"use client";

import { ListingsSidebar } from "@/components/ListingsSidebar";
import BlueHeader from "@/components/BlueHeader";
import SubleaseCard from "./components/SubleaseCard";
import PostSubleaseButton from "./components/PostSubleaseButton";
import { fetchSubleaseData } from "@/lib/supabaseSubleaseQuery";
import React, { useEffect, useState } from "react";
import RentFilter from "./components/RentFilter";
import DateFilter from "./components/DateFilter";
import { ChevronDown, ChevronUp } from "lucide-react";
import LocationFilter from "./components/LocationFilter";
import FooterSection from "@/components/footer-section";

// Define a type for your sublease data
type SubleaseType = {
  id: number;
  title: string;
  address: string;
  unit: string;
  rent: number;
  move_in: string;
  move_out: string;
  location: string;
  description: string;
  contact_info: string;
  image_urls: string[];
};

export default function SubleaseListingsPage() {
  const [subleases, setSubleases] = useState<SubleaseType[]>([]);
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);

  const toggleFiltersExpand = () => {
    setIsFiltersExpanded(!isFiltersExpanded);
  };

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

  const handleRentFilterChange = (min: number, max: number) => {
    // Implement the logic to filter subleases based on rent range
    // This will involve querying the database with the specified rent range
  };

  const handleDateFilterChange = (moveIn: string, moveOut: string) => {
    // Implement the logic to filter subleases based on move-in and move-out dates
    // This will involve querying the database with the specified date range
  };

  const handleLocationFilterChange = (goleta: boolean, islaVista: boolean) => {
    // Implement the logic to filter subleases based on location
    // This will involve querying the database with the specified location filters
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex flex-grow">
        <ListingsSidebar />
        <div className="flex-grow">
          <BlueHeader />
          <div className="container mx-auto px-4 py-8">
            <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-8">
              <div className="flex items-center cursor-pointer" onClick={toggleFiltersExpand}>
                {isFiltersExpanded ? <ChevronUp className="text-gray-400 mr-2" /> : <ChevronDown className="text-gray-400 mr-2" />}
                <h2 className="text-2xl font-semibold mb-4 text-gray-300">
                  Filters
                </h2>
              </div>
              {isFiltersExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RentFilter onFilterChange={handleRentFilterChange} />
                  <DateFilter onFilterChange={handleDateFilterChange} />
                  <LocationFilter onFilterChange={handleLocationFilterChange} />
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-8 text-gray-300">
              Sublease Listings
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {subleases.map((sublease) => (
                <SubleaseCard key={sublease.id} sublease={sublease} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
  
}
