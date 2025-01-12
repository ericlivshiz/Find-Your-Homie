export default function HowItWorks() {
    const steps = [
      {
        title: "Looking to Rent",
        description:
          "Explore verified listings tailored for UCSB students to find your next home effortlessly.",
      },
      {
        title: "Looking For a Sublease",
        description:
          "Connect with students subleasing their properties in prime locations.",
      },
      {
        title: "Looking for a Roommate (No Current Lease)",
        description:
          "Find a roommate who matches your preferences and start your housing journey together.",
      },
      {
        title: "Looking to Post Your Property",
        description:
          "Showcase your property to UCSB students with detailed descriptions and photos.",
      },
      {
        title: "Looking to Post Sublease",
        description:
          "Easily find tenants for your property with our secure and intuitive platform.",
      },
      {
        title: "Looking for a Roommate (With Current Lease)",
        description:
          "Quickly find compatible roommates to share your existing space.",
      },
    ];
  
    return (
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 text-center">
            How Find Your Homie Works
          </h1>
          <h2 className="text-xl text-center mb-12 text-yellow-300">
            We noticed students often face these housing needs:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">
                  {index === 0 || index === 1 ? '🔍🏠' : ''} {/* Looking to Rent, Looking For a Sublease */}
                  {index === 2 ? '🔍👤' : ''} {/* Looking for a Roommate (No Current Lease) */}
                  {index === 3 || index === 4 ? '📝🏠' : ''} {/* Looking to Post Your Property, Looking to Post Sublease */}
                  {index === 5 ? '👤🏠' : ''} {/* Looking for a Roommate (With Current Lease) */}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{step.title}</h3>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-yellow-300">
              Our platform provides tailored solutions for each scenario, making
              it easy for students to find housing, sublease, and connect with
              roommates.
            </p>
          </div>
        </div>
      </div>
    );
  }
  