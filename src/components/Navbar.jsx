import React, { useState, useEffect } from 'react';
import SvgAlteryouthLogo from './LogoAy1';
import HamburgerMenu from './HamburgerMenu';
import SidebarMenu from './SidebarMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isLargeScreen ? (scrolled ? 'bg-white shadow-lg ' : 'bg-transparent') : 'bg-white shadow-lg'
        }`}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center px-3">
        <div className={`flex items-center ${isLargeScreen ? '' : 'w-full justify-between'}`}>
          {isLargeScreen ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color={`${scrolled ? '#1dc468' : '#ffff'}`}
              style={{ cursor: 'pointer' }}
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleSidebar}
            >
              <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
            </svg>
          ) : (
              <HamburgerMenu toggleMenu={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
          )}
          <a href="/" className={`flex items-center ${isLargeScreen ? '' : 'mx-auto'}`} alt="AlterYouth">
            <SvgAlteryouthLogo
              color={`${isLargeScreen ? (scrolled ? '#1dc468' : '#ffff') : '#1dc468'}`}
              style={{ width: '12rem', height: '4rem' }}
            />
          </a>
        </div>
        {isLargeScreen && <ul className={`flex space-x-2 gap-4 ${scrolled ? 'text-[#1dc468]' : 'text-[#ffff]'}`}>
          {['About', 'How It Works', 'Scholarships', 'Collaborate', 'Login'].map((link) => (
            <li key={link} className="relative font-bold text-sm">
              <a
                href={`${link.toLowerCase().replace(/ /g, '-')}`}
                className="relative pb-1"
              >
                {link}
                <span
                  className="absolute left-0 bottom-0 h-1 w-0 bg-[#1dc468] transition-all ease-in-out duration-500 rounded"
                ></span>
              </a>
            </li>
          ))}
        </ul>}
      </div>
      <style jsx>{`
        a:hover span {
          width: 100%;
        }
      `}</style>

      {<SidebarMenu isSidebarOpen={isSidebarOpen} toggleMenu={toggleSidebar} />} {/* Render SidebarMenu conditionally */}
    </nav>
  );
};

export default Navbar;

