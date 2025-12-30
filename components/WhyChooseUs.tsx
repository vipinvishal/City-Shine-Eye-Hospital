
import React from 'react';
import { UserCheck, Zap, Wallet, HeartHandshake } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Board Certified",
      desc: "Our surgeons are masters of precision ophthalmology.",
      icon: <UserCheck className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Advanced Tech",
      desc: "Digital Slit Lamps and Phaco-emulsification units.",
      icon: <Zap className="w-10 h-10 text-teal-500" />
    },
    {
      title: "Ethical Pricing",
      desc: "Transparent diagnostics with no hidden clinical costs.",
      icon: <Wallet className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Patient Focus",
      desc: "Compassionate bedside manner and rapid recovery focus.",
      icon: <HeartHandshake className="w-10 h-10 text-teal-500" />
    }
  ];

  return (
    <section className="py-32 bg-[#020410] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-teal-500 font-black tracking-[0.3em] uppercase text-xs">Standard of Care</h4>
          <h2 className="text-5xl font-black text-white tracking-tighter">Why Visionaries Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="glass-card p-10 rounded-[48px] border-white/5 hover:border-teal-500/30 transition-all group">
              <div className="mb-10 bg-white/5 w-24 h-24 rounded-[32px] flex items-center justify-center group-hover:bg-teal-500 transition-all duration-500">
                <div className="group-hover:text-white group-hover:scale-110 transition-all">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-teal-400 transition-colors uppercase tracking-widest">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
