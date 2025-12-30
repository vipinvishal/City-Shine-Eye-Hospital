
import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    "Next-Gen Modular OTs",
    "Digital Slit Lamp Diagnostics",
    "Gold Standard Phaco Units",
    "Specialized Pediatric Wing",
    "High-Res Retinal Imaging"
  ];

  return (
    <section id="about" className="py-32 bg-[#020410] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <img 
                   src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400&h=500" 
                   alt="Clinic" 
                   className="rounded-[40px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className="glass-card p-6 rounded-[32px] border-blue-500/20">
                    <Award className="w-8 h-8 text-blue-500 mb-3" />
                    <p className="text-white font-black text-sm uppercase">NABH Accredited</p>
                 </div>
               </div>
               <div className="pt-12">
                 <img 
                   src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400&h=600" 
                   alt="Ophthalmic Instrument" 
                   className="rounded-[40px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700" 
                 />
               </div>
             </div>
          </div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Our Heritage</h4>
              <h2 className="text-5xl font-black text-white leading-tight">Decades of Visionary Excellence</h2>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Since 2009, City Shine has been at the forefront of ophthalmic innovation in Bihar. Our facility is engineered for precision and built on a foundation of absolute trust.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover:text-white" />
                  </div>
                  <span className="text-slate-300 font-bold text-sm tracking-tight">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-10">
               <a href="#services" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-95">
                 Explore Infrastructure
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
