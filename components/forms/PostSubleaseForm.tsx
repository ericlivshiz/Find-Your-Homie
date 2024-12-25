"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

interface PostSubleaseFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostSubleaseForm({ isOpen, onClose }: PostSubleaseFormProps) {
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
    // Handle form submission logic here
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white border border-gray-200 rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-blue-800">Post Your Sublease</DialogTitle>
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