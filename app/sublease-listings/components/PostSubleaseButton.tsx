"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabaseClient";

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
  images: File[];
};

export default function PostSubleaseButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    address: "",
    unitNumber: "",
    rent: "",
    moveInDate: "",
    moveOutDate: "",
    location: "",
    description: "",
    contactInfo: "",
    images: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, images: Array.from(e.target.files) }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.images.length === 0) {
      console.error("No images selected.");
      return;
    }

    try {
      const imageUrls = await Promise.all(
        formData.images.map(async (image) => {
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
          unit: formData.unitNumber,
          rent: parseFloat(formData.rent),
          move_in: formData.moveInDate,
          move_out: formData.moveOutDate,
          location: formData.location,
          description: formData.description,
          contact_info: formData.contactInfo,
          image_urls: validImageUrls,
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
        <Button size="lg" className="w-full md:w-auto">
          Post Your Sublease
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Your Sublease</DialogTitle>
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
              id="unitNumber"
              name="unitNumber"
              value={formData.unitNumber}
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
              id="moveInDate"
              name="moveInDate"
              type="date"
              value={formData.moveInDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="moveOutDate">Move-out Date</Label>
            <Input
              id="moveOutDate"
              name="moveOutDate"
              type="date"
              value={formData.moveOutDate}
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
            <Label htmlFor="contactInfo">Contact Info</Label>
            <Input
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="images">Upload Images</Label>
            <Input
              id="images"
              name="images"
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
