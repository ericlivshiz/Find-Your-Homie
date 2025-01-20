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
    <div className="md:hidden bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 p-4 text-white">
      <nav className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors font-bold",
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
            <span className="text-xs">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
