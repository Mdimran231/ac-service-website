import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 px-6 pb-10">
      <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-xl border border-white/50 rounded-[3rem] p-12 shadow-sm">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-black text-2xl text-slate-900 mb-4">ACFIXWALA</h3>
            <p className="text-slate-500 leading-relaxed">
              Patna's most trusted AC service provider. Expert repairs and deep cleaning in just 60 minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Navigation</h4>
            <a href="/about" className="text-slate-600 hover:text-sky-500 transition-colors">About Us</a>
            <a href="/services" className="text-slate-600 hover:text-sky-500 transition-colors">Our Services</a>
            <a href="/privacy-policy" className="text-slate-600 hover:text-sky-500 transition-colors">Privacy Policy</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Connect</h4>
            <p className="flex items-center gap-2 text-slate-600"><MapPin size={18} /> Police Colony, Patna - 200008</p>
            <p className="flex items-center gap-2 text-slate-600"><Phone size={18} /> +91 8540038107</p>
            <div className="flex gap-4 mt-2">
              <Instagram className="text-slate-400 hover:text-pink-500 cursor-pointer" size={20} />
              <Facebook className="text-slate-400 hover:text-blue-600 cursor-pointer" size={20} />
              <Twitter className="text-slate-400 hover:text-sky-400 cursor-pointer" size={20} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm font-medium tracking-widest uppercase">
          © 2026 AC FIX WALA Patna. Crafted for Comfort.
        </div>
      </div>
    </footer>
  );
};

export default Footer;