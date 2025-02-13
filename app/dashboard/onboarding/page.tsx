"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Mail, Target, Sparkles } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Goals:", goals);
    // Navigate to the next page after onboarding
    router.push("/dashboard/edit-posts");
  };

  const subheaderMessage = "Let's get you started on your journey. Please provide the following details."
  const buttonMessage = "Let's Go!"

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Welcome Aboard!</h1>
      <p className="mb-12 text-center text-gray-400 text-lg">
        {subheaderMessage}
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-slate-900 p-8 rounded-lg shadow-lg space-y-8">
        <h2 className="text-2xl md:text-2xl font-bold text-center text-white mb-6">What Are You Hoping To Achieve on this Site?</h2>
        <textarea
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="w-full h-32 bg-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3 resize-y"
          placeholder="Type your goals here..."
          rows={3}
          required
        />
        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md"
          >
            {buttonMessage}
          </Button>
        </div>
      </form>
    </div>
  );
}
