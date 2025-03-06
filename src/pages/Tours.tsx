import React, { useState } from 'react';
import { Calendar, Clock, Mountain, Users, MapPin, Shield, IndianRupee } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    {
      title: "Mountain Trek Adventure",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      difficulty: "Moderate",
      duration: "2 days",
      groupSize: "6-8 people",
      nextDate: "March 15, 2024",
      price: "5299 Rs",
      location: "Rocky Mountains",
      description: "Experience the thrill of mountain trekking with breathtaking views and expert guidance. Trek through pristine alpine meadows, witness stunning sunrises, discover  mountain lakes.",
      highlights: [
        "Professional mountain guides",
        "All camping equipment included",
        "Gourmet mountain meals",
        "Photography opportunities"
      ]
    },
    {
      title: "Forest Trail Expedition",
      image: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      difficulty: "Easy",
      duration: "1 day",
      groupSize: "8-10 people",
      nextDate: "March 20, 2024",
      price: "5149 Rs",
      location: "Ancient Redwood Forest",
      description: "Discover the hidden wonders of ancient forests and their diverse wildlife. Walk among towering trees, learn about forest ecology, and spot native wildlife in their natural habitat.",
      highlights: [
        "Expert naturalist guide",
        "Wildlife spotting",
        "Packed lunch included",
        "Educational program"
      ]
    },
    {
      title: "Alpine Adventure Challenge",
      image: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      difficulty: "Challenging",
      duration: "3 days",
      groupSize: "4-6 people",
      nextDate: "April 1, 2024",
      price: "6499 Rs",
      location: "Swiss Alps",
      description: "Push your limits with this challenging alpine adventure in pristine mountain landscapes. Experience high-altitude hiking, basic mountaineering, and spectacular glacier views.",
      highlights: [
        "Professional alpine guides",
        "Safety equipment provided",
        "Mountain hut accommodation",
        "Technical skills training"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 relative text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Adventure Awaits</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Embark on expertly guided tours that combine thrilling adventures, education, and unforgettable experiences in the wild.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-gray-600">Personal attention and better experience</p>
            </div>
            <div className="text-center p-6">
              <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unique Trails</h3>
              <p className="text-gray-600">Access to exclusive locations and routes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                    {tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-gray-600">{tour.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tour.title}</h3>
                  <p className="text-gray-600 mb-6">{tour.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Mountain className="h-5 w-5 mr-2 text-green-600" />
                      <span>Difficulty: {tour.difficulty}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-green-600" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-green-600" />
                      <span>Group Size: {tour.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      <span>Next Date: {tour.nextDate}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTour(tour);
                      setIsModalOpen(true);
                    }}
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 font-medium flex items-center justify-center"
                  >
                    <IndianRupee className="h-5 w-5 mr-2" />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedTour && (
        <BookingModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          tour={selectedTour}
        />
      )}
    </div>
  );
};

export default Tours;