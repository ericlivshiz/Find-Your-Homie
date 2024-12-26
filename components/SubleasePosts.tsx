import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, Home } from 'lucide-react';
import { SubleasePostType } from '@/app/dashboard/edit-posts/SubleaseType';

interface SubleasePostsProps {
  posts: SubleasePostType[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onAddSublease: () => void;
}

export default function SubleasePosts({ posts, onEdit, onDelete, onAddSublease }: SubleasePostsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Sublease Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div
              className="aspect-video bg-gray-100"
              style={{
                backgroundImage: `url(${post.image_urls && post.image_urls[0] || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-500">Sublease</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => onEdit(post.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => onDelete(post.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card
          className="cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200 rounded-lg shadow-sm hover:shadow-md h-48 flex items-center justify-center"
          onClick={onAddSublease}
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-blue-800 mb-2">+</span>
              <CardTitle className="text-blue-800 font-semibold">
                Add Sublease
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Create a new sublease post.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 