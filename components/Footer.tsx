
import React from 'react';
import { Eye, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ADDRESS, HOSPITAL_NAME, PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010208] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1 space-y-8">
            <a href="#home" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter text-white uppercase">City Shine</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              A premier ophthalmic center dedicated to restorative eye surgery and precision vision correction since 2009.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-blue-500 hover:text-blue-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-10">The Clinic</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <li><a href="#about" className="hover:text-white transition-colors">Our Legacy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clinical Tech</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Specialists</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Consultations</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-10">
            <div className="glass-card p-10 rounded-[40px] border-white/5">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-6">Contact Details</h4>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-2">Location</p>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">{ADDRESS}</p>
                </div>
                <div>
                  <p className="text-teal-500 font-black text-[10px] uppercase tracking-widest mb-2">Emergency</p>
                  <p className="text-white text-lg font-black">{PHONE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            © {new Date().getFullYear()} {HOSPITAL_NAME}. Visionary Design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
