"use client";

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useToast } from "../../../hooks/use-toast";

interface RoommateCardProps {
  name: string
  gender?: string
  bio: string
  budget: string
  sleeping_habits?: string
  smoking: boolean
  drinking: boolean
  pets: boolean
  move_in?: string
  contact_info: string
  image_url?: string
}

export default function RoommateCard({
  name,
  gender,
  bio,
  budget,
  sleeping_habits,
  smoking,
  drinking,
  pets,
  move_in,
  contact_info,
  image_url
}: RoommateCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Unliked" : "Liked",
      description: `You have ${isLiked ? "unliked" : "liked"} this profile.`,
      variant: isLiked ? "destructive" : "default",
    });
  };

  return (
    <Card className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300">
      {/* Heart (Like) Icon */}
      <div className="absolute top-2 right-2 z-10">
        <Heart
          onClick={toggleLike}
          strokeWidth={4}
          className={`cursor-pointer ${isLiked ? "text-red-500" : "text-black"}`}
        />
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src={image_url || "/assets/user-placeholder-2.png"} // Placeholder image URL when no profile picture is available
          alt={`${name}'s profile picture`}
          width={100}
          height={100}
          className="rounded-full mx-auto mt-4"
        />
      </div>

      {/* Content Section */}
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-white mb-2 text-center">{name}</h4>
        {gender && <p className="text-sm mb-2 font-semibold text-gray-300"><strong>Gender:</strong> {gender}</p>}
        <p className="text-sm mb-4 font-semibold text-gray-300">{bio}</p>
        <ul className="space-y-2 text-sm font-semibold text-gray-300">
          <li>
            <strong>Budget:</strong> ${budget}
          </li>
          {sleeping_habits && (
            <li>
              <strong>Sleeping Habits:</strong> {sleeping_habits}
            </li>
          )}
          <li>
            <strong>Smoking:</strong> {smoking ? "Yes" : "No"}
          </li>
          <li>
            <strong>Drinking:</strong> {drinking ? "Yes" : "No"}
          </li>
          <li>
            <strong>Pets:</strong> {pets ? "Yes" : "No"}
          </li>
          {move_in && (
            <li>
              <strong>Move-in Date:</strong> {new Date(move_in).toLocaleDateString()}
            </li>
          )}
          <li>
            <strong>Email:</strong> {contact_info}
          </li>
        </ul>
      </CardContent>

      {/* Footer Section */}
      <CardFooter className="p-6 bg-gray-900 bg-opacity-75 flex justify-center">
        <a href={`mailto:${contact_info}`} className="w-full">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all">
            Contact
          </button>
        </a>
      </CardFooter>
    </Card>
  );
}

