import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">Mreža znanja</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/team" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Team</Link>
              <Link to="/workshops" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Workshops</Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block text-white px-4 py-2 hover:bg-blue-800" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/team" className="block text-white px-4 py-2 hover:bg-blue-800" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/workshops" className="block text-white px-4 py-2 hover:bg-blue-800" onClick={() => setIsOpen(false)}>Workshops</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
