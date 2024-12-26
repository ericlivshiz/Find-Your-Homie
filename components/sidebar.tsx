"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { User, Edit, Heart, ArrowLeft } from "lucide-react";

const navItems = [
  {
    title: "GO BACK",
    href: "/",
    icon: ArrowLeft,
  },
  {
    title: "PROFILE",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "CREATE & EDIT POSTS",
    href: "/dashboard/edit-posts",
    icon: Edit,
  },
  {
    title: "LIKED POSTS",
    href: "/dashboard/liked-posts",
    icon: Heart,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-gray-50 border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors font-medium",
              pathname === item.href
                ? "bg-blue-100 text-blue-800"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 transition-colors",
                pathname === item.href ? "text-blue-800" : "text-gray-500"
              )}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}


