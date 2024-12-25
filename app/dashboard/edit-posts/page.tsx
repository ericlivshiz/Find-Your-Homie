"use client";

import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, X } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    title: "Cozy Studio for Rent",
    type: "Sublease",
    image: "/assets/iv-property-1.png",
  },
  {
    id: 2,
    title: "Spacious 2BR Apartment",
    type: "Sublease",
    image: "/assets/iv-property-2.png",
  },
  {
    id: 3,
    title: "John's Housing Profile",
    type: "Profile",
    image: "/assets/iv-property-3.png",
  },
];

export default function EditPostsPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [editingPost, setEditingPost] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditingPost(id);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSave = (id: number) => {
    setEditingPost(null);
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 space-y-6">
        <h1 className="text-2xl font-bold">Edit Your Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div
                className="aspect-video bg-gray-100"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                }}
              />
              <CardContent className="p-4">
                {editingPost === post.id ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSave(post.id);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor={`title-${post.id}`}>Title</Label>
                      <Input id={`title-${post.id}`} defaultValue={post.title} />
                    </div>
                    <div>
                      <Label htmlFor={`type-${post.id}`}>Type</Label>
                      <Input id={`type-${post.id}`} defaultValue={post.type} />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button type="submit">Save</Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCancel}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-gray-500">{post.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(post.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
