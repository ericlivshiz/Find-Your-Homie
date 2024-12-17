"use client";

import { useRouter } from 'next/navigation';

export default function BlueHeader() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 
          className="text-3xl font-bold cursor-pointer"
          onClick={navigateToHome}
        >
          Find Your Homie
        </h1>
      </div>
    </header>
  );
} 