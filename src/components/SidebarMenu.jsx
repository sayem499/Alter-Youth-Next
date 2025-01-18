import { useState } from 'react';
import Link from 'next/link';

const SidebarMenu = ({ isSidebarOpen, toggleMenu }) => {
  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 z-50 bg-white text-black overflow-hidden 
          transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[250px]' : 'w-0'}`}
      >
        <nav className="flex flex-col space-y-4 p-6 mt-[5rem]">
          <Link href="/" className="flex items-center px-4 py-2 rounded-lg bg-green-500 hover:bg-green-400 transition">
            Home
          </Link>
          <Link href="/how-it-works" className="flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 transition">
            How It Works
          </Link>
          <Link href="/about" className="flex items-center px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 transition">
            About
          </Link>
          <Link href="/collaborate" className="flex items-center px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 transition">
            Collaborate
          </Link>
          <Link href="/scholarship-policy" className="flex items-center px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 transition">
            Scholarship Policy
          </Link>
          <Link href="/get-in-touch" className="flex items-center px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 transition">
            Get in Touch
          </Link>
          <Link href="/get-the-app" className="flex items-center px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 transition">
            Get the App
          </Link>
          <Link href="/login" className="flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
            Log in
          </Link>
        </nav>
      </div>

      {/* Dark Background Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ease-in-out"
        ></div>
      )}
    </div>
  );
};

export default SidebarMenu;