import React from "react";

export default function OurMission() {
  return (
    <div>
      <section className="py-16 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl font-extrabold text-center mb-8 text-white">
            Our Mission
          </h3>
          <p className="text-xl text-center mb-12 text-gray-300">
            At Find Your Homie, we aim to simplify the housing journey for UCSB
            students by providing an intuitive platform to find housing,
            subleases, and roommates effortlessly.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl text-white font-semibold mb-2">
                🌟 Excellence
              </h4>
              <p className="text-gray-400">
                Deliver a seamless, student-focused housing experience.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl text-white font-semibold mb-2">
                🔗 Connection
              </h4>
              <p className="text-gray-400">
                Build a community by connecting like-minded individuals.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl text-white font-semibold mb-2">
                🏡 Accessibility
              </h4>
              <p className="text-gray-400">
                Provide easy access to reliable listings and profiles.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-blue-700 opacity-30 blur-3xl rounded-full -top-10 -left-20 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-slate-700 opacity-25 blur-3xl rounded-full -bottom-20 -right-10 animate-pulse"></div>
        </div>
      </section>
    </div>
  );
};

