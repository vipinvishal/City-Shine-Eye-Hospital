
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#030617] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Precision Care</h4>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tighter">Clinical Specialties</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group glass-card p-10 rounded-[48px] hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] group-hover:bg-blue-600/20 transition-all"></div>
              
              <div className="mb-10 bg-white/5 w-20 h-20 rounded-[28px] flex items-center justify-center border border-white/5 group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <div className="group-hover:text-white group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-5 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-colors">
                Explore Tech
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
