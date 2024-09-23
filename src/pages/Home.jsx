import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to EduCenter</h1>
            <p className="mt-4 text-lg text-gray-600">Empowering students through quality education and engaging workshops.</p>
            <div className="mt-6">
              <Link to="/workshops" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Workshops</Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Replace with your own image */}
            <img src="https://via.placeholder.com/500x300" alt="Education" className="rounded-md shadow-md" />
          </div>
        </div>
      </section>

      {/* Additional Sections (e.g., Features, Testimonials) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-center text-gray-700">At EduCenter, our mission is to provide accessible and high-quality education to learners of all ages. We offer a variety of workshops and courses designed to foster growth, creativity, and critical thinking.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
