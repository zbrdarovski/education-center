import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative md:w-1/2 text-left z-10">
          <h1 className="text-4xl font-bold text-white">Welcome to Mreža znanja</h1>
          <p className="mt-4 text-lg text-white">
            Empowering students through quality education and engaging workshops.
          </p>
          <div className="mt-6">
            <Link to="/workshops" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              View Workshops
            </Link>
          </div>

          {/* Added margin here to create space between sections */}
          <h1 className="text-4xl font-bold text-white mt-12">Our Mission</h1>
          <p className="mt-4 text-lg text-white">
            At Mreža znanja, our mission is to provide accessible and high-quality education to learners of all ages. We
            offer a variety of workshops and courses designed to foster growth, creativity, and critical thinking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
