import React from "react";

export default function OurMission() {
  const thats = " that's";
  const its = "it's";
  const isnt = "isn't"
  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              UCSB students face a growing housing crisis. Many struggle with exorbitant rents, 
              predatory landlords, and an overwhelming, disorganized search process. 
              Real-estate companies prioritize profits, leaving students to navigate an 
              exhausting maze of social media posts, group chats, and scattered housing sites. 
              <span className="block mt-4 text-yellow-300 font-semibold">
                We're here to change that.
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-12">
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-3xl shadow-lg">
                💡
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  Centralized Information
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  We scrape data from scattered sources, unifying it into a single platform  
                  {thats} intuitive, reliable, and easy to navigate.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start text-center md:text-right gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-3xl shadow-lg">
                🤝
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  Supporting Students
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Our mission {isnt} profit—{its} to empower students by simplifying 
                  their housing search and helping them find fair, affordable options.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-3xl shadow-lg">
                🌎
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">
                  Building Community
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  By connecting students with housing opportunities and roommates, 
                  we foster a sense of collaboration and community in Isla Vista and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-3xl rounded-full -top-10 -left-20 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-700 opacity-25 blur-3xl rounded-full -bottom-20 -right-10 animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}
