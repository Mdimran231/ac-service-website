import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { ShieldCheck, Users, Zap, Award, Phone, CheckCircle2, Snowflake, MapPin } from 'lucide-react';
import img2 from '../assets/Gallery 4.jpeg';

const About = () => {
  // Mobile aur Desktop ke liye responsive values
  const glassStyle = "bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]";
  
  const stats = [
    { icon: <Users size={28} />, label: "Happy Clients", value: "2500+" },
    { icon: <Zap size={28} />, label: "Repairs Done", value: "8000+" },
    { icon: <ShieldCheck size={28} />, label: "Expert Techs", value: "15+" },
    { icon: <Award size={28} />, label: "Experience", value: "10 Yrs" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <Parallax 
        bgImage="https://images.unsplash.com/photo-1599939571322-792a326991f2?q=80&w=2000&auto=format&fit=crop" 
        strength={200}
      >
        <div className="h-[70vh] flex items-center justify-center relative px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white relative z-10 max-w-5xl"
          >
            <span className="inline-block bg-sky-500 px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-6 shadow-2xl">
              Patna's #1 Service Provider
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
              Cooling <span className="text-sky-400">Refrigeration</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 font-medium max-w-3xl mx-auto leading-relaxed">
              Expert AC repair, Fridge maintenance, and Electrical solutions. We don't just fix machines; we deliver peace of mind.
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* --- STATS CARDS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${glassStyle} p-8 rounded-[3rem] text-center group hover:bg-sky-600 transition-all duration-500`}
            >
              <div className="text-sky-600 group-hover:text-white mb-4 flex justify-center transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-white transition-colors">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500 group-hover:text-sky-100 transition-colors mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STORY & MISSION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sky-600 font-black text-xs uppercase tracking-[0.3em] mb-3">Our Legacy</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1]">
                Your Comfort is Our <br /> Only Mission.
              </h3>
            </div>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              At <strong className="text-slate-900">Cooling Refrigeration</strong>, we’ve been serving Patna and surrounding areas since 2018. What started as a small repair shop is now a team of 15+ certified professionals dedicated to high-quality home services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Same Day Service', 'Verified Technicians', 'Genuine Spare Parts', '90 Days Warranty'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 font-bold text-slate-800">
                  <CheckCircle2 className="text-sky-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-sky-200/50 rounded-[4rem] rotate-3 blur-sm" />
            <img 
              src={img2}
              alt="Service" 
              className="relative z-10 rounded-[3.5rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section className="pb-32 px-6">
        <motion.div 
          whileInView={{ y: [40, 0], opacity: [0, 1] }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 relative z-10 leading-tight">
            Facing Issues With <br /> Your Appliances?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Don't wait for a total breakdown. Contact **Cooling Refrigeration** today for a quick inspection.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            <a 
              href="tel:7257087110" 
              className="bg-sky-500 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all flex items-center gap-4 shadow-[0_20px_40px_rgba(14,165,233,0.3)] active:scale-95"
            >
              <Phone fill="currentColor" /> 8540038107
            </a>
            
            <div className="flex items-center gap-3 text-white/60 font-bold uppercase tracking-widest text-[10px]">
              <MapPin size={16} className="text-sky-500" /> Serving All Over Patna
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- MINI FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
          © 2026 Cooling Refrigeration • Expert Care • Trusted Results
        </p>
      </footer>

    </div>
  );
};

export default About;