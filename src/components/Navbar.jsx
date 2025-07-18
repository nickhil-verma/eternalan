import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300    ${
          isScrolled ? "bg-black border-b border-[#EF4444]/20 " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-white flex items-center text-2xl font-extrabold uppercase tracking-wider relative"
          >
            <div className="w-16 h-16 bg-transparent mr-2">
              <div
                className="w-full h-full bg-red-500"
                style={{
                  WebkitMaskImage: `url(https://i.postimg.cc/fy4rxjsD/Eternalan-Logo.png)`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskImage: `url(https://i.postimg.cc/fy4rxjsD/Eternalan-Logo.png)`,
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  maskPosition: "center",
                }}
              />
            </div>
            ETERNALAN
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#EF4444]"></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {["/", "/aboutus", "/events", "#contact"].map((href, i) => {
              const label = ["HOME", "ABOUT", "EVENTS", "CONTACT"][i];
              return (
                <a
                  key={href}
                  href={href}
                  className="text-white hover:text-[#EF4444] transition-all duration-500 font-bold tracking-widest text-sm relative group"
                >
                  {label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EF4444] group-hover:w-full transition-all duration-500"></div>
                </a>
              );
            })}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center animate-fade-in-down">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            aria-label="Close mobile menu"
          >
            <X size={36} />
          </button>

          <nav className="flex flex-col space-y-8 text-center">
            {["/", "/aboutus", "/events", "#contact"].map((href, i) => {
              const label = ["Home", "About", "Events", "Contact"][i];
              return (
                <a
                  key={href}
                  href={href}
                  onClick={toggleMobileMenu}
                  className="text-white text-4xl font-bold uppercase transition-colors duration-300 hover:text-[#EF4444] hover:underline underline-offset-8 decoration-4 decoration-[#EF4444]"
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Fade Animation */}
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
