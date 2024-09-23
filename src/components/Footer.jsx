import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        &copy; {new Date().getFullYear()} Mreža znanja. All rights reserved.
      </div>
      <div className="max-w-7xl mx-auto text-center">
        <a href="https://www.flaticon.com/free-icons/hub" title="hub icons">Hub icons created by Kiranshastry - Flaticon</a>
      </div>
    </footer>
  );
}

export default Footer;
