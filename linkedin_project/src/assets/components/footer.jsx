import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";
import WhiteLogo from './images/white logo.png'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Logo + Newsletter */}
        <div>
          <img src={WhiteLogo} alt="LinkedIn Logo" className="h-14 mb-4" />
          <p className="mb-4 text-sm">
            APPROVED FROM MINISTRY OF EDUCATION, NEPAL GOVERNMENT
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="px-4 py-2 rounded-md w-full sm:w-auto text-green-700 placeholder-green-600 bg-white focus:outline-none"
            />
            <button className="bg-white text-green-900 px-4 py-2 rounded-md font-semibold hover:text-lime-300">
              Suscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b border-white w-fit">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destination">Study Destination</Link></li>
            <li><Link to="/preparation">Test Preparation</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2 border-b border-white w-fit">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:071590108" className="hover:underline">
                071-590108, 535494
              </a>
            </li>
           <li className="flex items-center gap-2">
  <Mail size={18} />
  <a
    href="https://mail.google.com/mail/?view=cm&to=info.linkedinconsultancy@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    info.linkedinconsultancy@gmail.com
  </a>
</li>

            <li className="flex items-center gap-2">
  <MapPin size={18} />
  <a
    href="https://maps.app.goo.gl/WcmWLaBWyeQcTrTS8"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Butwal-9 Milanchowk, Rupandehi
  </a>
</li>

          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/19UmnQ9TR9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/linkedin_consultancy?igsh=MW5tbXgyNHY3dGluMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@linkedin_consultacy?_t=ZS-8xDSRXzSF0r&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <Music2 />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
