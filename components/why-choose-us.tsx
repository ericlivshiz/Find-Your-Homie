import React from "react";

export default function WhyChooseUs() {
  const dont = "don't";
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-black via-slate-900 to-black animate-gradient-xy relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-extrabold text-white mb-16">
            Why Choose Find Your Homie?
          </h3>
          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                title: "Centralized Listings",
                description:
                  "All UCSB housing options in one place, making your search faster and easier.",
              },
              {
                title: "Verified Users",
                description:
                  "Connect with real UCSB students and trusted property owners, ensuring a safe and reliable experience.",
              },
              {
                title: "Company Ratings",
                description:
                  "Don't blindly trust agencies. Check what students have to say about the most popular real-estate companies.",
              },
              {
                title: "Real-Time Updates",
                description:
                  "Stay informed with real-time updates on housing availability, ensuring you never miss out on the perfect home.",
              },
              /* {
                title: "Easy Communication",
                description:
                  "Our built-in messaging system makes it seamless to communicate with potential roommates or landlords.",
              }, */
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse mb-6"></div>
                <h4 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-lg text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Animated Glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
        >
          <svg
            className="w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <defs>
              <radialGradient id="circleGradientDark" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="300" r="300" fill="url(#circleGradientDark)" />
          </svg>
        </div>
      </section>
    </div>
  );
}
