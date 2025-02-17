import { Sidebar } from "@/components/sidebar";
import Header from "@/components/Header";
import SubleaseCard from "../../sublease-listings/components/SubleaseCard";
import RoommateCard from "../../roommate-matching/components/RoommateCard";
import { MobileNavbar } from '@/components/MobileNavBar';

export default function LikedPostsPage() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        <div className="flex-grow p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-extrabold mb-4 text-white">Liked Housing Posts</h2>
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
                image_urls: ["/assets/iv-property-1.png"],
              }} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4 text-white">Liked Sublease Posts</h2>
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
                image_urls: ["/assets/iv-property-2.png"],
              }} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4 text-white">Liked Roommate Profiles</h2>
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
                image_url="/assets/random-guy.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
