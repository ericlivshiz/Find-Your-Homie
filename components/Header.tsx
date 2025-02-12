"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image"; // Import Image for the logo

export default function Header() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <header className="py-4 px-6 bg-gradient-to-br from-black via-slate-900 to-gray-800 shadow-lg flex justify-between items-center relative">
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-gray-800 opacity-30 blur-3xl rounded-full -bottom-10 -right-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between w-full">
        {/* Logo for Mobile */}
        <div className="flex items-center justify-start space-x-2 lg:hidden">
          <Image
            src="/assets/logo.png" // Add the logo image path here
            alt="Logo"
            width={70} // Adjust width
            height={70} // Adjust height
            className="cursor-pointer"
            onClick={navigateToHome}
          />
        </div>

        {/* Title for larger screens */}
        <h1
          className="text-3xl font-extrabold text-white cursor-pointer relative z-10 hidden lg:block"
          onClick={navigateToHome}
        >
          Find Your Homie
        </h1>

        {/* User Authentication Buttons */}
        <div className="relative z-10">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md focus:outline-none">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
