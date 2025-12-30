
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ADDRESS, PHONE, GOOGLE_MAPS_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Cataract Surgery', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: 'Cataract Surgery', message: '' });
    }, 1500);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all";

  return (
    <section id="contact" className="py-32 bg-[#030617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h4 className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4">Connect</h4>
              <h2 className="text-5xl font-black text-white mb-8">Ready to restore your vision?</h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Book a consultation with our world-class ophthalmologists today.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-blue-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Clinic</p>
                  <p className="text-white font-bold">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-white/5 p-5 rounded-3xl border border-white/10 text-teal-500">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Direct Line</p>
                  <p className="text-white font-bold">{PHONE}</p>
                </div>
              </div>
            </div>

            <div 
              className="h-64 rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer relative group"
              onClick={() => window.open(GOOGLE_MAPS_LINK, '_blank')}
            >
               <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Map" />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="glass-card px-6 py-3 rounded-full text-white font-black text-xs uppercase tracking-widest">Open Google Maps</div>
               </div>
            </div>
          </div>

          <div className="glass-card p-10 lg:p-16 rounded-[60px] border border-white/10 shadow-2xl">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center border border-teal-500/30">
                  <CheckCircle size={48} className="text-teal-500" />
                </div>
                <h3 className="text-3xl font-black text-white">Request Sent</h3>
                <p className="text-slate-400">Our medical coordinator will contact you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="text-blue-400 font-bold uppercase tracking-widest text-xs">Back to form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe" 
                    className={inputClasses} 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Phone</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91" 
                      className={inputClasses} 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Specialty</label>
                    <select 
                      className={inputClasses}
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Cataract Surgery</option>
                      <option>Retina Checkup</option>
                      <option>Pediatric Care</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help?" 
                    className={inputClasses}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? <span>Processing...</span> : <><span>Confirm Request</span><Send size={16}/></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
