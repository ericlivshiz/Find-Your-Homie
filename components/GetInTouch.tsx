import React from "react";

export default function GetInTouch() {
    return (
        <div>
          <section className="py-24 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-xy"></div>
    
            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
              {/* Title and Subtitle */}
              <h1 className="text-5xl font-extrabold text-center text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-center text-gray-300 mb-12">
                We’re open to <span className="text-yellow-300">feedback</span> and{" "}
                <span className="text-yellow-300">contributors</span> who want to help us grow.
              </p>
    
              {/* Contact Form */}
              <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
    
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
    
                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
    
                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
    
            {/* Subtle Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-[300px] h-[300px] bg-gray-600 opacity-30 blur-3xl rounded-full -top-10 -left-20 animate-pulse"></div>
              <div className="absolute w-[400px] h-[400px] bg-gray-700 opacity-25 blur-3xl rounded-full -bottom-20 -right-10 animate-pulse"></div>
            </div>
          </section>
        </div>
      );
};

