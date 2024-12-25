"use client";

import { Sidebar } from "@/components/sidebar";
import PostProfileForm from "@/app/roommate-matching/components/PostProfileForm";
import PostSubleaseForm from "@/components/forms/PostSubleaseForm";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Home } from "lucide-react"; // Add Heroicons or use another library


export default function MakePostPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubleaseOpen, setIsSubleaseOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
        {/* Sublease Card */}
        <Card
          className="cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg shadow-sm hover:shadow-md h-48 flex items-center justify-center"
          onClick={() => setIsSubleaseOpen(true)}
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <Home className="w-8 h-8 text-blue-800 mb-2" />
              <CardTitle className="text-blue-800 font-semibold">Post a Sublease</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">List your sublease to find tenants.</p>
          </CardContent>
        </Card>

        {/* Profile Card */}
        <Card
          className="cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg shadow-sm hover:shadow-md h-48 flex items-center justify-center"
          onClick={() => setIsProfileOpen(true)}
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <User className="w-8 h-8 text-blue-800 mb-2" />
              <CardTitle className="text-blue-800 font-semibold">Post Your Profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">Share your profile to find roommates.</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Form */}
      <PostProfileForm isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* Sublease Form */}
      <PostSubleaseForm isOpen={isSubleaseOpen} onClose={() => setIsSubleaseOpen(false)} />
    </div>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Handle form submission logic here
  }
}
