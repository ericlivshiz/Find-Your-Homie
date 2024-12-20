'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Sublease {
  id: number
  title: string
  rent: number
  moveInDate: string
  moveOutDate: string
  location: string
  image_url: string
  description?: string
  contactInfo?: string
  address?: string
  unitNumber?: string
}

export default function SubleaseCard({ sublease }: { sublease: Sublease }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="overflow-hidden cursor-pointer">
            <div className="relative h-48">
              <Image
                src={sublease.image_url}
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
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{sublease.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Image
              src={sublease.image_url}
              alt={sublease.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p><strong>Rent:</strong> ${sublease.rent}/month</p>
            <p><strong>Move-in Date:</strong> {new Date(sublease.moveInDate).toLocaleDateString()}</p>
            <p><strong>Move-out Date:</strong> {new Date(sublease.moveOutDate).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {sublease.location}</p>
            {sublease.address && <p><strong>Address:</strong> {sublease.address}</p>}
            {sublease.unitNumber && <p><strong>Unit Number:</strong> {sublease.unitNumber}</p>}
            {sublease.description && <p><strong>Description:</strong> {sublease.description}</p>}
            {sublease.contactInfo && <p><strong>Contact Info:</strong> {sublease.contactInfo}</p>}
          </div>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

