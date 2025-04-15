import React, { useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';

import logo from '../assets/phoshak-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/' },
    { name: 'Shop Products', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'Contact', path: '/' },
  ];
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-50  transition-all duration-300 ${
        scrolling ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}>
     {/* <nav className=" backdrop-blur-md fixed w-full z-50"> */}
       {/* <nav className=' fixed w-full z-50 '> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <Mountain className="h-8 w-8 text-green-600" /> */}
              <img src={logo} className='h-16'/>
              <span className="ml-2 text-xl font-bold text-white"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white   hover:text-black hover:bg-yellow-300 px-3 py-2 rounded-md  font-normal"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
