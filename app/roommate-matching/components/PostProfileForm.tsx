'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { supabase } from '@/lib/supabaseClient'

interface PostProfileFormProps {
  isOpen: boolean
  onClose: () => void
}

type FormDataType = {
  name: string;
  gender: string;
  bio: string;
  budget: string;
  sleepingHabits: string;
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  moveInDate: string;
  contactInfo: string;
  image: File | null;
};

export default function PostProfileForm({ isOpen, onClose }: PostProfileFormProps) {
  const [formData, setFormData] = useState<FormDataType>({
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
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      console.error("No image selected.");
      return;
    }

    // Generate a unique filename for the image
    const fileName = `${Date.now()}_${formData.image.name}`;

    try {
      // Upload the image to the "Person-Images" bucket
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('Person-Images')
        .upload(fileName, formData.image);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }

      // Get the public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from('Person-Images')
        .getPublicUrl(uploadData.path);

      const imageUrl = publicUrlData?.publicUrl;
      if (!imageUrl) {
        console.error("Failed to retrieve public URL for the uploaded image.");
        return;
      }

      // Insert profile data including the image URL into the "Person" table
      const { error } = await supabase
        .from('Person')
        .insert([{
          name: formData.name,
          gender: formData.gender,
          bio: formData.bio,
          budget: formData.budget,
          sleeping_habits: formData.sleepingHabits,
          smoking: formData.smoking,
          drinking: formData.drinking,
          pets: formData.pets,
          move_in: formData.moveInDate,
          contact_info: formData.contactInfo,
          image_url: imageUrl, // Save the image URL
        }]);

      if (error) {
        console.error('Error inserting profile data:', error);
      } else {
        console.log('Profile data inserted successfully');
        onClose();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

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
            <Label htmlFor="image">Upload Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <Button type="submit">Submit Profile</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

