"use client";

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <h1 
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={navigateToHome}
      >
        Find Your Homie
      </h1>
    </header>
  );
} 