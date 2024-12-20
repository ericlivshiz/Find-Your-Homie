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
import { supabase } from '@/lib/supabaseClient'

type FormDataType = {
  title: string;
  address: string;
  unitNumber: string;
  rent: string;
  moveInDate: string;
  moveOutDate: string;
  location: string;
  description: string;
  contactInfo: string;
  image: File | null;
};

export default function PostSubleaseButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    address: '',
    unitNumber: '',
    rent: '',
    moveInDate: '',
    moveOutDate: '',
    location: '',
    description: '',
    contactInfo: '',
    image: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!formData.image) {
      console.error("No image selected.");
      return;
    }
  
    // Generate a unique filename for the image
    const fileName = `${Date.now()}_${formData.image.name}`;
  
    try {
      // Upload the image to the "Sublease-Images" bucket
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('Sublease-Images')
        .upload(fileName, formData.image);
  
      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }
  
      // Get the public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from('Sublease-Images')
        .getPublicUrl(uploadData.path);
  
      const imageUrl = publicUrlData?.publicUrl;
      if (!imageUrl) {
        console.error("Failed to retrieve public URL for the uploaded image.");
        return;
      }
  
      // Insert sublease data including the image URL into the "Sublease" table
      const { error: insertError } = await supabase.from('Sublease').insert([
        {
          title: formData.title,
          address: formData.address,
          unit: formData.unitNumber,
          rent: parseFloat(formData.rent),
          move_in: formData.moveInDate,
          move_out: formData.moveOutDate,
          location: formData.location,
          description: formData.description,
          contact_info: formData.contactInfo,
          image_url: imageUrl, // Save the image URL
        },
      ]);
  
      if (insertError) {
        console.error("Error inserting sublease data:", insertError);
      } else {
        console.log("Sublease data inserted successfully.");
        setIsOpen(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };
  

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
            <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="unitNumber">Unit #</Label>
            <Input id="unitNumber" name="unitNumber" value={formData.unitNumber} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="rent">Rent ($/month)</Label>
            <Input id="rent" name="rent" type="number" value={formData.rent} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="moveInDate">Move-in Date</Label>
            <Input id="moveInDate" name="moveInDate" type="date" value={formData.moveInDate} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="moveOutDate">Move-out Date</Label>
            <Input id="moveOutDate" name="moveOutDate" type="date" value={formData.moveOutDate} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="contactInfo">Contact Info</Label>
            <Input id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="image">Upload Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <Button type="submit">Submit Listing</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

