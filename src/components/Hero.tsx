import React, { useState, useEffect } from "react";
import L1 from '../assets/Updated-landImg1.png'
import L2 from '../assets/Landing1.png';
import L3 from '../assets/updated-LandingImg2.png'



const Hero = () => {
  const images = [L3,L2,L1];
  const taglines = [
    "Experience Serenity with Every Scent",
    "Pure Fragrance, Pure Bliss",
    "Discover the Magic of Incense"
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Wildlife Background"
        className="w-screen h-screen animate-zoom"
      />

      {/* Tagline */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-5xl sm:text-6xl md:text-5xl font-extrabold text-center">
  <p className="text-shadow-lg bg-gradient-to-b from-slate-900 via-pink-50 to-red-200 bg-clip-text text-transparent p-4 
               font-bold uppercase tracking-wide  animate-text transform -translate-y-12">
    {taglines[currentIndex]}
  </p>
</div>


      {/* Shop Now Button (Visible After Image on Mobile) */}
      <div className="absolute lg:bottom-2 bottom-6 bottom-20 w-full flex justify-center md:bottom-2">
        <button className="p-3 text-sm font-bold text-white bg-orange-600 rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-yellow-500 animate-bounce duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
