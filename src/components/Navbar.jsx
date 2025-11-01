
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray/80 backdrop-blur-lg border-b border-purple-400/30 shadow-md'
          : 'bg-black/30 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-semibold text-purple-300">Aditi</h1>
        <ul className="flex gap-8 text-white text-lg">
        <a href="#Header" className='hover:text-purple-300 cursor-pointer transition-colors'>Home</a>
        <a href="#About" className='hover:text-purple-300 cursor-pointer transition-colors'>About</a>
        <a href="#Skills" className='hover:text-purple-300 cursor-pointer transition-colors'>Skills</a>
        <a href="#Projects" className='hover:text-purple-300 cursor-pointer transition-colors'>Projects</a>
        <a href="#Contact" className='hover:text-purple-300 cursor-pointer transition-colors'>Contact</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
