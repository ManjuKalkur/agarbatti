import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div 
  // className="bg-cover  text-white h-[100vh]" 
   className="relative bg-cover text-white bg-center h-[100vh] flex items-center"
  style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/photographer-beautifully-captures-majestic-deer-up-close-tranquil-autumn-forest-aig62_31965-644129.jpg?w=1380')" }}
>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Wild Trails</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Born from a passion for adventure and a deep respect for nature, Wild Trails and Beyond is your gateway to extraordinary outdoor experiences.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Providing exceptional outdoor experiences with expert guidance</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building a community of passionate outdoor enthusiasts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">Promoting responsible and sustainable outdoor adventures</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Story Section */}
<section className="relative bg-cover bg-center py-24 px-6" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/silhouette-cheering-hiking-men-open-arms-sunrise-stand-mountain-travel-lifestyle-wanderlust-adventure-concept-summer-vacations-outdoor_1150-61321.jpg?uid=R169259035&ga=GA1.1.1985079804.1734418826&semt=ais_hybrid')" }}>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative container mx-auto text-center max-w-5xl text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 animate-fadeInUp">Our Story</h2>

    <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg text-left animate-fadeInUp">
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        <span className="font-semibold text-yellow-300">Wild Trails & Beyond</span> was born out of a deep love and passion for the wilderness and wildlife. Our journey began with a simple desire to share the magnificent wonders of the wild with others who share our enthusiasm for adventure and nature.
      </p>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Our team consists of <span className="font-semibold text-yellow-300">certified wildlife volunteers</span> with extensive experience in wildlife research and conservation. We've worked alongside both government and non-government organizations, participating in crucial research assignments such as occupancy surveys and camera trapping exercises.
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        Through years of hands-on experience and specialized training, we've developed a unique perspective on wildlife and wilderness. Our mission is to share this knowledge and passion with our guests, helping them experience the wilderness in its entirety, as it should be experienced.
      </p>
    </div>

    {/* Call to Action Button */}
    <div className="mt-10">
      <a
        href="#explore"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg animate-fadeInUp"
      >
        Explore With Us
      </a>
    </div>
  </div>
</section>


      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Guide",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "Certified wilderness expert with over 10 years of experience"
              },
              {
                name: "Michael Chen",
                role: "Wildlife Expert",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "Specializes in wildlife photography and animal behavior"
              },
              {
                name: "Emma Davis",
                role: "Adventure Coordinator",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "Expert in planning and organizing wilderness expeditions"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;