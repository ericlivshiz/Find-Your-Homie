import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, User } from "lucide-react";
import { ProfilePostType } from "@/app/dashboard/edit-posts/ProfileType";
import Image from "next/image";

interface ProfilePostProps {
  post: ProfilePostType | null;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddProfile: () => void;
}

export default function ProfilePost({
  post,
  onEdit,
  onDelete,
  onAddProfile,
}: ProfilePostProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Profile Post</h2>
      {post ? (
        <Card className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300 max-w-xl">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              {post.image_url && (
                <Image
                  src={post.image_url}
                  alt="Profile Picture"
                  className="w-16 h-16 rounded-full mr-4"
                  width={50}
                  height={50}
                />
              )}
              <h3 className="text-xl font-bold text-white">{post.name}</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-300 font-semibold">
              {post.gender && (
                <li>
                  <strong>Gender:</strong> {post.gender}
                </li>
              )}
              <li>
                <strong>Bio:</strong> {post.bio}
              </li>
              <li>
                <strong>Budget:</strong> {post.budget}
              </li>
              <li>
                <strong>Sleeping Habits:</strong> {post.sleeping_habits}
              </li>
              <li>
                <strong>Smoking:</strong> {post.smoking ? "Yes" : "No"}
              </li>
              <li>
                <strong>Drinking:</strong> {post.drinking ? "Yes" : "No"}
              </li>
              <li>
                <strong>Pets:</strong> {post.pets ? "Allowed" : "Not Allowed"}
              </li>
              <li>
                <strong>Move-in Date:</strong> {post.move_in}
              </li>
              <li>
                <strong>Contact Info:</strong> {post.contact_info}
              </li>
            </ul>
  
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" size="icon" className="bg-black" onClick={() => onEdit(post.id)}>
                <Pencil className="h-4 w-4 text-white" />
              </Button>
              <Button variant="outline" size="icon" className="bg-black" onClick={() => onDelete(post.id)}>
                <Trash2 className="h-4 w-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300 cursor-pointer h-48 flex items-center justify-center"
          onClick={onAddProfile}
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-blue-400 mb-2">+</span>
              <CardTitle className="text-blue-400 font-semibold">Add Profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm">Create your profile post.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
  
}
