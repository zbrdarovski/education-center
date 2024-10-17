import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Contact icons

function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-center mx-4">
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
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email: example@example.com
          </p>
        </div>

        <div className="flex justify-center items-center mx-4">
          <a href="https://www.facebook.com/profile.php?id=61567397544439&mibextid=ZbWKwL" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/mreza.znanja?igsh=Z2F3MXRscDI2enZ3" className="mx-2" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        
        <div className="border-l border-white h-16 mx-4"></div> {/* Vertical line */}

        <div className="text-center mx-4">
          <p>&copy; {new Date().getFullYear()} ЕДУКАТИВНИ ЦЕНТАР МРЕЖА ЗНАЊА. Сва права задржана.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
