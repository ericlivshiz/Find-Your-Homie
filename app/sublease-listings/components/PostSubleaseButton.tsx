'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PostSubleaseButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto">Post Your Sublease</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Your Sublease</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" required />
          </div>
          <div>
            <Label htmlFor="rent">Rent ($/month)</Label>
            <Input id="rent" type="number" required />
          </div>
          <div>
            <Label htmlFor="moveInDate">Move-in Date</Label>
            <Input id="moveInDate" type="date" required />
          </div>
          <div>
            <Label htmlFor="moveOutDate">Move-out Date</Label>
            <Input id="moveOutDate" type="date" required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" required />
          </div>
          <div>
            <Label htmlFor="photo">Photo</Label>
            <Input id="photo" type="file" accept="image/*" required />
          </div>
          <Button type="submit">Submit Listing</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

