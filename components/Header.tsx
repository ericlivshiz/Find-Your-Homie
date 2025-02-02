"use client";

import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <header className="py-4 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 shadow-lg flex justify-between items-center relative">
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-blue-700 opacity-40 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gray-800 opacity-30 blur-3xl rounded-full -bottom-10 -right-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <h1
        className="text-3xl font-extrabold text-white cursor-pointer relative z-10"
        onClick={navigateToHome}
      >
        Find Your Homie
      </h1>
      <div className="relative z-10">
        <SignedOut>
          <SignInButton>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md focus:outline-none"
            >
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

