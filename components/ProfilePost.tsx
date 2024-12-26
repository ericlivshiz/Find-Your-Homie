import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, User } from 'lucide-react';
import { ProfilePostType } from '@/app/dashboard/edit-posts/ProfileType';

interface ProfilePostProps {
  post: ProfilePostType | null;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddProfile: () => void;
}

export default function ProfilePost({ post, onEdit, onDelete, onAddProfile }: ProfilePostProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Profile Post</h2>
      {post ? (
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center">
              <img
                src={post.image_url || ''}
                alt="Profile Picture"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{post.name}</h3>
                <p className="text-sm text-gray-500">Gender: {post.gender}</p>
                <p className="text-sm text-gray-500">Bio: {post.bio}</p>
                <p className="text-sm text-gray-500">Budget: {post.budget}</p>
                <p className="text-sm text-gray-500">Sleeping Habits: {post.sleeping_habits}</p>
                <p className="text-sm text-gray-500">Smoking: {post.smoking ? 'Yes' : 'No'}</p>
                <p className="text-sm text-gray-500">Drinking: {post.drinking ? 'Yes' : 'No'}</p>
                <p className="text-sm text-gray-500">Pets: {post.pets ? 'Allowed' : 'Not Allowed'}</p>
                <p className="text-sm text-gray-500">Move-in Date: {post.move_in}</p>
                <p className="text-sm text-gray-500">Contact Info: {post.contact_info}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" size="icon" onClick={() => onEdit(post.id)}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => onDelete(post.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card
          className="cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg shadow-sm hover:shadow-md h-48 flex items-center justify-center"
          onClick={onAddProfile}
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-blue-800 mb-2">+</span>
              <CardTitle className="text-blue-800 font-semibold">
                Add Profile
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Create your profile post.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 