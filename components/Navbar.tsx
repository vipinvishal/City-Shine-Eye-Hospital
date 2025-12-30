
import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'top-4' : 'top-0'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-full'}`}>
        <div className={`flex justify-between items-center px-6 py-4 transition-all duration-500 ${scrolled ? 'glass-card rounded-full shadow-2xl border-white/10' : 'bg-transparent'}`}>
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter text-white">CITY SHINE</span>
              <span className="text-blue-500 font-bold text-[10px] uppercase tracking-widest leading-none">Eye Hospital</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#030617] z-[90] transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-black text-white hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
          <button onClick={() => setIsOpen(false)} className="mt-12 text-slate-500"><X size={40}/></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
