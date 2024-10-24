import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Contact icons

function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <p className="flex items-center justify-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> ТЦ Барили 2 спрат, Пожаревац
          </p>
          <p className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> 060-0235-105
          </p>
          <p className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> 069-1652-195
          </p>
          <p className="flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email: office@ecmrezaznanja.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        {/* Rights Info */}

      </div>
      <div>
        <p className="flex items-center justify-center mt-3">&copy; {new Date().getFullYear()} ЕДУКАТИВНИ ЦЕНТАР МРЕЖА ЗНАЊА. Сва права задржана.</p>
      </div>
    </footer>
  );
}

export default Footer;
