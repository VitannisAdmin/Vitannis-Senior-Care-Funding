import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker text-white pt-16 pb-8 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Logo Image */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://res.cloudinary.com/srinsurance/image/upload/v1771170905/Screenshot_2026-02-09_161610_icwgpg.png" 
                alt="Vitannis Senior Care Funding Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing specialized, guaranteed lifetime funding solutions for high long-term care expenses. Protecting families, preserving legacies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 uppercase text-sm tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/icp-solution" className="hover:text-brand-accent transition-colors">The ICP Annuity</Link></li>
              <li><Link to="/other-funding" className="hover:text-brand-accent transition-colors">Life Settlements</Link></li>
              <li><Link to="/other-funding" className="hover:text-brand-accent transition-colors">Reverse Mortgages</Link></li>
              <li><Link to="/other-funding" className="hover:text-brand-accent transition-colors">Home Equity Investments</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Disclaimers/Reg */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 uppercase text-sm tracking-wider">Important Info</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Vitannis Senior Care Funding is a DBA of Vitannis. Products like the Immediate Care Plan are subject to underwriting approval and state availability. The primary insurance carrier is Plateau Insurance dba Lumos Assurance, A- Rated by AM Best. Guarantees are backed by the financial strength and claims-paying ability of the issuing carrier.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Vitannis Senior Care Funding. All rights reserved. 
            <span className="mx-2 hidden md:inline">|</span> 
            <Link to="/poa-solutions" className="hover:text-white transition-colors">POA Financial Solutions</Link>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
