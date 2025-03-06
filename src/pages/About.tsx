import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-20">
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
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose lg:prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Wild Trails & Beyond was born out of a deep love and passion for the wilderness and wildlife. Our journey began with a simple desire to share the magnificent wonders of the wild with others who share our enthusiasm for adventure and nature.
              </p>
              <p className="text-gray-600 mb-6">
                Our team consists of certified wildlife volunteers who have extensive experience in wildlife research and conservation. We've worked alongside both government and non-government organizations, participating in crucial research assignments such as occupancy surveys and camera trapping exercises.
              </p>
              <p className="text-gray-600">
                Through years of hands-on experience and specialized training, we've developed a unique perspective on wildlife and wilderness. Our mission is to share this knowledge and passion with our guests, helping them experience the wilderness in its entirety, as it should be experienced.
              </p>
            </div>
          </div>
        </div>
      </div>

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