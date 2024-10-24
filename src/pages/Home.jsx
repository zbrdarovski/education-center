import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your images
import choir from '../assets/images/choir.jpg';
import classes from '../assets/images/classes.jpg';
import finals from '../assets/images/finals.jpg';
import kids from '../assets/images/kids.jpg';

function Home() {
  const images = [choir, classes, finals, kids];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 7.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Добродошли</h2>

        {/* Main Section: Slideshow + Text */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start justify-between space-x-0 lg:space-x-2">
          {/* Slideshow */}
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 text-left max-w-xs lg:max-w-sm mx-auto">
            <p className="text-lg mb-5 leading-relaxed">
              ЕДУКАТИВНИ ЦЕНТАР МРЕЖА ЗНАЊА је правно лице које има за циљ побољшање и унапређење едукативног процеса деце.
            </p>
            <Link to="/workshops" className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 transition duration-300 ease-in-out">
              Погледајте радионице
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
