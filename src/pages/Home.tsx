import React from 'react';
import { ChevronRight, Compass, Map, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Wild Trails and Beyond
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore the untamed, discover the unknown. Your journey into the wilderness begins here.
              </p>
              <Link
                to="/tours"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-green-700 transition duration-300 inline-flex"
              >
                Explore Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional guides with years of wilderness experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique Trails</h3>
              <p className="text-gray-600">Discover hidden paths and breathtaking landscapes</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-gray-600">Intimate experiences with like-minded adventurers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mountain Trek",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Moderate",
                duration: "2 days"
              },
              {
                title: "Forest Trail",
                image: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Easy",
                duration: "1 day"
              },
              {
                title: "Alpine Adventure",
                image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                difficulty: "Challenging",
                duration: "3 days"
              }
            ].map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{tour.difficulty}</span>
                    <span>{tour.duration}</span>
                  </div>
                  <Link
                    to="/tours"
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated with Our Adventures</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest updates on new trails, travel tips, and exclusive offers.
            </p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;