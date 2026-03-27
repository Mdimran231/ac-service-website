import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, ChevronDown, Wind, Zap, ShieldCheck, Thermometer, LogOut, ChevronRight } from 'lucide-react'; 
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo_transparent.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile Dropdown State
  
  const navigate = useNavigate();
  const isAdmin = !!localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    alert("Logged out successfully!");
    navigate('/');
    setIsMenuOpen(false);
  };

  const glassStyle = "bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_15px_45px_rgba(0,0,0,0.1)]";

  const serviceItems = [
    { id: "split-ac-jet", name: "Split AC Jet Service", icon: <Wind size={16} className="text-sky-500" /> },
    { id: "installation", name: "AC Installation", icon: <Zap size={16} className="text-amber-500" /> },
    { id: "leakage-repair", name: "Leakage Repair", icon: <ShieldCheck size={16} className="text-green-500" /> },
    { id: "fridge-repair", name: "Fridge", icon: <Thermometer size={16} className="text-rose-500" /> },
    { id: "painter-service", name: "Painter Service", icon: <Settings size={16} className="text-purple-500" /> },
    { id: "electrician-service", name: "Electrician Service", icon: <Settings size={16} className="text-yellow-500" /> }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6">
      <div className={`max-w-7xl mx-auto rounded-[3rem] px-10 py-2 flex justify-between items-center ${glassStyle}`}>
        
        {/* LOGO */}
        <Link to="/" className="flex items-center cursor-pointer group">
          <div className="relative w-32 h-20 md:w-44 md:h-24 transition-transform duration-300 group-hover:scale-110">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.2em] text-slate-800">
          <Link to="/" className="hover:text-sky-600 transition-all">Home</Link>
          
          <div className="relative py-4" onMouseEnter={() => setIsServicesHovered(true)} onMouseLeave={() => setIsServicesHovered(false)}>
            <Link to="/services" className="hover:text-sky-600 transition-all flex items-center gap-1 cursor-pointer">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {isServicesHovered && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 flex flex-col gap-1">
                  {serviceItems.map((item) => (
                    <Link key={item.id} to={`/service/${item.id}`} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-sky-50 transition-all group/item">
                      <div className="p-2 bg-slate-50 rounded-xl group-hover/item:bg-white transition-colors">{item.icon}</div>
                      <span className="text-[10px] text-slate-600 group-hover/item:text-sky-600 tracking-wider font-black uppercase">{item.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className="hover:text-sky-600 transition-all">About</Link>
          <Link to="/gallery" className="hover:text-sky-600 transition-all">Gallery</Link>

          {isAdmin && (
            <div className="flex items-center gap-6 border-l pl-6 border-slate-200">
              <Link to="/super-secret-dash-88" className="text-sky-600 hover:scale-110 transition-transform"><Settings size={20} /></Link>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-700 transition-colors"><LogOut size={20} /></button>
            </div>
          )}

          <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-2xl hover:bg-sky-600 transition-all shadow-xl active:scale-95 ml-2">Contact</Link>
        </div>

        {/* --- Mobile Toggle --- */}
        <button className="md:hidden p-3 text-slate-900 bg-white/50 rounded-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute top-32 left-6 right-6 p-8 rounded-[3.5rem] flex flex-col gap-5 font-black text-xl md:hidden ${glassStyle} max-h-[80vh] overflow-y-auto no-scrollbar`}>
            
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-slate-900 border-b border-slate-100 pb-2">Home</Link>
            
            {/* MOBILE SERVICES DROPDOWN */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between text-slate-900 border-b border-slate-100 pb-2"
              >
                Services 
                <ChevronRight size={24} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-90 text-sky-500' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-2 bg-slate-50/50 rounded-3xl p-2">
                    {serviceItems.map((item) => (
                      <Link 
                        key={item.id} 
                        to={`/service/${item.id}`} 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-4 p-4 text-sm font-bold text-slate-600 hover:bg-white rounded-2xl"
                      >
                        {item.icon} {item.name}
                      </Link>
                    ))}
                    <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-[10px] text-sky-500 text-center py-2 uppercase tracking-widest">View All Services</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="text-slate-900 border-b border-slate-100 pb-2">Gallery</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-900 border-b border-slate-100 pb-2">About</Link>
            
            {isAdmin && <Link to="/super-secret-dash-88" onClick={() => setIsMenuOpen(false)} className="text-sky-600">Dashboard</Link>}

            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-xl mt-4 text-center text-lg uppercase tracking-wider active:scale-95 transition-all">
              Contact Us
            </Link>
            
            {isAdmin && <button onClick={handleLogout} className="text-red-500 text-sm uppercase pt-4 font-bold">Logout</button>}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;