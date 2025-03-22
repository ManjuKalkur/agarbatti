import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://img.freepik.com/free-photo/lion-dry-forest-landscape_23-2151661771.jpg?t=st=1742207656~exp=1742211256~hmac=f390dd8b031e2a9e178e0280ea0416ebeee8fc54bbe575874acd1795e0fcfaf5&w=1380",
    "https://img.freepik.com/free-photo/view-wild-fox_23-2150793421.jpg?t=st=1742207935~exp=1742211535~hmac=3d89faeab4361929581a9fb21c1ccadc36cca4e9f41c7b8aa94aa0f3fbacc8c7&w=1800",
    "https://img.freepik.com/free-photo/gray-mallards-standing-truck-lake_181624-10673.jpg?t=st=1742208132~exp=1742211732~hmac=71030cb0573fb0fb2ca9d133882f76130c98d19f0ea9095153eb6b43be6746c0&w=1380",
    "https://img.freepik.com/free-photo/australian-frogs-branch_488145-334.jpg?t=st=1742208302~exp=1742211902~hmac=efc0467d25ca0b0a3910bb4faff46b38080cce5f132e0c15810ad3d66a6f07c8&w=1380",
  ];

  const headings = [
    "Explore the Untamed",
    "Discover the Unknown",
    "In the Wilderness, We Find Peace",
    "Wildlife is Precious – Let’s Keep it Wild",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Wildlife Background"
        className="absolute inset-0 w-full min-h-screen  md:object-cover transition-opacity duration-1000 ease-in-out animate-zoom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide font-[cursive] animate-fadeIn">
          {headings[currentIndex]}
        </h2>
      </div>

      {/* Tagline (Moved to Bottom Before Book Now Button) */}
      {/* <div className="absolute  bottom-28 md:bottom-20 w-full flex justify-center">
        <p className="text-xl   md:text-lg font-extrabold  text-white bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 rounded-lg shadow-xl uppercase tracking-widest text-center animate-bounce drop-shadow-lg ">
          🌿 Embrace the Wild – Adventure Awaits! Your journey into the wilderness begins here🦁
        </p>
      </div> */}

      <div className="absolute bottom-28 md:bottom-20 w-full flex justify-center">
  <div className="bg-black/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/10 flex items-center justify-center animate-fadeInUp transition-all duration-500  drop-shadow-lg">
    <p className="text-2xl font-[Baskerville] md:text-xl  text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 tracking-widest  text-center drop-shadow-lg">
      🌿 Embrace the Wild – Adventure Awaits! Your journey into the wilderness begins here 🦁
    </p>
  </div>
</div>

      {/* Book Now Button (Visible After Image on Mobile) */}
      <div className="absolute lg:bottom-2 bottom-6 bottom-20 w-full flex justify-center md:bottom-2">
        <button
          className="p-3 text-sm font-bold text-white bg-orange-600 rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-yellow-500 animate-bounce duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
        >
          Book Now
        </button>
      </div>

      {/* Booking Form Popup */}
      {isOpen && (
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">Book Your Adventure</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Destination"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="number"
                placeholder="Number of People"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300 font-bold"
              >
                Submit
              </button>
            </form>
            <button
              className="mt-4 text-red-600 underline block text-center"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;