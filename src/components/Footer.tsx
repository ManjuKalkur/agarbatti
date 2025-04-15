import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact"  className="bg-amber-900 text-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <img src="src\assets\phoshak-logo.png" alt="" />
                {/* <Flame className="h-6 w-6 text-amber-400" /> */}
                {/* <h3 className="text-lg font-semibold ml-2">Divine Agarbatti</h3> */}
              </div>
              <p className="text-amber-300">
                Bringing divine fragrance to your spiritual journey through traditional agarbatti craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-amber-300 hover:text-white">About Us</a></li>
                <li><a href="#shop" className="text-amber-300 hover:text-white">Shop</a></li>
                <li><a href="#benefits" className="text-amber-300 hover:text-white">Blogs</a></li>
                <li><a href="#contact" className="text-amber-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-amber-300">
                <li>Rajalakshmi</li>
                <li>247, 3rd Main Post Box.1834,Chamarajpet,</li>
                <li>Bangalore, Karnataka, India</li>
                <li>500018</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <p className="text-amber-300 mb-4">
                Subscribe for sacred updates and special offers.
              </p>
              <div>
              <Facebook></Facebook>  
             <Instagram/> 
              </div>
              {/* <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-full w-full bg-amber-800 text-amber-100 placeholder-amber-400 border-2 border-amber-700 focus:outline-none focus:border-amber-500"
                />
                <button className="px-6 py-2 bg-amber-600 text-white rounded-r-full hover:bg-amber-500 transition-colors duration-300">
                  Join
                </button>
              </div> */}
            </div>
          </div>
          <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-400">
            <p>&copy; 2025 Rajalakshmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;