import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

function Contact() {
  const glassStyle = "bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_rgba(31,38,135,0.07)]";

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen pt-28 pb-16 px-6 font-sans"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
          Humein <span className="text-sky-500">Contact Karein</span>
        </h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
          Patna mein hamari workshop hai. Aap niche diye gaye button se direct call bhi kar sakte hain.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-12">
        
        {/* --- LEFT: DIRECT CALL CARD --- */}
        <div className="lg:col-span-1 space-y-6">
          {/* Direct Call Action */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+918934247456" // Direct Call Link
            className={`block p-8 rounded-[2.5rem] ${glassStyle} bg-sky-500 text-black shadow-sky-200 shadow-2xl border-none`}
          >
            <div className="w-14 h-14 bg-white text-sky-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Phone size={28} />
            </div>
            <h4 className="text-xl font-bold mb-1 italic">Click to Call Now</h4>
            <p className="text-3xl font-black tracking-tighter">+91 8540038107 </p>
            <p className="text-sky-100 text-xs mt-3 font-bold uppercase tracking-widest">Tap to dial immediately</p>
          </motion.a>

          {/* Location Card */}
          <div className={`p-8 rounded-[2.5rem] ${glassStyle}`}>
            <div className="w-12 h-12 bg-sky-500/10 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold mb-2 text-slate-800">Our Office</h4>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Shop No. 45, sector b, Police Colony,<br/>
              Police Colony, Patna - 200008
            </p>
          </div>
        </div>

        {/* --- RIGHT: REAL GOOGLE MAP --- */}
       {/* --- RIGHT: REAL GOOGLE MAP --- */}
<div className="lg:col-span-2">
  <div className={`h-full min-h-[400px] rounded-[3rem] overflow-hidden ${glassStyle} p-3`}>
    <iframe 
      title="Police Colony Patna Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14394.757643585093!2d85.09340575!3d25.5822363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57ce7518f6bf%3A0xe9ffb8b85ee47d13!2sPolice%20Colony%2C%20Anisabad%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710685000000!5m2!1sen!2sin" 
      width="100%" 
      height="100%" 
      style={{ border: 0, borderRadius: '2.2rem' }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
      </div>

      {/* Quick Info Strip */}
      <div className={`max-w-7xl mx-auto p-6 rounded-3xl ${glassStyle} flex flex-wrap justify-around items-center gap-6 text-center`}>
         <div className="flex items-center gap-3">
            <Clock className="text-sky-500" />
            <span className="font-bold text-slate-700 underline decoration-sky-300">Open 24/7 for Repairs</span>
         </div>
         <div className="flex items-center gap-3">
            <Mail className="text-sky-500" />
            <a href="mailto:mdfaiz62000@gmail.com" className="font-bold text-slate-700 hover:text-sky-500">mdfaiz62000@gmail.com</a>
         </div>
         <div className="flex items-center gap-3">
            <MessageCircle className="text-sky-500" />
            <span className="font-bold text-slate-700">WhatsApp: +91 8540038107</span>
         </div>
      </div>
    </motion.div>
  );
}

export default Contact;