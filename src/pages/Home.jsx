import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome</h2>
        <p className="mt-4 text-lg text-white">
          At Mreža znanja, our mission is to provide accessible and high-quality education to learners of all ages.
        </p>
        <p className="mt-4 text-lg text-white">
          Empowering students through quality education and engaging workshops.
        </p>
        <div className="mt-6">
          <Link to="/workshops" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            View Workshops
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
