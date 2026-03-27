import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';

const FloatingContact = () => {
  // WhatsApp ke liye bina '+' ke number use karna better hota hai
  const phone = "918540038107"; 

  return (
    <div className="fixed bottom-6 right-4 md:right-8 flex flex-col gap-4 z-[999] items-end">
      
      {/* --- Call Button --- */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group relative flex items-center"
      >
        {/* Label: Mobile par hamesha dikhega (chhota), Desktop par hover par slide karega */}
        <span className="mr-3 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-sm font-black shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-slate-100 whitespace-nowrap transition-all duration-300 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 
          translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
          Call Expert Now
        </span>
        
        <a 
          href={`tel:+${phone}`} 
          className="relative bg-blue-600 text-white p-3.5 md:p-5 rounded-full shadow-[0_15px_35px_rgba(37,99,235,0.3)] flex items-center justify-center border-2 border-white/20 transition-all active:scale-90"
        >
          {/* Subtle Pulse Effect for Call */}
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 -z-10"></span>
          <Phone size={20} fill="white" className="md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
        </a>
      </motion.div>

      {/* --- WhatsApp Button --- */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
        className="group relative flex items-center"
      >
        {/* Label: Mobile par hamesha dikhega (chhota), Desktop par hover par slide karega */}
        <span className="mr-3 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-sm font-black shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-slate-100 whitespace-nowrap transition-all duration-300 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 
          translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
          Chat on WhatsApp
        </span>

        <a 
          href={`https://wa.me/${phone}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-3.5 md:p-5 rounded-full shadow-[0_15px_35px_rgba(37,211,102,0.3)] flex items-center justify-center border-2 border-white/20 transition-all active:scale-90"
        >
          {/* Subtle Pulse Effect for WhatsApp */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
          <MessageSquare size={20} fill="white" className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>

    </div>
  );
};

export default FloatingContact;