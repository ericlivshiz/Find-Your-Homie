"use client";

import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ListingList } from "./components/leasing-list";
import Header from "@/components/Header";
import { useState } from "react";
import Image from "next/image";
import { MobileNavbar } from "@/components/MobileNavBar";

export default function LeasePage() {
  const [accessCode, setAccessCode] = useState("");
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const correctCode = "1234"; // Fake access code

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === correctCode) {
      setIsAccessGranted(true);
    } else {
      alert("Incorrect access code. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 overflow-x-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        {!isAccessGranted ? (
          <div className="flex flex-col items-center justify-center flex-grow px-4">
            <Image
              src="/assets/logo.png" // Replace with your image path
              alt="Access Code"
              width={200}
              height={200}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold text-white mb-1">Enter Access Code</h2>
            <p className="text-gray-300 mb-4 font-semibold">Must Have Access Code to Post Lease.</p>
            <form onSubmit={handleAccessSubmit} className="flex flex-col items-center">
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-64 p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter access code"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Submit</Button>
            </form>
          </div>
        ) : (
          <main className="flex-grow px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-white">Your Listings</h1>
              <Button className="bg-blue-600 hover:bg-blue-700">+ Create a New Listing</Button>
            </div>
            <ListingList />
          </main>
        )}
      </div>
    </div>
  );
}
