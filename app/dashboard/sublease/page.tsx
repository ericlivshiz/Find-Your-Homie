"use client";

import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { SubleaseList } from "./components/sublease-list";
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
          <main className="flex-grow px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-white">Your Listings</h1>
              <Button className="bg-blue-600 hover:bg-blue-700">+ Create a New Listing</Button>
            </div>
            <SubleaseList />
          </main>
      </div>
    </div>
  );
}