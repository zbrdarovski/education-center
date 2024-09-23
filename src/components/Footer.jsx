import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        &copy; {new Date().getFullYear()} EduCenter. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
