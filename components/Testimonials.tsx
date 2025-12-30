
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 bg-[#030617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h4 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs">Testimonials</h4>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tighter">Trusted By <br/>The Community</h2>
            <p className="text-xl text-slate-400 font-medium max-w-md leading-relaxed">
              We take pride in our patient success stories. Experience vision restoration through their words.
            </p>
            <div className="flex space-x-5">
              <button onClick={prev} className="w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:border-blue-400"><ChevronLeft/></button>
              <button onClick={next} className="w-14 h-14 rounded-full glass-card border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all hover:border-blue-400"><ChevronRight/></button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-16 -right-16 text-blue-500/10">
              <Quote className="w-64 h-64 fill-current" />
            </div>
            
            <div className="relative glass-card p-16 rounded-[60px] border-white/10 shadow-3xl">
              <div className="flex space-x-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < TESTIMONIALS[currentIndex].rating ? 'text-blue-500 fill-current' : 'text-slate-800'}`} />
                ))}
              </div>
              
              <p className="text-2xl text-white font-medium italic leading-relaxed mb-12">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-[20px] bg-blue-600/20 flex items-center justify-center text-blue-400 font-black text-xl border border-blue-500/20">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-white uppercase tracking-widest text-xs">{TESTIMONIALS[currentIndex].name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Verified Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
