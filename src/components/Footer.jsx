import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-white relative overflow-hidden">
      {/* SVG Slant Divider */}
      <div className="w-full h-[100px] -mb-1">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon points="100,0 100,100 0,100" fill="black" />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h1 className="text-3xl font-extrabold uppercase mb-4 tracking-tight">eternalan</h1>
            <p className="text-sm text-gray-400">
              The new era of hip-hop. Stay connected. Stay loud.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="font-semibold text-white mb-3">Company</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-3">Legal</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility Policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-3">Statements</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Modern Slavery Statement</a></li>
              <li><a href="#">Tax Strategy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-sm text-gray-500">
          <span>Copyright ⓒ 2025 Eternalan Media.</span>
          <div className="flex gap-4 mt-4 md:mt-0 text-white text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
