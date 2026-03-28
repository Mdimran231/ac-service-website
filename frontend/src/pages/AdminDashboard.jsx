import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // ✅ RENDER BACKEND URL (Localhost hata diya hai)
    const BASE_URL = 'https://ac-service-website-backend.onrender.com';
    const API_URL = `${BASE_URL}/api/admin/all-bookings`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Login ke waqt jo token save kiya tha use uthayein
                const token = localStorage.getItem('adminToken');
                
                if (!token) {
                    console.error("No token found, redirecting to login...");
                    navigate('/admin-portal-login');
                    return;
                }

                const res = await axios.get(API_URL, {
                    headers: { 
                        'Authorization': `Bearer ${token}`, // Bearer + Space + Token
                        'Content-Type': 'application/json'
                    }
                });

                setBookings(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Dashboard Fetch Error:", err.response);
                
                // Agar Token expire ho gaya ya galat hai (401/403)
                if (err.response?.status === 401 || err.response?.status === 403) {
                    alert("Session Expired! Please login again.");
                    localStorage.removeItem('adminToken');
                    navigate('/admin-portal-login');
                } else {
                    alert("Server Error: Render backend connect nahi ho raha.");
                }
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate, API_URL]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin-portal-login');
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mb-4"></div>
                <div className="text-sky-600 font-bold text-xl">Loading Bookings...</div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                    Booking <span className="text-sky-600">Dashboard</span>
                </h1>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded-2xl font-bold shadow-lg transition-all active:scale-95"
                >
                    Logout
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-sky-600 text-white">
                            <tr>
                                <th className="p-6 font-bold uppercase text-sm tracking-wider">Customer Name</th>
                                <th className="p-6 font-bold uppercase text-sm tracking-wider">Mobile Number</th>
                                <th className="p-6 font-bold uppercase text-sm tracking-wider">Service Type</th>
                                <th className="p-6 font-bold uppercase text-sm tracking-wider">Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {bookings.length > 0 ? (
                                bookings.map((b, index) => (
                                    <tr key={b.id || index} className="hover:bg-sky-50/50 transition-colors">
                                        <td className="p-6 font-bold text-slate-800">{b.customerName}</td>
                                        <td className="p-6 text-slate-600 font-medium">{b.phone || b.phoneNumber}</td>
                                        <td className="p-6">
                                            <span className="bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-black uppercase">
                                                {b.serviceType}
                                            </span>
                                        </td>
                                        <td className="p-6 text-slate-500 text-sm max-w-xs truncate">{b.address}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-20 text-center text-slate-400 font-medium text-lg">
                                        Abhi tak koi booking nahi aayi hai.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;