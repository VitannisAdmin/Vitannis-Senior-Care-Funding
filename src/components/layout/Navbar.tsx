import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'The ICP Solution', path: '/icp-solution' },
    { name: 'The Cost Journey', path: '/cost-journey' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Other Methods', path: '/other-funding' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 ${
        scrolled ? 'shadow-md py-0' : 'py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-90 transition-opacity">
            <img
              src="https://res.cloudinary.com/srinsurance/image/upload/v1771170905/Screenshot_2026-02-09_161610_icwgpg.png"
              alt="Vitannis Senior Care Funding Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-accent hover:bg-brand-accentHover text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-all shadow-lg shadow-brand-accent/30"
            >
              Get an Evaluation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link
              to="/"
              className={`block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-brand-accent ${
                location.pathname === '/' ? 'text-brand-accent bg-gray-50' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-brand-accent ${
                  location.pathname === link.path ? 'text-brand-accent bg-gray-50' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center bg-brand-dark text-white px-6 py-3 rounded-sm font-medium"
            >
              Get an Evaluation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
