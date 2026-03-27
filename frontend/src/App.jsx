import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// JWT based setup: Credentials ki zaroorat nahi kyunki hum Bearer token use kar rahe hain
// axios.defaults.withCredentials = true; 

// Components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppToggle from './components/WhatsAppToggle';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminLogin from './components/AdminLogin'; 
import AdminDashboard from './pages/AdminDashboard';
import ServiceDetail from './pages/ServiceDetail';
// --- PROTECTED ROUTE GUARD ---
// Ye component ab JWT 'adminToken' check karega jo login ke baad save hota hai
const ProtectedAdmin = ({ children }) => {
  const token = localStorage.getItem('adminToken'); 
  return token ? children : <Navigate to="/admin-portal-login" />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2eef9] to-[#f1f5f9] font-sans selection:bg-sky-500/20 selection:text-sky-900">
        
        {/* Background Decorative Blobs */}
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-200/30 blur-[120px] -z-10" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px] -z-10" />
       <ScrollToTop />
        <Navbar />
        <WhatsAppToggle />

        <main className="pt-28 pb-10">
          <AnimatePresence mode="wait">
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/service/:id" element={<ServiceDetail />} />

              {/* SECRET ADMIN LOGIN ROUTE */}
              <Route path="/admin-portal-login" element={<PageWrapper><AdminLogin /></PageWrapper>} />

              {/* PROTECTED ADMIN DASHBOARD */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedAdmin>
                    <PageWrapper>
                      <AdminDashboard />
                    </PageWrapper>
                  </ProtectedAdmin>
                } 
              />

              {/* 404 Redirect - Agar koi galat URL daale toh Home par bhej do */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// Page Transition Animation Wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default App;
