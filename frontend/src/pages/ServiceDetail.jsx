import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ShieldCheck, Zap, MessageSquare, Star, ArrowLeft } from 'lucide-react';

// Assets Imports
import uninstallationImg from '../assets/uninstallation.jpg';
import installationImg from '../assets/installaion.jpg'; 
import serviceImg from '../assets/service.jpeg';
import electricalImg from '../assets/electrician.jpg';
import painterImg from '../assets/painter.jpg';
import washingImg from '../assets/washing.jpg';
import freezeImg from '../assets/freeze.jpg';
import repairImg from '../assets/Gallery 1.jpeg';
import foamImg from '../assets/foam.jpeg';
import castleImg from '../assets/castle.jpeg';
import windowsImg from '../assets/window.avif';

// --- SERVICE DATA ---
const servicesData = {
  "Ac-Repair": {
    title: "Split & Window AC Repair",
    price: "299",
    img: repairImg,
    desc: "AC thik se cooling nahi kar raha ya ajeeb awaaz aa rahi hai? Patna's top technicians are ready to fix it today with genuine spare parts.",
    features: ["Gas Leakage Check & Refilling", "Compressor & PCB Repair", "Water Leakage Fix", "Fan Motor Replacement", "Noise & Vibration Fix"]
  },
  "jet-foam": {
    title: "Advanced Jet Foam Service",
    price: "599",
    img: foamImg,
    desc: "Normal service se 2 guna zyada safai. Hum use karte hain specialized alkaline foam jo coil ke andar chupi gandagi ko bahar nikal deta hai.",
    features: ["Deep Chemical Foam Cleaning", "2x Better Airflow", "Bacteria & Mold Removal", "Indoor Unit Jet Wash", "Cooling Efficiency Boost"]
  },
  "cassette-ac-jet": {
    title: "Cassette AC Jet Service",
    price: "1199",
    img: castleImg,
    desc: "Professional deep cleaning for ceiling-mounted units in Patna. Hum use karte hain special waterproof jackets jo aapke furniture ko 100% safe rakhti hain.",
    features: ["High-Pressure Jet Cleaning", "Waterproof Jacket Protection", "Drain Pump De-clogging", "Filter & Grill Deep Wash", "Commercial Specialist"]
  },
  "split-ac-jet": {
    title: "Split AC Jet Service",
    price: "499",
    img: serviceImg, 
    desc: "Hum advanced high-pressure jet pump use karte hain jo aapke AC ke internal components ko deep clean karta hai. Cooling 2 guna badh jati hai.",
    features: ["Indoor High-Pressure Wash", "Outdoor Unit Cleaning", "Drain Pipe Deep Clear", "Cooling Gas Checkup", "Air Filter Chemical Wash"]
  },
  "installation": {
    title: "AC Installation",
    price: "1199",
    img: installationImg,
    desc: "Naya AC liya hai? Humare certified experts precision mounting aur perfect copper piping ke saath installation karte hain taaki gas leak na ho.",
    features: ["Safe Wall Mounting", "Copper Piping Layout", "Drain Pipe Setup", "Vacuuming & Leak Testing", "Performance Check"]
  },
  "re-installation": {
    title: "AC Re-Installation (Shifting)",
    price: "1499",
    img: uninstallationImg,
    desc: "Purane AC ko naye jagah shift karna? Hum karte hain safe dismantling aur professional fitting bina gas leak kiye Patna mein.",
    features: ["Gas Pump-Down (Gas Save)", "Safe Dismantling", "Precision Re-Fitting", "Leak Testing", "30-Day Service Warranty"]
  },
  "leakage-repair": {
    title: "Leakage Repair",
    price: "599",
    img: uninstallationImg,
    desc: "AC se paani tapak raha hai? Humare experts advanced detectors se leakage point dhoond kar use permanent fix karte hain.",
    features: ["Water Leakage Fix", "Gas Leak Detection", "Coil Brazing", "Fast 60-Min Arrival", "Drainage Solution"]
  },
  "fridge-repair": {
    title: "Fridge & Microwave Repair",
    price: "Quote",
    img: freezeImg,
    desc: "Fridge thanda nahi kar raha? Hum Patna ke best repair service provider hain. Wires se lekar internal components tak, sab fix.",
    features: ["Cooling Issue Fix", "Wiring Faulty Check", "Gas Charging", "Original Spare Parts", "Patna Doorstep Service"]
  },
  "painter-service": {
    title: "Expert Painter Service",
    price: "Quote",
    img: painterImg,
    desc: "Apne ghar ko naya look dein. Patna ke top painters se interior aur exterior painting karwayein quality finish ke saath.",
    features: ["Interior/Exterior Paint", "Wall Putty & Waterproofing", "Texture Walls", "Surface Preparation", "Premium Finish"]
  },
  "electrician-service": {
    title: "Professional Electrician",
    price: "Quote",
    img: electricalImg,
    desc: "Electrical short circuit ya naya installation? Humare certified electricians Patna mein har problem ka turant samadhan dete hain.",
    features: ["Wiring & Short Circuit", "Inverter & UPS Setup", "Fan/Light Installation", "Socket & Switchboard", "Safety Inspection"]
  },
  "window-ac-install": {
    title: "Window AC Installation",
    price: "799",
    img: windowsImg,
    desc: "Safe aur secure window AC fitting. Hum proper sealing karte hain taaki cooling bahar na jaye.",
    features: ["Safe Mounting", "Proper Sealing", "Electrical Connection", "Drainage Setup", "Performance Testing"]
  },
  "washing-machine": {
    title: "Washing Machine Service",
    price: "Quote",
    img: washingImg,
    desc: "Expert repair and deep cleaning for all types of washing machines at your doorstep in Patna.",
    features: ["Top/Front Load Specialist", "Drum De-scaling", "Vibration Issue Fix", "Genuine Spare Parts", "Same Day Visit"]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const data = servicesData[id];

  useEffect(() => {
    if (data) {
      document.title = `${data.title} - Cooling Refrigeration Patna`;
    }
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return (
    <div className="pt-48 text-center font-black text-2xl text-slate-500 min-h-screen bg-slate-50">
      Service not found! <br /> 
      <Link to="/services" className="text-sky-500 text-sm flex items-center justify-center gap-2 mt-4"><ArrowLeft size={16}/> Back to Services</Link>
    </div>
  );

  return (
    <div className="pt-24 md:pt-40 pb-20 px-6 min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/40 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Changed gap for better mobile spacing */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* --- LEFT: IMAGE SECTION --- */}
          {/* Made sticky only for desktop (md:sticky) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="md:sticky md:top-40 z-10"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white group aspect-[4/3]">
              <img src={data.img} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl flex items-center gap-2 shadow-lg">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span className="text-[10px] md:text-xs font-black text-slate-800">Verified Service</span>
              </div>
            </div>
            
            {/* Quick Trust Badges - Hidden on mobile to save space */}
            <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
                <ShieldCheck className="text-sky-500" size={24} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">30 Days Warranty</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4">
                <Clock className="text-sky-500" size={24} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">60 Min Arrival</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: CONTENT SECTION --- */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 md:space-y-10">
            
            <div className="space-y-4">
              <span className="bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-sky-100">Patna Special</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">{data.title}</h1>
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">{data.desc}</p>
            </div>

            {/* Price & Booking Card - Adjusted for mobile */}
            <div className="p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl" />
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Estimated</p>
                <p className="text-4xl md:text-5xl font-black text-white">{data.price === "Quote" ? "On Call" : `₹${data.price}`}</p>
              </div>
              <button 
                onClick={() => window.open(`https://wa.me/918540038107?text=Hi Cooling Refrigeration, I want to book ${data.title} in Patna.`)}
                className="w-full sm:w-auto bg-sky-500 hover:bg-white hover:text-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-[2rem] font-black transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                Book on WhatsApp <MessageSquare size={22} />
              </button>
            </div>

            {/* Features List - Grid fix for mobile */}
            <div className="bg-white p-7 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 md:mb-8 flex items-center gap-3">
                <Zap size={20} className="text-sky-500" /> What is Included?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-10">
                {data.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle size={18} className="text-green-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Mini */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900">FAQ</h3>
              <div className="bg-slate-100/50 p-6 rounded-3xl text-xs md:text-sm font-medium text-slate-600 border border-slate-200">
                "Hamare technicians Patna ke har area (Kankarbagh, Boring Road, Danapur, etc.) mein available hain. 30 days ki service warranty har repair par milti hai."
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;