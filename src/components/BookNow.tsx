import { useState } from "react";

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    persons: "",
  });

  const [buttonText, setButtonText] = useState("Book Now");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Booking...");
    setTimeout(() => setButtonText("Booked ✅"), 1500); // Simulated response
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Adventure</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Email Address
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Phone Number
            </label>
          </div>

          {/* Destination */}
          <div className="relative">
            <input 
              type="text" 
              name="destination" 
              value={formData.destination} 
              onChange={handleChange} 
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Destination
            </label>
          </div>

          {/* Date */}
          <div className="relative">
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Number of Persons */}
          <div className="relative">
            <input 
              type="number" 
              name="persons" 
              min="1"
              value={formData.persons} 
              onChange={handleChange} 
              required
              className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              No. of Persons
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
