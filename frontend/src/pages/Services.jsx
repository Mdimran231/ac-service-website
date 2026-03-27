import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Zap, Clock, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Assets Imports
import jetServiceImg from '../assets/service.jpeg';
import installationImg from '../assets/installaion.jpg';
import uninstallationImg from '../assets/uninstallation.jpg';
import washing from '../assets/washing.jpg';
import freeze from '../assets/freeze.jpg';
import painter from '../assets/painter.jpg';
import electrician from '../assets/electrician.jpg';
import castle from '../assets/castle.jpeg';
import foam from '../assets/foam.jpeg';
import windows from '../assets/window.avif';
import leakage from '../assets/Gallery 1.jpeg';

// --- DATA ARRAYS ---
const serviceList = [
  { id: "split-ac-jet", title: "Split AC Jet Service", price: "499", imageUrl: jetServiceImg, desc: "High-pressure deep cleaning for maximum cooling and dust removal." },
  { id: "jet-foam", title: "Jet Foam Service", price: "599", imageUrl: foam, desc: "Advanced foam-based deep cleaning for 2x better airflow." },
  { id: "cassette-ac-jet", title: "Cassette AC Jet Service", price: "1199", imageUrl: castle, desc: "Professional jet cleaning for office and commercial cassette units." },
  { id: "installation", title: "Split AC Installation", price: "1199", imageUrl: installationImg, desc: "Precision mounting with copper piping and leak testing by experts." },
  { id: "window-ac-install", title: "Window AC Install", price: "799", imageUrl: windows, desc: "Safe and secure window AC fitting with proper sealing." },
  { id: "leakage-repair", title: "Leakage Repair", price: "599", imageUrl: leakage, desc: "Fixing water dripping and indoor unit leakage issues within 60 mins." },
  { id: "re-installation", title: "Re-Installation", price: "499", imageUrl: uninstallationImg, desc: "Relocating your AC safely with professional gas pump-down." }
];

const extraRepairs = [
  { id: "fridge-repair", name: "Refrigerators", img: freeze, desc: "Single & Double door fridge repair experts in Patna." },
  { id: "washing-machine", name: "Washing Machines", img: washing, desc: "Automatic & Semi-automatic machine service at your doorstep." },
  { id: "microwave-repair", name: "Microwave Oven", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop", desc: "Heating issues or electrical faults? We have every solution." }
];

const maintenanceHeroes = [
  { id: "electrician-service", service: "Professional Electrician", img: electrician, features: ["Wiring & Short Circuit Fix", "Fan & Light Installation", "Inverter Setup", "Switchboard Repairs"], color: "bg-amber-500" },
  { id: "painter-service", service: "Expert House Painting", img: painter, features: ["Interior & Exterior Paint", "Wall Putty & Waterproofing", "Texture Walls", "Fresh Look Guarantee"], color: "bg-rose-500" }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

function Services() {
  const handleServiceBooking = async (serviceName, price) => {
    const phone = "8540038107"; 
    try {
      await axios.post('http://localhost:8085/api/bookings/add', {
        name: "Web Visitor",
        serviceType: serviceName,
        address: "Services Page Enquiry",
        email: "visitor@website.com",
        date: new Date().toLocaleDateString()
      });
      window.open(`https://wa.me/91${phone}?text=Hi Cooling Refrigeration, I want to book ${serviceName} (₹${price})`, '_blank');
    } catch (err) {
      window.open(`https://wa.me/91${phone}?text=Hi Cooling Refrigeration, I want to book ${serviceName}`, '_blank');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 pt-20 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <div className="py-24 px-6 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-sky-200/20 blur-[120px] -z-10" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sky-600 font-black text-[10px] uppercase tracking-widest mb-6 border border-sky-100">
          <ShieldCheck size={14} /> Patna's Most Trusted Service
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-none">
          Service <span className="text-sky-500 italic">Rate Card</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium italic">"Quality Service at Honest Prices. No Hidden Charges."</p>
      </div>

      {/* --- MAIN SERVICES GRID --- */}
      <div className="px-6 max-w-7xl mx-auto pb-20">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceList.map((s, i) => (
            <motion.div 
              key={i} 
              variants={item} 
              whileHover={{ y: -12 }} 
              className="bg-white rounded-[3rem] group overflow-hidden border border-slate-100 shadow-xl flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <Link to={`/service/${s.id}`} className="relative h-64 overflow-hidden block">
                <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl shadow-lg border border-sky-50 z-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase leading-none">Starting @</p>
                  <p className="text-2xl font-black text-sky-600">₹{s.price}</p>
                </div>

                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, y: 10 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-2"
                  >
                    View Details <ArrowRight size={14} className="text-sky-500" />
                  </motion.div>
                </div>
              </Link>

              <div className="p-8 flex flex-col flex-grow">
                <Link to={`/service/${s.id}`} className="hover:text-sky-600 transition-colors">
                  <h3 className="text-2xl font-black mb-3 text-slate-900">{s.title}</h3>
                </Link>
                <p className="text-slate-500 mb-8 flex-grow font-medium text-sm leading-relaxed">{s.desc}</p>
                <button 
                  onClick={() => handleServiceBooking(s.title, s.price)} 
                  className="w-full bg-slate-900 hover:bg-sky-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase text-xs tracking-widest shadow-lg active:scale-95"
                >
                  <MessageSquare size={18} fill="white" /> Book on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- ALSO REPAIR SECTION --- */}
        <div className="mt-32 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            We Also <span className="text-sky-500 italic">Repair</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {extraRepairs.map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -12 }} className="bg-white rounded-[3rem] group overflow-hidden border border-slate-100 shadow-lg flex flex-col">
              <Link to={`/service/${item.id}`} className="h-60 w-full overflow-hidden block">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </Link>
              <div className="p-8 text-center flex flex-col flex-grow">
                <div className="bg-sky-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-sky-500 transition-colors duration-300 text-sky-500 group-hover:text-white">
                  <Zap size={20} />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <Link to={`/service/${item.id}`} className="w-full py-4 rounded-2xl bg-slate-50 text-sky-600 font-black text-[10px] uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all border border-sky-100">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- HEROES SECTION --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-white rounded-[4rem] my-20 shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Home Maintenance <span className="text-sky-500 italic">Heroes</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">Patna's most professional Electricians and Painters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {maintenanceHeroes.map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.01 }} className="bg-slate-50 rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                  <img src={item.img} alt={item.service} className="w-full h-full object-cover" />
                </div>
                <div className="p-10 lg:w-1/2 flex flex-col justify-center">
                  <div className={`w-12 h-1.5 ${item.color} mb-6 rounded-full`} />
                  <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">{item.service}</h3>
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-xs uppercase tracking-wide">
                        <CheckCircle className="text-sky-500" size={14} /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/service/${item.id}`} className="bg-slate-900 text-center text-white py-4 px-8 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-sky-500 transition-all shadow-xl active:scale-95">
                    Explore Service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- EMERGENCY BANNER --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-24 p-10 md:p-16 rounded-[4rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[100px]" />
          <div className="flex items-center gap-8 text-center md:text-left relative z-10">
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md hidden md:block border border-white/10">
              <Clock size={44} className="text-sky-400" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Need Emergency Support?</h3>
              <p className="text-slate-400 font-medium text-lg">We reach anywhere in <span className="text-white font-bold">Patna</span> within 60 minutes.</p>
            </div>
          </div>
          <a href="tel:7257087110" className="bg-sky-500 text-white px-12 py-6 rounded-3xl font-black text-2xl hover:bg-white hover:text-slate-900 shadow-2xl flex items-center gap-4 transition-all active:scale-95 relative z-10">
            <Phone size={28} /> Call 8540038107
          </a>
        </motion.div>
      </div>
      
      <div className="py-12 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">© 2026 Cooling Refrigeration Patna</p>
      </div>
    </div>
  );
}

export default Services;