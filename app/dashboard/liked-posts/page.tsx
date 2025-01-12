import { Sidebar } from "@/components/sidebar";
import BlueHeader from "@/components/BlueHeader";
import SubleaseCard from "../../sublease-listings/components/SubleaseCard";
import RoommateCard from "../../roommate-matching/components/RoommateCard";

export default function LikedPostsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <BlueHeader />
        <div className="flex-grow p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Liked Housing Posts</h2>
            {/* Add dummy housing post cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example housing post card */}
              <SubleaseCard sublease={{
                id: 1,
                title: "Beautiful Apartment",
                rent: 1200,
                move_in: "2023-11-01",
                move_out: "2024-05-01",
                location: "Downtown",
                image_urls: ["/path/to/image.jpg"],
              }} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Liked Sublease Posts</h2>
            {/* Add dummy sublease post cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example sublease post card */}
              <SubleaseCard sublease={{
                id: 2,
                title: "Cozy Studio",
                rent: 800,
                move_in: "2023-12-01",
                move_out: "2024-06-01",
                location: "Uptown",
                image_urls: ["/path/to/image.jpg"],
              }} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Liked Roommate Profiles</h2>
            {/* Add dummy roommate profile cards here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example roommate profile card */}
              <RoommateCard
                name="John Doe"
                bio="Looking for a friendly roommate."
                budget="1000"
                smoking={false}
                drinking={true}
                pets={false}
                contact_info="john.doe@example.com"
                image_url="/path/to/profile.jpg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
