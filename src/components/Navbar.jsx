import React, { useState, useEffect } from 'react';
import SvgAlteryouthLogo from './LogoAy1';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-white shadow-lg ' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
      <div className="">
          <a href='/' className='flex items-center font-sans' alt='AlterYouth'>
            <SvgAlteryouthLogo color={`${
        scrolled ? '#1dc468' : '#ffff'
      }`} style={{ width: '12em', height: '4em' }} /> {/* color="#1dc468" */}
          </a>
        </div>
        <ul className={`flex space-x-4 ${scrolled ? 'text-[#1dc468]' : 'text-[#ffff]'}`}>
          {['About', 'How It Works', 'Scholarships', 'Collaborate', 'Login'].map((link) => (
            <li key={link} className="relative font-bold text-sm">
              <a
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="relative pb-1"
              >
                {link}
                <span
                  className="absolute left-0 bottom-0 h-1 w-0 bg-[#1dc468] transition-all ease-in-out duration-500 rounded"
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        a:hover span {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
