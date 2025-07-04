import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-secondary bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} ITS4U. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
