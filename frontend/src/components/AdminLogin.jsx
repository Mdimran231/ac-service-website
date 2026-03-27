import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // For smooth animations
import { Loader2, Lock } from 'lucide-react'; //
const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Loading state add ki
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Loading shuru
        
        try {
            const res = await axios.post('http://localhost:8082/api/auth/login', {
                username, 
                password
            });

            const token = res.data.token || res.data; 

            if (token) {
                localStorage.setItem('adminToken', token);
                // Page refresh karke token load karne ke liye window.location use kar sakte hain
                // ya simple navigate.
                navigate('/admin'); 
            }
        } catch (err) {
            console.error("Login Error:", err);
            alert("Galt User ID ya Password hai!");
        } finally {
            setLoading(false); // Loading khatam
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
            >
                <form 
                    onSubmit={handleLogin} 
                    className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-slate-900 rounded-2xl text-white">
                            <Lock size={30} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-black mb-2 text-slate-800 text-center">Admin Access</h2>
                    <p className="text-slate-500 text-center mb-8 text-sm uppercase tracking-widest font-bold">Authorized Personnel Only</p>
                    
                    <div className="space-y-4">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all text-slate-700" 
                                onChange={(e)=>setUsername(e.target.value)} 
                                required 
                            />
                        </div>

                        <div>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all text-slate-700" 
                                onChange={(e)=>setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all flex justify-center items-center gap-2 shadow-lg active:scale-95 disabled:opacity-70"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            "Enter Dashboard"
                        )}
                    </button>
                    
                    <button 
                        type="button"
                        onClick={() => navigate('/admin')}
                        className="w-full mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 transition-colors"
                    >
                        Back to Home
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;