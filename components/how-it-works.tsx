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
    <div className="relative overflow-hidden py-16 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800 animate-gradient-xy"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
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
              className="bg-slate-700 bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all text-center"
            >
              <div className="text-4xl mb-4">
                {index === 0 || index === 1 ? "🔍🏠" : ""}
                {index === 2 ? "🔍👤" : ""}
                {index === 3 || index === 4 ? "📝🏠" : ""}
                {index === 5 ? "👤🏠" : ""}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
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

      {/* Subtle Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-blue-700 opacity-30 blur-3xl rounded-full -top-20 -left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-slate-600 opacity-25 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse"></div>
      </div>
    </div>
  );
}
