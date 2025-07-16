import React, { useState } from "react";
// Import lucide-react for modern icons
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className=" top-0 left-0 w-full p-4 z-50     rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          {/* Logo - Always visible, uppercase, modern font */}

          <a
            href="/"
            className="text-white flex justify-center items-center align-middle text-2xl font-extrabold uppercase tracking-wider rounded-md px-2 py-1 transition-colors duration-300 hover:bg-white/20"
          >
          <div className="w-16 h-16 bg-transparent">
  <div
    className="w-full h-full bg-red-500"
    style={{
      WebkitMaskImage: `url(https://i.postimg.cc/fy4rxjsD/Eternalan-Logo.png)`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskImage: `url(https://i.postimg.cc/fy4rxjsD/Eternalan-Logo.png)`,
      maskRepeat: 'no-repeat',
      maskSize: 'contain',
      maskPosition: 'center',
    }}
  />
</div>


            &nbsp; eternalan
          </a>

          {/* Desktop Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-white text-lg font-medium uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-white"
            >
              Home
            </a>
            <a
              href="aboutus"
              className="text-white text-lg font-medium uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-white"
            >
              About
            </a>
            <a
              href="/events"
              className="text-white text-lg font-medium uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-white"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-white"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Icon - Visible on small screens, hidden on medium and larger */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
              aria-label="Open mobile menu"
            >
              <Menu size={28} /> {/* Lucide Menu icon */}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Conditionally rendered based on isMobileMenuOpen state */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center animate-fade-in-down">
          {/* Close Button (X icon) */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            aria-label="Close mobile menu"
          >
            <X size={36} /> {/* Lucide X icon */}
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-8 text-center">
            <a
              href="/"
              onClick={toggleMobileMenu} // Close menu on link click
              className="text-white text-4xl font-bold uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-8 decoration-4 decoration-white"
            >
              Home
            </a>
            <a
              href="/aboutus"
              onClick={toggleMobileMenu} // Close menu on link click
              className="text-white text-4xl font-bold uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-8 decoration-4 decoration-white"
            >
              About
            </a>
            <a
              href="/events"
              onClick={toggleMobileMenu} // Close menu on link click
              className="text-white text-4xl font-bold uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-8 decoration-4 decoration-white"
            >
              Events
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu} // Close menu on link click
              className="text-white text-4xl font-bold uppercase transition-colors duration-300 hover:text-gray-300 hover:underline underline-offset-8 decoration-4 decoration-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Tailwind Custom Animation (add this to your main CSS or a style block if not using a build process that handles @keyframes) */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
