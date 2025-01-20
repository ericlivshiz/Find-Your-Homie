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
      <h2 className="text-xl font-bold text-white">Housing Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="aspect-video relative">
              <div
                style={{
                  backgroundImage: `url(${post.image_urls?.[0] || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>
  
            {/* Content Section */}
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-300">Sublease</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="bg-black" onClick={() => onEdit(post.id)}>
                    <Pencil className="h-4 w-4 text-white" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-black" onClick={() => onDelete(post.id)}>
                    <Trash2 className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
  
        {/* "Add Sublease" Card */}
        <Card
          onClick={onAddSublease}
          className="relative rounded-lg shadow-lg overflow-hidden bg-gray-800 bg-opacity-90 hover:shadow-xl transition-shadow duration-300 cursor-pointer h-48 flex items-center justify-center"
        >
          <CardHeader className="text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl text-blue-400 mb-2">+</span>
              <CardTitle className="text-blue-400 font-semibold">
                Add Sublease
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">
              Create a new sublease post.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  
} 