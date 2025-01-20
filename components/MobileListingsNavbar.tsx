"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Users, ArrowLeft } from "lucide-react";

const navItems = [
  { title: "GO BACK", href: "/", icon: ArrowLeft },
  { title: "HOUSING", href: "/housing-listings", icon: Home },
  { title: "PEOPLE", href: "/roommate-matching", icon: Users },
];

export function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden bg-gradient-to-br from-indigo-900 via-slate-800 to-blue-700 p-4 text-white">
      <nav className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-2 px-4 py-2 rounded-lg transition-all font-semibold",
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
            <span className="text-xs">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
