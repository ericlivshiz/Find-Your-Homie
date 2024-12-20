import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          {image_url && (
            <Image
              src={image_url}
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
          {sleeping_habits && <li><strong>Sleeping Habits:</strong> {sleeping_habits}</li>}
          <li><strong>Smoking:</strong> {smoking ? 'Yes' : 'No'}</li>
          <li><strong>Drinking:</strong> {drinking ? 'Yes' : 'No'}</li>
          <li><strong>Pets:</strong> {pets ? 'Yes' : 'No'}</li>
          {move_in && <li><strong>Move-in Date:</strong> {new Date(move_in).toLocaleDateString()}</li>}
          <li><strong>Email:</strong> {contact_info}</li>
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <a href={`mailto:${contact_info}`} className="w-full">
          <Button className="w-full">Contact</Button>
        </a>
      </CardFooter>
    </Card>
  )
}

