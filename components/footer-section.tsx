import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react"; // Import the necessary icons from lucide-react

export default function FooterSection() {
  return (
    <div>
      <footer className="py-6 bg-gradient-to-b from-slate-900 to-black text-white text-center">
        <p className="text-lg font-medium">
          Built by <span className="text-blue-400">Gauchos</span>, for{" "}
          <span className="text-blue-400">Gauchos</span>.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/company/find-your-homie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/findyourhomieucsb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://x.com/findyourhomie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <Twitter size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
