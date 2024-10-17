import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        &copy; {new Date().getFullYear()} ЕДУКАТИВНИ ЦЕНТАР МРЕЖА ЗНАЊА. Сва права задржана.
      </div>
      <div className="max-w-7xl mx-auto text-center">
      </div>
    </footer>
  );
}

export default Footer;
