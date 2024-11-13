import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Насловна</Link>
              <Link to="/instructors" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Инструктори</Link>
              <Link to="/workshops" className="text-white hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Радионице</Link>
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
        <div className="md:hidden bg-purple-900">
          <Link to="/" className="block text-white px-4 py-2 hover:bg-purple-800" onClick={() => setIsOpen(false)}>Насловна</Link>
          <Link to="/instructors" className="block text-white px-4 py-2 hover:bg-purple-800" onClick={() => setIsOpen(false)}>Инструктори</Link>
          <Link to="/workshops" className="block text-white px-4 py-2 hover:bg-purple-800" onClick={() => setIsOpen(false)}>Радионице</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
