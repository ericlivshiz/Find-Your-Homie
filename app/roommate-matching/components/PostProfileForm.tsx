'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

interface PostProfileFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function PostProfileForm({ isOpen, onClose }: PostProfileFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    bio: '',
    budget: '',
    sleepingHabits: '',
    smoking: false,
    drinking: false,
    pets: false,
    moveInDate: '',
    contactInfo: '',
    image: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to API)
    console.log(formData)
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Your Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name or Initials</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" name="gender" value={formData.gender} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" name="bio" value={formData.bio} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Input id="budget" name="budget" value={formData.budget} onChange={handleInputChange} required placeholder="e.g., 800-1200" />
          </div>
          <div>
            <Label htmlFor="sleepingHabits">Sleeping Habits</Label>
            <Input id="sleepingHabits" name="sleepingHabits" value={formData.sleepingHabits} onChange={handleInputChange} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="smoking" checked={formData.smoking} onCheckedChange={() => handleSwitchChange('smoking')} />
            <Label htmlFor="smoking">Smoking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="drinking" checked={formData.drinking} onCheckedChange={() => handleSwitchChange('drinking')} />
            <Label htmlFor="drinking">Drinking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="pets" checked={formData.pets} onCheckedChange={() => handleSwitchChange('pets')} />
            <Label htmlFor="pets">Pets Allowed</Label>
          </div>
          <div>
            <Label htmlFor="moveInDate">Preferred Move-in Date</Label>
            <Input id="moveInDate" name="moveInDate" type="date" value={formData.moveInDate} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="contactInfo">Contact Info</Label>
            <Input id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} required placeholder="Email or Phone" />
          </div>
          <div>
            <Label htmlFor="image">Profile Picture URL</Label>
            <Input id="image" name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

