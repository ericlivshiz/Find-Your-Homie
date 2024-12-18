import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Sublease {
  id: number
  title: string
  rent: number
  moveInDate: string
  moveOutDate: string
  location: string
  imageUrl: string
}

export default function SubleaseCard({ sublease }: { sublease: Sublease }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={sublease.imageUrl}
          alt={sublease.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{sublease.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold mb-2">${sublease.rent}/month</p>
        <p className="text-sm text-muted-foreground mb-1">
          {new Date(sublease.moveInDate).toLocaleDateString()} - {new Date(sublease.moveOutDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-muted-foreground">{sublease.location}</p>
      </CardContent>
    </Card>
  )
}

