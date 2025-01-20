"use client";

import { Sidebar } from "@/components/sidebar";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, X, Home, User } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabaseClient";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import PostProfileForm from "@/app/roommate-matching/components/PostProfileForm";
import PostSubleaseForm from "@/components/forms/PostSubleaseForm";
import { SubleasePostType } from "./SubleaseType";
import { ProfilePostType } from "./ProfileType";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SubleasePosts from '@/components/SubleasePosts';
import ProfilePost from '@/components/ProfilePost';
import BlueHeader from "@/components/BlueHeader";



type Post = SubleasePostType | ProfilePostType;

export default function EditPostsPage() {
  const { user } = useUser();
  const [userId, setUserId] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<number | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubleaseOpen, setIsSubleaseOpen] = useState(false);
  const [isSelectionDialogOpen, setIsSelectionDialogOpen] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      if (user) {
        const username = user.username;
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

  useEffect(() => {
    const fetchListings = async () => {
      if (userId) {
        try {
          const { data: subleaseData, error: subleaseError } = await supabase
            .from("Sublease")
            .select("*")
            .eq("user_id", userId);

          const { data: personData, error: personError } = await supabase
            .from("Person")
            .select("*")
            .eq("user_id", userId);

          if (subleaseError || personError) {
            console.error(
              "Error fetching listings:",
              subleaseError || personError
            );
          } else {
            const typedSubleaseData = subleaseData.map(s => ({ ...s, type: 'Sublease' as const }));
            const typedPersonData = personData.map(p => ({ ...p, type: 'Profile' as const }));
            
            const combinedPosts = [...typedSubleaseData, ...typedPersonData];
            console.log('All posts:', combinedPosts);
            setPosts(combinedPosts);
          }
        } catch (error) {
          console.error("Unexpected error fetching listings:", error);
        }
      }
    };

    fetchListings();
  }, [userId]);

  const handleEdit = (id: number) => {
    const post = posts.find(p => p.id === id);
    console.log('Editing post:', post);
    console.log('Post type:', post?.type);
    console.log('Full post structure:', JSON.stringify(post, null, 2));
    setEditingPost(id);
  };

const handleDelete = async (id: number) => {
  try {
    const postToDelete = posts.find(p => p.id === id);
    
    if (!postToDelete) {
      console.error('Post not found');
      return;
    }

    let error;
    if (postToDelete.type === 'Sublease') {
      ({ error } = await supabase
        .from('Sublease')
        .delete()
        .eq('id', id));
    } else if (postToDelete.type === 'Profile') {
      ({ error } = await supabase
        .from('Person')
        .delete()
        .eq('id', id));
    }

    if (error) {
      console.error('Error deleting post:', error);
      return;
    }

    // Update local state after successful deletion
    setPosts(posts.filter(post => post.id !== id));
  } catch (error) {
    console.error('Unexpected error deleting post:', error);
  }
};

  const handleSave = async (id: number, updatedData: any) => {
    try {
      // Find the post to determine its type
      const post = posts.find(p => p.id === id);
      
      if (!post) {
        throw new Error('Post not found');
      }

      // Remove type from the data before sending to Supabase
      const { type, ...dataToUpdate } = updatedData;

      if (post.type === "Sublease") {
        const { error } = await supabase
          .from("Sublease")
          .update(dataToUpdate)
          .eq("id", id);
        
        if (error) throw error;
      } else if (post.type === "Profile") {
        const { error } = await supabase
          .from("Person")
          .update(dataToUpdate)
          .eq("id", id);
        
        if (error) throw error;
      }

      // Refresh the posts list
      const updatedPosts = posts.map(p => 
        p.id === id ? { ...p, ...updatedData } : p
      );
      setPosts(updatedPosts);
      setEditingPost(null);
      
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  const handlePostSelection = (type: "profile" | "sublease") => {
    if (type === "profile") {
      setIsProfileOpen(true);
    } else {
      setIsSubleaseOpen(true);
    }
  };

  const handleFormClose = () => {
    setIsProfileOpen(false);
    setIsSubleaseOpen(false);
    setIsSelectionDialogOpen(true);
  };

  const handleSwitchChange = (id: number, field: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, [field]: !post[field] } : post
      )
    );
  };

  const subleasePosts = posts.filter(post => post.type === 'Sublease');
  const profilePost = posts.find(post => post.type === 'Profile') || null;

  const renderEditForm = (post: Post) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const updatedData = Object.fromEntries(formData.entries());
        handleSave(post.id, updatedData);
      }}
      className="space-y-4"
    >
      {post.type === "Sublease" ? (
        <>
          <div>
            <Label htmlFor={`title-${post.id}`}>Title</Label>
            <Input id={`title-${post.id}`} name="title" defaultValue={post.title} />
          </div>
          <div>
            <Label htmlFor={`address-${post.id}`}>Address</Label>
            <Input id={`address-${post.id}`} name="address" defaultValue={post.address} />
          </div>
          <div>
            <Label htmlFor={`unit-${post.id}`}>Unit</Label>
            <Input id={`unit-${post.id}`} name="unit" defaultValue={post.unit} />
          </div>
          <div>
            <Label htmlFor={`rent-${post.id}`}>Rent</Label>
            <Input id={`rent-${post.id}`} name="rent" defaultValue={post.rent} />
          </div>
          <div>
            <Label htmlFor={`move_in-${post.id}`}>Move-in Date</Label>
            <Input id={`move_in-${post.id}`} name="move_in" defaultValue={post.move_in} />
          </div>
          <div>
            <Label htmlFor={`move_out-${post.id}`}>Move-out Date</Label>
            <Input id={`move_out-${post.id}`} name="move_out" defaultValue={post.move_out} />
          </div>
          <div>
            <Label htmlFor={`location-${post.id}`}>Location</Label>
            <Input id={`location-${post.id}`} name="location" defaultValue={post.location} />
          </div>
          <div>
            <Label htmlFor={`description-${post.id}`}>Description</Label>
            <Textarea id={`description-${post.id}`} name="description" defaultValue={post.description} />
          </div>
          <div>
            <Label htmlFor={`contact_info-${post.id}`}>Contact Info</Label>
            <Input id={`contact_info-${post.id}`} name="contact_info" defaultValue={post.contact_info} />
          </div>
        </>
      ) : (
        <>
          <div>
            <Label htmlFor={`name-${post.id}`}>Name</Label>
            <Input id={`name-${post.id}`} name="name" defaultValue={post.name} />
          </div>
          <div>
            <Label htmlFor={`gender-${post.id}`}>Gender</Label>
            <Input id={`gender-${post.id}`} name="gender" defaultValue={post.gender} />
          </div>
          <div>
            <Label htmlFor={`bio-${post.id}`}>Bio</Label>
            <Textarea id={`bio-${post.id}`} name="bio" defaultValue={post.bio} />
          </div>
          <div>
            <Label htmlFor={`budget-${post.id}`}>Budget</Label>
            <Input id={`budget-${post.id}`} name="budget" defaultValue={post.budget} />
          </div>
          <div>
            <Label htmlFor={`sleeping_habits-${post.id}`}>Sleeping Habits</Label>
            <Input id={`sleeping_habits-${post.id}`} name="sleeping_habits" defaultValue={post.sleeping_habits} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`smoking-${post.id}`} checked={post.smoking} onCheckedChange={() => handleSwitchChange(post.id, 'smoking')} />
            <Label htmlFor={`smoking-${post.id}`}>Smoking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`drinking-${post.id}`} checked={post.drinking} onCheckedChange={() => handleSwitchChange(post.id, 'drinking')} />
            <Label htmlFor={`drinking-${post.id}`}>Drinking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`pets-${post.id}`} checked={post.pets} onCheckedChange={() => handleSwitchChange(post.id, 'pets')} />
            <Label htmlFor={`pets-${post.id}`}>Pets Allowed</Label>
          </div>
          <div>
            <Label htmlFor={`move_in-${post.id}`}>Preferred Move-in Date</Label>
            <Input id={`move_in-${post.id}`} name="move_in" defaultValue={post.move_in} />
          </div>
          <div>
            <Label htmlFor={`contact_info-${post.id}`}>Contact Info</Label>
            <Input id={`contact_info-${post.id}`} name="contact_info" value={post.contact_info} onChange={(e) => handleInputChange(e, post.id)} />
          </div>
        </>
      )}
      <div className="flex justify-end gap-2">
        <Button type="submit">Save</Button>
        <Button variant="outline" size="icon" onClick={handleCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="flex flex-grow">
        <Sidebar /> {/* Replace with ListingsSidebar if needed, or keep Sidebar as is */}
        <div className="flex-grow">
          <BlueHeader />
          {/* Main Content Area */}
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-extrabold mb-6 text-white">Edit Your Posts</h1>
  
            <SubleasePosts
              posts={subleasePosts}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddSublease={() => setIsSubleaseOpen(true)}
            />
  
            {editingPost && renderEditForm(posts.find((post) => post.id === editingPost)!)}
  
            {/* Added margin-top for more space before ProfilePost */}
            <div className="mt-8">
              <ProfilePost
                post={profilePost}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAddProfile={() => setIsProfileOpen(true)}
              />
            </div>
  
            <PostProfileForm isOpen={isProfileOpen} onClose={handleFormClose} />
            <PostSubleaseForm isOpen={isSubleaseOpen} onClose={handleFormClose} />
          </main>
        </div>
      </div>
    </div>
  );
  
  
}



