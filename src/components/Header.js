import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up when component unmounts
    };
  }, [toggleMenu]);

  return (
    <header className="flex justify-between items-center px-5 py-3 bg-primary sticky top-0 z-50 shadow-md">
      {/* Brand Name */}
      <div
  style={{
    background: 'linear-gradient(to right,rgb(14, 15, 32),rgb(36, 4, 241))',  // Background gradient
    padding: '10px', // Adjust padding for full banner
    borderRadius: '8px', // Optional rounded corners
  }}
>
  <a
    className="font-bold text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
    href="#"
  >
    R&H WebCraft
  </a>
</div>



      {/* Desktop Navigation */}
      <nav className="hidden md:block sticky top-0 z-50">
        <ul className="flex text-white space-x-6 font-medium">
          <li><a className="hover:text-blue-300 transition" href="/">Home</a></li>
          <li><a className="hover:text-blue-300 transition" href="/#about">About</a></li>
          <li><a className="hover:text-blue-300 transition" href="/#projects">Projects</a></li>
          {/* <li><a className="hover:text-blue-300 transition" href="/#resume">Resume</a></li> */}
          <li><a className="hover:text-blue-300 transition" href="/#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="absolute top-0 left-0 w-full bg-primary shadow-lg md:hidden z-50">
          <ul
            onClick={() => setToggleMenu(false)} // Close menu after click
            className="flex flex-col text-white font-medium space-y-4 p-6 justify-center items-center"
          >
            <li><a className="hover:text-blue-300 transition" href="/">Home</a></li>
            <li><a className="hover:text-blue-300 transition" href="#about">About</a></li>
            <li><a className="hover:text-blue-300 transition" href="#projects">Projects</a></li>
            {/* <li><a className="hover:text-blue-300 transition" href="#resume">Resume</a></li> */}
            <li><a className="hover:text-blue-300 transition" href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button
    onClick={() => setToggleMenu(!toggleMenu)}
    className="block md:hidden z-50"
>
    <Bars3Icon className="text-white h-6 w-6" />
</button>

    </header>
  );
}
