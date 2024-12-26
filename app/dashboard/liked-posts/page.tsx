import { Sidebar } from "@/components/sidebar";
import BlueHeader from "@/components/BlueHeader";

export default function LikedPostsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <BlueHeader />
        <div className="flex-grow">
          <h1>Liked Posts Page...</h1>
        </div>
      </div>
    </div>
  );
}
