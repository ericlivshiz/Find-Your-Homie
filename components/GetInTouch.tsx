"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import Supabase client
import { toast } from "@/hooks/use-toast";

export default function GetInTouch() {
  const were = "We're";
  const [email, setEmail] = useState(""); // Email for GetInTouch
  const [waitlistEmail, setWaitlistEmail] = useState(""); // Email for Waitlist
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Regular expression for validating email format
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Handle input changes
  const handleWaitlistEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaitlistEmail(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleJoinWaitlist = async () => {
    if (!emailRegex.test(waitlistEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    try {
      // Call the API route instead of directly inserting into Supabase
      const res = await fetch("/api/insertWaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: waitlistEmail }),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        // Show success toast
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
        console.log("Successfully added to waitlist:", result.data);
        // Reset the form field after submission
        setWaitlistEmail("");
      } else {
        // Show error toast if something went wrong
        toast({
          title: "Error",
          description: result.error || "Something went wrong while joining the waitlist.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting to API:", error);
      toast({
        title: "Error",
        description: "Something went wrong while joining the waitlist.",
        variant: "destructive",
      });
    }
  };
  

  // Handle Send Message submission
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
  
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    try {
      // Call the API route instead of directly inserting into Supabase
      const res = await fetch("/api/insertMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      const result = await res.json();
  
      if (res.ok) {
        // Show success toast
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default",
        });
        console.log("Successfully sent message:", result.data);
        // Reset the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Show error toast if something went wrong
        toast({
          title: "Error",
          description: result.error || "Something went wrong while sending your message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting to API:", error);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive",
      });
    }
  };
  

  return (
    <div>
      <section className="py-24 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black animate-gradient-xy"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Join The Waitlist Section */}
          <div className="max-w-3xl mx-auto bg-slate-900 bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8 mb-12" id="join-waitlist-section">
            <h2 className="text-5xl font-extrabold text-center text-white mb-6">
              Join The Waitlist
            </h2>
            <p className="text-xl text-center text-gray-300 mb-12">
              Be the <span className="text-yellow-300">first</span> to know when we <span className="text-yellow-300">launch</span>. Enter your email to get started!
            </p>
            <div className="flex justify-center mb-8">
              <input
                type="email"
                value={waitlistEmail}
                onChange={handleWaitlistEmailChange}
                placeholder="Enter your email"
                className="w-full max-w-[400px] px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-200"
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* "Or" Divider */}
          <div className="text-center my-12 text-gray-400">
            <span className="text-lg">or</span>
          </div>

          {/* Get In Touch Section */}
          <div className="max-w-3xl mx-auto bg-slate-900 bg-opacity-60 backdrop-blur-lg rounded-xl shadow-xl p-8">
            <h1 className="text-5xl font-extrabold text-center text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-center text-gray-300 mb-12">
              {were} open to <span className="text-yellow-300">feedback</span> and <span className="text-yellow-300">contributors</span> who want to help us grow.
            </p>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSendMessage}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={handleMessageChange}
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
}
