import React from 'react';
import { ChevronRight, Compass, Flame, Heart, LucideLocate, LucideLocateFixed, Map, Sparkles, Star, Users, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

import P1 from '../assets/P1.jpg'
import P2 from '../assets/P2.jpg'
import P3 from '../assets/P3.jpeg'


import { MapPin } from "lucide-react";
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

const Home = () => {

  


    
const products = [
  {
    id: 1,
    name: 'Premium Sandalwood Agarbatti',
    description: 'Pure sandalwood incense sticks with deep, woody aroma for meditation and relaxation',
    price: 199,
    image: P1,
    rating: 4.9,
    duration: '45 minutes',
    weight: '100 gms',
    quantity: '50 sticks',
    fragrance: 'Rich Sandalwood'
  },

  {
    id: 2,
    name: 'Lavender Dreams Agarbatti',
    description: 'Calming lavender fragrance for peaceful sleep and stress relief',
    price: 99,
    image: P2,
    rating: 4.8,
    duration: '40 minutes',
    weight: '80 gms',
    quantity: '40 sticks',
    fragrance: 'Soothing Lavender'
  },

  {
    id: 3,
    name: 'Sacred Patchouli Agarbatti',
    description: 'Exotic patchouli blend for spiritual practices and deep meditation',
    price: 199,
    image: P3,
    rating: 4.9,
    duration: '50 minutes',
    weight: '120 gms',
    quantity: '60 sticks',
    fragrance: 'Mystical Patchouli'
  },
  {
    id: 4,
    name: 'Mystic Rose Agarbatti',
    description: 'Premium rose fragrance for divine worship and peaceful ambiance',
    price: 99,
    image: P1,
    rating: 4.7,
    duration: '35 minutes',
    weight: '75 gms',
    quantity: '35 sticks',
    fragrance: 'Pure Rose'
  },
  {
    id: 5,
    name: 'Jasmine Bliss Agarbatti',
    description: 'Sweet jasmine fragrance for a serene and peaceful atmosphere',
    price: 200,
    image: P2,
    rating: 4.8,
    duration: '40 minutes',
    weight: '90 gms',
    quantity: '45 sticks',
    fragrance: 'Fresh Jasmine'
  },
  {
    id: 6,
    name: 'Lotus Temple Agarbatti',
    description: 'Sacred lotus fragrance for temple worship and meditation',
    price: 99,
    image: P3,
    rating: 4.9,
    duration: '45 minutes',
    weight: '100 gms',
    quantity: '50 sticks',
    fragrance: 'Divine Lotus'
  }
];


 
  return (
    <div>
      <Hero/>
    
 {/* Benefits Section */}
 <div id="benefits" className="bg-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
              Why Choose Our Agarbatti?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Sparkles className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Pure Ingredients</h3>
              <p className="text-amber-700">
                Made with natural essential oils and premium raw materials for authentic fragrance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Flame className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Long-Lasting</h3>
              <p className="text-amber-700">
                Slow-burning sticks that provide lasting fragrance throughout your ritual
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Wind className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Natural Aroma</h3>
              <p className="text-amber-700">
                Traditional manufacturing process that preserves the authentic fragrance
              </p>
            </div>
          </div>
        </div>
      </div>

{/* about preview */}
      <section className="bg-yellow-50 py-14 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Discover Our Legacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Since 1935, Rajalakshmi Perfumery Works has handcrafted incense sticks with love and tradition in the
            princely state of Mysore. Managed today by the third generation in Bangalore, we continue to spread the
            fragrance of India worldwide while supporting thousands of local families.
          </p>
          <Link
            to="/about-us"
            className="inline-block bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Read More
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="src\assets\about.jpg" // Use an appropriate image
            alt="Rajalakshmi Legacy"
            className="w-full"
          />
        </div>
      </div>
    </section>


{/* Featured Products */}
<section className="bg-white py-20 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-extrabold text-amber-900 sm:text-4xl">
        Featured Products
      </h2>
      <p className="mt-4 text-lg text-amber-700">
        Each stick is carefully crafted using traditional methods and pure ingredients
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-amber-100"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-amber-50">
              <Heart size={20} className="text-amber-700" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="text-white font-medium">{product.fragrance}</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <Star className="text-amber-400" size={20} />
              <span className="ml-1 text-amber-700">{product.rating}</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              {product.name}
            </h3>
            {/* <p className="text-amber-700 text-sm mb-4">{product.description}</p> */}
            <div className="grid grid-cols-2 gap-2 text-sm text-amber-600 mb-4">
              <div className="flex items-center">
                {/* <Flame size={16} className="mr-1" /> */}
                {/* <span>{product.duration}</span> */}
              </div>
              <div className="flex items-center">
                {/* <span>{product.quantity}</span> */}
              </div>
              <div className="flex items-center">
                {/* <span>{product.weight}</span> */}
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to={`/product/${product.id}`}
                className="px-5 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors duration-300 text-sm font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/shop"
        className="inline-block px-6 py-3 text-white bg-amber-700 hover:bg-amber-800 rounded-full text-lg font-semibold transition"
      >
        View All Products
      </Link>
    </div>
  </div>
</section>


{/* testinomials */}

<section className="relative bg-gradient-to-br from-yellow-50 to-amber-100 py-16 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
      Our Happy Customers
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      Discover what people are saying about our premium incense products. Real words from real people.
    </p>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: 'Priya Sharma',
          location: 'Mumbai, India',
          feedback:
            '“Absolutely love the sandalwood fragrance! It fills my home with peace and positivity. Truly divine.”',
          image: 'https://i.pravatar.cc/100?img=1',
          rating: 5,
        },
        {
          name: 'Rajesh Kumar',
          location: 'Delhi, India',
          feedback:
            '“The incense sticks last long and have a pure, natural scent. I use them daily during meditation.”',
          image: 'https://i.pravatar.cc/100?img=2',
          rating: 4.8,
        },
        {
          name: 'Anjali Mehta',
          location: 'Bangalore, India',
          feedback:
            '“Elegant packaging, quick delivery and the fragrance is beyond beautiful. Highly recommend!”',
          image: 'https://i.pravatar.cc/100?img=3',
          rating: 5,
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-amber-200"
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full border-2 border-amber-300"
            />
            <div>
              <p className="font-bold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.location}</p>
            </div>
          </div>
          <div className="flex text-amber-400 mb-2">
            {Array.from({ length: Math.floor(t.rating) }).map((_, idx) => (
              <svg
                key={idx}
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09L5.2 12.18.4 7.91l6.184-.9L10 1.5l3.416 5.51 6.184.9-4.8 4.27 1.078 5.91z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic leading-relaxed">{t.feedback}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Decorative flare */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-200 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 left-0 w-36 h-36 bg-yellow-300 rounded-full opacity-20 blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
</section>



<section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
      Trusted by Our Esteemed Clients
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      We are proud to serve some of the most respected names across the industry.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
      {[
        'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_Nirma_Limited.png',
        'https://1000logos.net/wp-content/uploads/2021/05/Dabur-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/ITC_Limited_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/fb/Emami_logo.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Zed_Black_logo.png/800px-Zed_Black_logo.png',
      ].map((logo, i) => (
        <div key={i} className="flex items-center justify-center">
          <img
            src={logo}
            alt={`Client ${i + 1}`}
            className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  </div>
</section>




<section id="contact" className="bg-gradient-to-br from-white via-rose-100 to-yellow-100 py-24 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    {/* Left Content */}
    <div className="space-y-8">
      <h2 className="text-5xl font-extrabold text-gray-800 leading-tight drop-shadow-sm">
      Let’s Connect With Us
      </h2>
      <p className="text-lg text-gray-600 max-w-md">
        Whether you have a question about products, pricing, or anything else — our team is ready to answer all your questions.
      </p>
      <div className="space-y-4 text-base">
        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-xl"><FaMapMarkerAlt className="text-red-500 w-6 h-6" /></span>
          <span className="text-gray-700">247, 3rd Main Post Box.1834,Chamarajpet,</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-xl"><FaPhoneAlt className="text-green-500 w-6 h-6" /></span>
          <span className="text-gray-700">+91 9341223894</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-xl"><FaEnvelope className="text-blue-500 w-6 h-6" /></span>
          <span className="text-gray-700">phoshak@yahoo.co.in</span>
        </div>
      </div>
    </div>

    {/* Right Form */}
    <form className="bg-white shadow-2xl rounded-3xl p-10 space-y-6 border border-yellow-100">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
        <textarea
          rows={5}
          placeholder="Write your message here..."
          className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-800 via-pink-400 to-pink-700 text-white font-bold py-3 rounded-xl shadow-md hover:brightness-110 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>




    </div>
  );
};

export default Home;