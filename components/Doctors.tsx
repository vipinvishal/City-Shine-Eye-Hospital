
import React from 'react';
import { DOCTORS } from '../constants';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-32 bg-[#020410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Medical Council</h4>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tighter">Clinical Expert</h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-2xl w-full">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="group glass-card rounded-[60px] overflow-hidden flex flex-col sm:flex-row border-white/5 hover:border-blue-500/30 transition-all duration-700">
                <div className="w-full sm:w-[45%] h-80 sm:h-auto overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f172a]/50"></div>
                </div>
                <div className="w-full sm:w-[55%] p-10 sm:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-3">{doc.specialty}</p>
                    <h3 className="text-3xl font-black text-white mb-2">{doc.name}</h3>
                  </div>
                  
                  <div className="space-y-5 mb-10">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/5 p-2 rounded-xl text-slate-500">
                        <GraduationCap size={18} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{doc.qualification}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/5 p-2 rounded-xl text-slate-500">
                        <Briefcase size={18} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{doc.experience} Experience</span>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <button className="flex items-center space-x-3 text-white font-black uppercase tracking-widest text-[10px] group-hover:text-blue-400 transition-colors">
                      <span>Full Medical Profile</span>
                      <Award size={14} className="group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
