"use client";

import { Sidebar } from "@/components/sidebar";
import { UserProfile } from "@clerk/nextjs";
import BlueHeader from "@/components/BlueHeader";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <BlueHeader />
        <div className="flex flex-grow justify-center items-center">
          <UserProfile routing="hash"/>
        </div>
      </div>
    </div>
  );
}
