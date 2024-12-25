"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabaseClient";

type FormDataType = {
  title: string;
  address: string;
  unit: string;
  rent: string;
  move_in: string;
  move_out: string;
  location: string;
  description: string;
  contact_info: string;
  image_urls: File[];
};

interface PostSubleaseFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostSubleaseForm({
  isOpen,
  onClose,
}: PostSubleaseFormProps) {
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    address: "",
    unit: "",
    rent: "",
    move_in: "",
    move_out: "",
    location: "",
    description: "",
    contact_info: "",
    image_urls: [],
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
          console.log("User ID:", data.id);
          setUserId(data.id);
        }
      }
    };

    fetchUserId();
  }, [user]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        image_urls: Array.from(e.target.files),
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userId) {
      console.error("User ID not found.");
      return;
    }

    if (formData.image_urls.length === 0) {
      console.error("No images selected.");
      return;
    }

    try {
      const imageUrls = await Promise.all(
        formData.image_urls.map(async (image) => {
          const fileName = `${Date.now()}_${image.name}`;
          const { data: uploadData, error: uploadError } =
            await supabase.storage
              .from("Sublease-Images")
              .upload(fileName, image);

          if (uploadError) {
            console.error("Error uploading image:", uploadError);
            return null;
          }

          const { data: publicUrlData } = supabase.storage
            .from("Sublease-Images")
            .getPublicUrl(uploadData.path);

          return publicUrlData?.publicUrl;
        })
      );

      const validImageUrls = imageUrls.filter((url) => url !== null);

      const { error: insertError } = await supabase.from("Sublease").insert([
        {
          title: formData.title,
          address: formData.address,
          unit: formData.unit,
          rent: parseFloat(formData.rent),
          move_in: formData.move_in,
          move_out: formData.move_out,
          location: formData.location,
          description: formData.description,
          contact_info: formData.contact_info,
          image_urls: validImageUrls,
          user_id: userId,
        },
      ]);

      if (insertError) {
        console.error("Error inserting sublease data:", insertError);
      } else {
        console.log("Sublease data inserted successfully.");
        onClose();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200 rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-blue-800">
            Post Your Sublease
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="unitNumber">Unit #</Label>
            <Input
              id="unit"
              name="unit"
              value={formData.unit}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="rent">Rent ($/month)</Label>
            <Input
              id="rent"
              name="rent"
              type="number"
              value={formData.rent}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="moveInDate">Move-in Date</Label>
            <Input
              id="move_in"
              name="move_in"
              type="date"
              value={formData.move_in}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="moveOutDate">Move-out Date</Label>
            <Input
              id="move_out"
              name="move_out"
              type="date"
              value={formData.move_out}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="contact_info">Contact Info</Label>
            <Input
              id="contact_info"
              name="contact_info"
              value={formData.contact_info}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="image_urls">Upload Images</Label>
            <Input
              id="image_urls"
              name="image_urls"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </div>
          <Button type="submit">Submit Listing</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
