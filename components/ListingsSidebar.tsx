"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Building, Users, ArrowLeft } from "lucide-react";

const navItems = [
  {
    title: "GO BACK",
    href: "/",
    icon: ArrowLeft,
  },
  {
    title: "HOUSING",
    href: "/housing-listings",
    icon: Home,
  },
  {
    title: "SUBLEASE",
    href: "/sublease-listings",
    icon: Building,
  },
  {
    title: "ROOMMATE",
    href: "/roommate-matching",
    icon: Users,
  },
];

export function ListingsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 p-4 text-white">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors font-medium",
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-blue-600 hover:text-white"
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 transition-colors",
                pathname === item.href ? "text-white" : "text-gray-400"
              )}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

