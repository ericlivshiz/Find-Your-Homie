import React from "react";

export default function OurMission() {
  const were = "We're";
  const isnt = "isn't";
  const its = "it's";
  const doesnt = "doesn't";
  const heres = "Here's";
  const ucsbs = "UCSB's";
  const arent = "aren't";
  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-white mb-12">
            Solving {ucsbs} Housing Crisis
          </h1>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto text-left text-gray-300 mb-16">
            <p className="text-xl leading-relaxed mb-6">
              At UCSB, housing {isnt} just a challenge - {its} a crisis. Students are faced with
              exorbitant rents, cutthroat competition, and an overwhelming maze of social media
              posts, group chats, and outdated platforms. Real-estate companies have exploited the 
              high demand, focusing on maximizing profits while students struggle to find a place 
              they can afford to call home.
            </p>
            <p className="text-xl leading-relaxed">
              For too long, this chaos has been accepted as the norm. But it {doesnt} have to be. 
              Our mission is simple: to empower students by creating a platform that centralizes 
              and simplifies the housing search process while fostering a community of fairness, 
              collaboration, and trust.
            </p>
          </div>

          {/* Section 1: The Problem */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-yellow-300 mb-6">The Problem</h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Isla Vista and UCSB face one of the highest demands for student housing in California.
              This demand has created an unbalanced housing market where landlords and real-estate 
              companies have the upper hand. Many students are left:
            </p>
            <ul className="list-disc list-inside text-left text-gray-300 max-w-4xl mx-auto mt-6">
              <li className="mb-3">
                Paying excessive rents for poorly maintained or overcrowded housing.
              </li>
              <li className="mb-3">
                Searching through endless Facebook groups, Instagram stories, and random housing 
                websites to find listings.
              </li>
              <li>
                Struggling to secure housing that meets both their budget and timeline.
              </li>
            </ul>
          </div>

          {/* Section 2: Our Vision */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-yellow-300 mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
              We believe students deserve better. Our vision is a platform that:
            </p>
            <ul className="list-disc list-inside text-left text-gray-300 max-w-4xl mx-auto mt-6">
              <li className="mb-3">
                Aggregates housing listings from social media, housing websites, and other sources 
                into a single, beautifully designed platform.
              </li>
              <li className="mb-3">
                Provides clear, accurate, and up-to-date information about housing options.
              </li>
              <li>
                Encourages fairness and transparency in housing deals, ensuring students {arent} 
                left at the mercy of exploitative practices.
              </li>
            </ul>
          </div>

          {/* Section 3: How We’re Doing It */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-yellow-300 mb-6">
              How {were} Making It Happen
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
              {were} leveraging technology to simplify the housing search process. {heres} how:
            </p>
            <div className="mt-6 space-y-6 text-left text-gray-300 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Scraping</h3>
                <p>
                  By scraping data from diverse sources—social media, housing sites, and more—
                  we bring every available option into one easy-to-navigate platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">User-Friendly Design</h3>
                <p>
                  Our platform is designed with students in mind. Clean, intuitive interfaces make 
                  it easy to search, filter, and compare housing options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Community Focus</h3>
                <p>
                  {were} not just about listings. Our platform connects students with roommates and 
                  creates a space for collaboration, helping you feel at home before you even move in.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-gray-300 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow-300 mb-6">Join Us</h2>
            <p className="text-lg leading-relaxed">
              This {isnt} just about housing; {its} about building a better experience for UCSB 
              students. Together, we can create a future where no student has to worry about finding 
              a safe, affordable place to live. Join us in reshaping the housing landscape—because 
              everyone deserves a place to call home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

