import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="hamburger-react"
      aria-expanded={isOpen}
      role="button"
      style={{
        cursor: 'pointer',
        height: '48px',
        position: 'relative',
        transition: '0.4s cubic-bezier(0, 0, 0, 1)',
        userSelect: 'none',
        width: '48px',
        outline: 'none',
      }}
      tabIndex={0}
      onClick={toggleMenu}
    >
      <div
        style={{
          background: 'rgb(29, 196, 104)',
          height: '2px',
          left: '14px',
          position: 'absolute',
          width: '20px',
          top: '17px',
          transition: '0.4s cubic-bezier(0, 0, 0, 1)',
          transform: isOpen ? 'rotate(45deg) translate(4.23px, 4.23px)' : 'none',
        }}
      ></div>
      <div
        style={{
          background: 'rgb(29, 196, 104)',
          height: '2px',
          left: '14px',
          position: 'absolute',
          width: '20px',
          top: '23px',
          transition: '0.2s cubic-bezier(0, 0, 0, 1)',
          transform: isOpen ? 'scaleX(0)' : 'none',
        }}
      ></div>
      <div
        style={{
          background: 'rgb(29, 196, 104)',
          height: '2px',
          left: '14px',
          position: 'absolute',
          width: '20px',
          top: '29px',
          transition: '0.4s cubic-bezier(0, 0, 0, 1)',
          transform: isOpen ? 'rotate(-45deg) translate(4.23px, -4.23px)' : 'none',
        }}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
