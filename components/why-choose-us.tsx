import React from "react";

export default function WhyChooseUs() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
            Why Choose Find Your Homie?
          </h3>
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Centralized Listings
              </h4>
              <p className="text-lg text-gray-600">
                All UCSB housing options in one place, making your search faster
                and easier.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Verified Users
              </h4>
              <p className="text-lg text-gray-600">
                Connect with real UCSB students and trusted property owners,
                ensuring a safe and reliable experience.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Company Ratings
              </h4>
              <p className="text-lg text-gray-600">
                Don't blindly trust agencies. Check what students have to say about the most popular real-estate companies.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Real-Time Updates
              </h4>
              <p className="text-lg text-gray-600">
                Stay informed with real-time updates on housing availability, ensuring you never miss out on the perfect home.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-blue-900 rounded-full animate-pulse"></div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Easy Communication
              </h4>
              <p className="text-lg text-gray-600">
                Our built-in messaging system makes it seamless to communicate
                with potential roommates or landlords.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
          >
            <defs>
              <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#cce7ff" />
                <stop offset="100%" stopColor="#e8f0ff" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="300" r="300" fill="url(#circleGradient)" />
          </svg>
        </div>
      </section>
    </div>
  );
}
