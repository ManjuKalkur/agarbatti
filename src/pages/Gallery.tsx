import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Mountain Vista"
    },
    {
      url: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Forest Path"
    },
    {
      url: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Alpine Lake"
    },
    {
      url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Wildlife Encounter"
    },
    {
      url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Sunset Peak"
    },
    {
      url: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "River Valley"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
  className="bg-cover bg-center text-white py-20" 
  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-mountain-forest-landscape_23-2149063041.jpg?t=st=1741240956~exp=1741244556~hmac=f629be3aa3991a4b253b004b4c0a7cd1ee06227224ba48c0a769b22a1e3f2f89&w=1800')" }}
>
  <div className="container mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Adventure Gallery</h1>
    <p className="text-xl text-center max-w-3xl mx-auto">
      Capturing the beauty and excitement of our wilderness adventures.
    </p>
  </div>
</div>


      {/* Gallery Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;