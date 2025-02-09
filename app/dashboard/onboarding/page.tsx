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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <User className="text-blue-500 mr-3" />
              <label className="block text-lg font-medium text-gray-300">Your First Name</label>
            </div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <User className="text-blue-500 mr-3" />
              <label className="block text-lg font-medium text-gray-300">Your Last Name</label>
            </div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Mail className="text-blue-500 mr-3" />
              <label className="block text-lg font-medium text-gray-300">Preferred Email</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <div className="flex items-center mb-4">
              <Target className="text-blue-500 mr-3" />
              <label className="block text-lg font-medium text-gray-300">Your Goals</label>
              <Sparkles className="text-yellow-500 ml-2" />
            </div>
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="w-full bg-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-white p-3"
              placeholder="What are you hoping to achieve on the site?"
              rows={4}
              required
            />
          </div>
        </div>
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
