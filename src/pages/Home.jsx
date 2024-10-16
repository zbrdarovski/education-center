import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Добродошли</h2>
        <p className="mt-4 text-lg text-white">
          ЕДУКАТИВНИ ЦЕНТАР МРЕЖА ЗНАЊА је правно лице које има за циљ побољшање и унапређење едукативног
          процеса деце.
        </p>
        <div className="mt-6">
          <Link to="/workshops" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Погледајте радионице
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
