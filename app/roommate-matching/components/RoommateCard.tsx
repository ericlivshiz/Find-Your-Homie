import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RoommateCardProps {
  name: string
  gender?: string
  bio: string
  budget: string
  sleepingHabits?: string
  smoking: boolean
  drinking: boolean
  pets: boolean
  moveInDate?: string
  contactInfo: string
  image?: string
}

export default function RoommateCard({
  name,
  gender,
  bio,
  budget,
  sleepingHabits,
  smoking,
  drinking,
  pets,
  moveInDate,
  contactInfo,
  image
}: RoommateCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          {image && (
            <Image
              src={image}
              alt={`${name}'s profile picture`}
              width={50}
              height={50}
              className="rounded-lg"
            />
          )}
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        {gender && <p className="text-sm text-gray-600 mb-2"><strong>Gender:</strong> {gender}</p>}
        <p className="text-sm text-gray-600 mb-4">{bio}</p>
        <ul className="space-y-2 text-sm">
          <li><strong>Budget:</strong> ${budget}</li>
          {sleepingHabits && <li><strong>Sleeping Habits:</strong> {sleepingHabits}</li>}
          <li><strong>Smoking:</strong> {smoking ? 'Yes' : 'No'}</li>
          <li><strong>Drinking:</strong> {drinking ? 'Yes' : 'No'}</li>
          <li><strong>Pets:</strong> {pets ? 'Yes' : 'No'}</li>
          {moveInDate && <li><strong>Move-in Date:</strong> {new Date(moveInDate).toLocaleDateString()}</li>}
          <li><strong>Contact Info:</strong> {contactInfo}</li>
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Contact</Button>
      </CardFooter>
    </Card>
  )
}

