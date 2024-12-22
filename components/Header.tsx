"use client";

import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Header() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <header className="py-4 px-6 bg-white shadow-sm flex justify-between items-center">
      <h1 
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={navigateToHome}
      >
        Find Your Homie
      </h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
} 