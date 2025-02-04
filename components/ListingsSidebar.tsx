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
    title: "PEOPLE",
    href: "/roommate-matching",
    icon: Users,
  },
];

export function ListingsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 p-6 text-white">
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-lg transition-all font-semibold",
              pathname === item.href
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-200 hover:bg-indigo-600 hover:text-white"
            )}
          >
            <item.icon
              className={cn(
                "h-6 w-6 transition-all",
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
