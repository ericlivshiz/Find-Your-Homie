"use client";

import { Sidebar } from "@/components/sidebar";
import Header from "@/components/Header";

export default function SubleasePage() {
  return (
    <div className="flex min-h-screen bg-gray-900 overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />  
      </div>
    </div>
  );
}
