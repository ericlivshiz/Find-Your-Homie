"use client";

import { Sidebar } from "@/components/sidebar";
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-grow justify-center items-center min-h-screen">
        <UserProfile routing="hash"/>
      </div>
    </div>
  );
}
