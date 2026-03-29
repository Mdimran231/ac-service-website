import { motion } from 'framer-motion';
import { Zap, ThermometerSnowflake, ShieldCheck, Clock, Wrench, Shield, ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import heroLogo from '../assets/logo2-removebg-preview.png'; 
import BookingForm from '../components/BookingForm';
import uninstallationImg from '../assets/uninstallation.jpg';
import washing from '../assets/washing.jpg';
import freeze from '../assets/freeze.jpg';
import painter from '../assets/painter.jpg';
import electrician from '../assets/electrician.jpg';
import service from '../assets/service.jpeg';
import installation from '../assets/installaion.jpg';
import repairing from '../assets/Gallery 1.jpeg';


function Home() {
  const glassStyle = "bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_40px_rgba(31,38,135,0.07)]";

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2eef9] to-[#f1f5f9] text-slate-800 overflow-hidden font-sans"
    >
      {/* Background Accents */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sky-200/40 blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100/60 blur-[100px] -z-10" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-28 md:pt-36 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* RIGHT SIDE: THE BIG LOGO WITH FLOATING MOTION (Mobile par upar dikhega) */}
          {/* RIGHT SIDE: THE BIG LOGO WITH ACTIVE FLOATING MOTION */}
<motion.div 
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative order-1 lg:order-2 flex justify-center items-center group"
>
  <div className="relative z-10">
    {/* --- FLOATING MOTION CONTAINER --- */}
    <motion.div
      animate={{ y: [0, -40, 0] }} // Range badha di (0 se -35px tak)
      transition={{ 
        duration: 2, // Speed badha di (2 second mein ek round)
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex justify-center items-center transition-transform duration-500 group-hover:scale-105"
    >
      {/* --- THE LOGO IMAGE --- */}
      <img 
        src={heroLogo} 
        alt="Cool Refrigeration Premium Logo" 
        className="w-full h-full object-contain filter drop-shadow-[0_40px_70px_rgba(14,165,233,0.5)] brightness-110 contrast-110"
      />

      {/* Floating Badges (Desktop Only) */}
      <motion.div 
        className="hidden md:block absolute -top-4 right-0 bg-white/90 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl border border-white text-center"
      >
        <p className="text-4xl font-black text-sky-500 italic leading-none drop-shadow-sm">10+</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
      </motion.div>
    </motion.div>
    
    {/* Background Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-sky-400/15 blur-[120px] -z-20 rounded-full animate-pulse-slow" />
  </div>
</motion.div>

          {/* LEFT SIDE: TEXT CONTENT (Mobile par niche aayega) */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 border border-white/80 shadow-sm mb-6 md:mb-10 hover:bg-white/80 transition-colors">
              <ThermometerSnowflake size={18} className="text-sky-500 animate-spin-slow" />
              <span className="text-sky-700 text-xs font-black tracking-widest uppercase italic">Patna's #1 AC Experts</span>
            </div>

            <h1 className="text-5xl md:text-[5.8rem] font-black text-slate-900 leading-[0.93] mb-6 md:mb-10 tracking-tighter">
              Cooling <br />
              <span className="text-sky-500 italic drop-shadow-sm">Refrigeration.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-lg leading-relaxed font-medium">
              Ab Patna mein payein <span className="text-slate-900 font-bold underline decoration-sky-400 underline-offset-4">Premium Service</span> within 60 mins. Expert engineers, zero stress!
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="#booking-section" 
                className="bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-slate-300 flex items-center gap-4 group"
              >
                Book Now
                <div className="bg-sky-500 p-1.5 rounded-full group-hover:rotate-45 transition-transform">
                  <Zap size={18} fill="white" className="text-white" />
                </div>
              </motion.a>
              <p className="text-sm font-black text-slate-500 uppercase tracking-tighter">Trusted by 1000+ Homes in Patna</p>
            </div>
          </motion.div>

        </div>
      </header>

      {/* --- STATS / FEATURES SECTION --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        {[
          { icon: <Clock size={32} />, title: "60 Min Arrival", desc: "Bhopal ke har kone mein sabse tez service." },
          { icon: <Wrench size={32} />, title: "Expert Care", desc: "Certified engineers for all major AC brands." },
          { icon: <Shield size={32} />, title: "Fix Warranty", desc: "30-day service guarantee for peace of mind." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            className={`p-10 rounded-[2.5rem] ${glassStyle} group transition-all text-center md:text-left`}
          >
            <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-600 mb-6 mx-auto md:mx-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

     
      {/* --- DIRECT CALL SECTION --- */}
      <section className="py-12 px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className={`relative p-8 md:p-12 rounded-[2.5rem] ${glassStyle} flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border-white/40`}>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Garmi Se <span className="text-sky-500">Pareshan?</span>
              </h2>
              <p className="text-slate-600 font-medium text-lg">Abhi call karein aur 60 min mein cooling payein! ❄️</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="tel:+918934247456" 
                className="flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl shadow-2xl hover:bg-sky-600 transition-all duration-300"
              >
                <Zap size={24} />
                <span className="text-2xl md:text-3xl font-black tracking-tighter">+91 8540038107</span>
              </motion.a>
              <span className="flex items-center gap-2 text-sky-600 font-bold text-sm animate-pulse">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                Available 24/7 in Patna
              </span>
            </div>
          </div>
        </motion.div>
      </section>

     {/* --- SERVICES SECTION (AC Focus) --- */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our <span className="text-sky-500">Expert Services</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">Patna ki garmi ka solution ab ek click door.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: "Ac-Repair", title: "AC Repairing", desc: "Cooling nahi ho rahi? Humne sab theek kar dena hai.", img: repairing, price: "Starts @ ₹299" },
            { id: "leakage-repair", title: "Leakage Fix", desc: "Relocating your AC safely with professional gas pump-down.", img: uninstallationImg, price: "Starts @ ₹499" },
            { id: "split-ac-jet", title: "Jet Cleaning", desc: "Deep cleaning takki aapko mile fresh hawa.", img: service, price: "Starts @ ₹499" },
            { id: "installation", title: "Installation", desc: "Naya AC liya hai? Safe installation ke liye call karein.", img: installation, price: "Starts @ ₹799"}
          ].map((service, idx) => (
            <motion.div key={idx} whileHover={{ y: -12 }} className={`rounded-[2.5rem] ${glassStyle} relative overflow-hidden group border-none shadow-lg bg-white`}>
              <Link to={`/service/${service.id}`}>
                <div className="h-48 w-full overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-3 text-slate-800 group-hover:text-sky-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sky-600 font-black text-sm uppercase">{service.price}</span>
                    <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-sky-500">
                      Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WE ALSO REPAIR SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">We Also <span className="text-sky-500 italic">Repair</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: "fridge-repair", name: "Refrigerators", img: freeze, desc: "Cooling issues ya gas leak? Single & double door fridge repair experts." },
            { id: "washing-machine", name: "Washing Machines", img: washing, desc: "Automatic aur Semi-automatic machines ki fast service." },
            { id: "microwave", name: "Microwave Oven", img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600", desc: "Heating aur wiring faults ka pakka solution." }
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -12 }} className="bg-white rounded-[3rem] group overflow-hidden border border-slate-50 shadow-lg transition-all duration-500">
              <Link to={`/service/${item.id}`}>
                <div className="h-56 w-full overflow-hidden"><img src={item.img} className="w-full h-full object-cover group-hover:scale-110 duration-700" /></div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-sky-500">{item.name}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-6">{item.desc}</p>
                  <div className="flex items-center justify-center gap-2 text-sky-600 font-black text-xs uppercase tracking-widest">
                    View Detail <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ELECTRICIAN & PAINTER SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100 bg-sky-50/30 rounded-[4rem] my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { id: "electrician-service", service: "Professional Electrician", img: electrician, features: ["Wiring & Short Circuit Fix", "Fan & Light Installation"], color: "bg-amber-500" },
            { id: "painter-service", service: "Expert House Painting", img: painter, features: ["Interior & Exterior Paint", "Wall Putty"], color: "bg-rose-500" }
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white">
              <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden"><img src={item.img} className="w-full h-full object-cover" /></div>
              <div className="p-10 lg:w-1/2 flex flex-col justify-center">
                <Link to={`/service/${item.id}`}>
                  <div className={`w-12 h-1.5 ${item.color} mb-6 rounded-full`} />
                  <h3 className="text-3xl font-black text-slate-900 mb-4">{item.service}</h3>
                  <ul className="space-y-3 mb-8">{item.features.map((feat, i) => (<li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm"><div className="w-1.5 h-1.5 rounded-full bg-sky-400" /> {feat}</li>))}</ul>
                  <div className="flex items-center gap-2 text-sky-600 font-black text-xs uppercase tracking-widest">View Details <ArrowRight size={16} /></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BRANDS SECTION (TRUST BUILDER) --- */}
<section className="py-20 relative overflow-hidden bg-white/20 backdrop-blur-md border-y border-white/50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-12"
    >
      Authorized Service Partners for All Major Brands
    </motion.p>
    
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
      {[
        { name: "LG", color: "hover:text-[#a50034]" },
        { name: "SAMSUNG", color: "hover:text-[#034ea2]" },
        { name: "VOLTAS", color: "hover:text-[#005da4]" },
        { name: "DAIKIN", color: "hover:text-[#00a1e4]" },
        { name: "LLOYD", color: "hover:text-[#ed1c24]" },
        { name: "BLUE STAR", color: "hover:text-[#004a91]" },
        { name: "HITACHI", color: "hover:text-[#ff0000]" },
        { name: "WHIRLPOOL", color: "hover:text-[#000000]" },
        { name: "GODREJ", color: "hover:text-[#000000]" },
        { name: "CARRIER", color: "hover:text-[#000000]" },
        { name: "MITSUBISHI", color: "hover:text-[#000000]" },
        { name: "HAIER", color: "hover:text-[#000000]" },
        {name:"O GENERAL", color: "hover:text-[#000000]"}
        
      ].map((brand, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ delay: idx * 0.1 }}
          className={`text-2xl md:text-4xl font-black tracking-tighter cursor-default transition-all duration-300 text-slate-400 ${brand.color}`}
        >
          {brand.name}
        </motion.span>
      ))}
      <p>All type of ACs are serviced here</p>
    </div>
    

    {/* Small Note */}
    <div className="mt-12 flex justify-center">
      <div className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-100 flex items-center gap-2">
        <ShieldCheck size={16} className="text-sky-500" />
        <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">100% Original Spare Parts Guaranteed</span>
      </div>
    </div>
  </div>
</section>

      {/* --- BOOKING FORM SECTION --- */}
      <section id="booking-section" className="py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <BookingForm />
        </motion.div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-10 text-center">Aapke <span className="text-sky-500">Sawal</span>, Hamare Jawab</h2>
        <div className="space-y-4">
          {[
            { q: "Kya aap Sunday ko bhi service dete hain?", a: "Ji haan! Hum hafte ke 7 din aur 24 ghante Bhopal mein available hain." },
            { q: "Service ke baad koi warranty milti hai?", a: "Bilkul! Hum har service par 30-day ki fix warranty dete hain." },
            { q: "Visiter charge kitna hai?", a: "Humara visiting charge sirf ₹349 hai, jo repair hone par adjust ho jata hai." }
          ].map((faq, i) => (
            <details key={i} className={`group p-6 rounded-2xl ${glassStyle} cursor-pointer`}>
              <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
                {faq.q}
                <span className="transition group-open:rotate-180 text-sky-500 font-black">▼</span>
              </summary>
              <p className="mt-4 text-slate-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Home;