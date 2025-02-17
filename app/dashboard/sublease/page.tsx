"use client";

import { Sidebar } from "@/components/sidebar";
import Header from "@/components/Header";
import { MobileNavbar } from "@/components/MobileNavBar";

export default function SubleasePage() {
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
            {/* Add your main content here */}
          </div>
        </div>
      );
}
