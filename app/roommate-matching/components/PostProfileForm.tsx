'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { supabase } from '@/lib/supabaseClient'
import { useUser } from "@clerk/nextjs";

interface PostProfileFormProps {
  isOpen: boolean
  onClose: () => void
}

type FormDataType = {
  name: string;
  gender: string;
  bio: string;
  budget: string;
  sleeping_habits: string;
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  move_in: string;
  contact_info: string;
  image: File | null;
};

export default function PostProfileForm({ isOpen, onClose }: PostProfileFormProps) {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    gender: '',
    bio: '',
    budget: '',
    sleeping_habits: '',
    smoking: false,
    drinking: false,
    pets: false,
    move_in: '',
    contact_info: '',
    image: null,
  });

  const { user } = useUser();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      if (user) {
        const username = user.username;
        console.log("Username:", username);
        const { data, error } = await supabase
          .from("User")
          .select("id")
          .eq("username", username)
          .single();

        if (error) {
          console.error("Error fetching user ID:", error);
        } else {
          setUserId(data.id);
        }
      }
    };

    fetchUserId();
  }, [user]);

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
          sleeping_habits: formData.sleeping_habits,
          smoking: formData.smoking,
          drinking: formData.drinking,
          pets: formData.pets,
          move_in: formData.move_in,
          contact_info: formData.contact_info,
          image_url: imageUrl, // Save the image URL
          user_id: userId,
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
          <DialogTitle className="text-lg font-medium text-blue-800">Post Your Profile</DialogTitle>
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
            <Label htmlFor="sleeping_habits">Sleeping Habits</Label>
            <Input id="sleeping_habits" name="sleeping_habits" value={formData.sleeping_habits} onChange={handleInputChange} />
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
            <Label htmlFor="move_in">Preferred Move-in Date</Label>
            <Input id="move_in" name="move_in" type="date" value={formData.move_in} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="contact_info">Contact Info</Label>
            <Input id="contact_info" name="contact_info" value={formData.contact_info} onChange={handleInputChange} required placeholder="Email or Phone" />
          </div>
          <div>
            <Label htmlFor="image">Upload Profile Picture</Label>
            <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <Button type="submit">Submit Profile</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

