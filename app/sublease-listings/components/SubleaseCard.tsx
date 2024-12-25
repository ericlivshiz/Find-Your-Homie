"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Sublease {
  id: number;
  title: string;
  rent: number;
  move_in: string;
  move_out: string;
  location: string;
  description?: string;
  contact_info?: string;
  address?: string;
  unit?: string;
  image_urls: string[];
}

export default function SubleaseCard({ sublease }: { sublease: Sublease }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImageUrl =
    sublease.image_urls && sublease.image_urls.length > 0
      ? sublease.image_urls[currentImageIndex]
      : "/path/to/fallback-image.jpg";

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === sublease.image_urls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sublease.image_urls.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Card className="cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={currentImageUrl}
                alt={sublease.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {sublease.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-primary">
                ${sublease.rent}/month
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(sublease.move_in).toLocaleDateString()} -{" "}
                {new Date(sublease.move_out).toLocaleDateString()}
              </p>
              <p className="text-sm text-muted-foreground">{sublease.location}</p>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {sublease.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative h-64">
              <Image
                src={currentImageUrl}
                alt={`${sublease.title} image`}
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <Button onClick={handlePrevImage}>Previous</Button>
              <Button onClick={handleNextImage}>Next</Button>
            </div>

            <div className="space-y-2 text-sm">
              {sublease.address && (
                <p>
                  <strong>Address:</strong> {sublease.address}
                </p>
              )}
              {sublease.unit && (
                <p>
                  <strong>Unit Number:</strong> {sublease.unit}
                </p>
              )}
              <p>
                <strong>Location:</strong> {sublease.location}
              </p>
              <p>
                <strong>Rent:</strong> ${sublease.rent}/month
              </p>
              <p>
                <strong>Move-in Date:</strong>{" "}
                {new Date(sublease.move_in).toLocaleDateString()}
              </p>
              <p>
                <strong>Move-out Date:</strong>{" "}
                {new Date(sublease.move_out).toLocaleDateString()}
              </p>
              {sublease.description && (
                <p>
                  <strong>Description:</strong> {sublease.description}
                </p>
              )}
              {sublease.contact_info && (
                <p>
                  <strong>Email:</strong> {sublease.contact_info}
                </p>
              )}
            </div>
          </div>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

