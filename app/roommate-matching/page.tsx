import BlueHeader from "@/components/BlueHeader";
import RoommateCard from './components/RoommateCard'
import PostProfileButton from './components/PostProfileButton'

const dummyListings = [
  {
    id: 1,
    name: 'John D.',
    gender: 'Male',
    bio: 'Easygoing software developer looking for a quiet space.',
    budget: '800-1200',
    sleepingHabits: 'Night owl',
    smoking: false,
    drinking: true,
    pets: true,
    moveInDate: '2024-03-01',
    contactInfo: 'john.doe@example.com',
    image: '/assets/random-guy.png'
  },
  {
    id: 2,
    name: 'Sarah M.',
    gender: 'Female',
    bio: 'Grad student seeking roommate for shared apartment.',
    budget: '600-900',
    sleepingHabits: 'Early bird',
    smoking: false,
    drinking: false,
    pets: false,
    moveInDate: '2024-02-15',
    contactInfo: 'sarah.m@example.com',
    image: '/assets/random-girl.png'
  },
  // Add more dummy listings as needed
]

export default function RoommateListingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BlueHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <main className="w-full md:w-3/4">
            <PostProfileButton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {dummyListings.map((listing) => (
                <RoommateCard key={listing.id} {...listing} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

