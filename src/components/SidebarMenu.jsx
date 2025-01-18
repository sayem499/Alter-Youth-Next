import { useState } from 'react';
import Link from 'next/link';

const SidebarMenu = ({ isSidebarOpen, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed left-0 w-[250px] top-0 bottom-0 z-50 bg-white text-black overflow-hidden 
          transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'}`}
      >
        <nav className="flex flex-col p-6 mt-[3rem] gap-1">
          <Link
            href="/"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === '' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('home')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 pr-2">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
            </svg>
            <span>Home</span>
          </Link>
          <Link
            href="/how-it-works"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'how-it-works' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('how-it-works')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
            </svg>
            <span>How It Works</span>
          </Link>
          <Link
            href="/about"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'about' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('about')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
            </svg>
            <span>About</span>
          </Link>
          <Link
            href="/collaborate"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'collaborate' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('collaborate')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
              <path d="m18 15-2-2"></path>
              <path d="m15 18-2-2"></path>
            </svg>
            <span>Collaborate</span>
          </Link>
          <Link
            href="/scholarship-policy"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'scholarship-policy' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('scholarship-policy')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
            </svg>
            <span>Scholarship Policy</span>
          </Link>
          <Link
            href="/get-in-touch"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'get-in-touch' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('get-in-touch')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V5.25C21 3.89 20.11 3 18.75 3h-13.5C3.89 3 3 3.89 3 5.25v6.51z"></path>
            </svg>
            <span>Get In Touch</span>
          </Link>
          <Link
            href="/get-the-app"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'get-the-app' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('get-the-app')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
            <span>Get The App</span>
          </Link>
          <Link
            href="/login"
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 
              ${activeLink === 'login' ? 'bg-[#dcfce7] text-[#1dc468]' : 'bg-transparent hover:text-[#1dc468]'}`}
            onClick={() => handleLinkClick('login')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 pr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M20 12h-13l3 -3m0 6l-3 -3"></path></svg>
            <span>Login</span>
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