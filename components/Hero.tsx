
import React from 'react';
import { Calendar, Phone, ArrowRight, Play } from 'lucide-react';
import { TAGLINE, HOSPITAL_NAME, PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-20 bg-aurora overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Revolutionizing Eye Care</span>
            </div>
            
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] sm:leading-[0.9] tracking-tighter">
              {HOSPITAL_NAME.split(' ').slice(0, 2).join(' ')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">{HOSPITAL_NAME.split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-base sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Precision diagnostics meets compassionate care. We utilize cutting-edge technology to restore your vision with clinical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group flex items-center justify-center space-x-3 bg-white text-black px-10 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-white/5 active:scale-95"
              >
                <span>Book Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`tel:${PHONE}`} 
                className="flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-10 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>Call Us</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-10 pt-10 border-t border-white/5">
              <div>
                <p className="text-2xl sm:text-4xl font-black text-white">15K<span className="text-blue-500">+</span></p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Surgeries</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-black text-white">20<span className="text-teal-500">+</span></p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Staff</p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-black text-white">99<span className="text-blue-500">%</span></p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Success</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10 rounded-[60px] overflow-hidden border-[1px] border-white/10 shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Eye Surgery Tech" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030617] via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Glass element */}
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[40px] shadow-2xl border border-white/20 animate-bounce-subtle">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Play className="w-6 h-6 text-blue-400 fill-current" />
                </div>
                <div>
                  <p className="text-white font-black text-sm uppercase tracking-widest">Our Facility</p>
                  <p className="text-slate-500 text-xs">Watch virtual tour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
