import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // Backend endpoint jo humne pehle set kiya tha
    const API_URL = 'http://localhost:8082/api/admin/all-bookings';

    useEffect(() => {
        const fetchData = async () => {
    try {
        const token = localStorage.getItem('adminToken');
        
        // Agar token nahi hai toh wapas bhej do
        if (!token) {
            navigate('/admin-portal-login');
            return;
        }

        console.log("Using Token:", token); // Debug ke liye

        const res = await axios.get('http://localhost:8082/api/admin/all-bookings', {
            headers: { 
                // DHAYAN DEIN: Bearer ke baad ek SPACE hona zaroori hai
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        setBookings(res.data);
        setLoading(false);
    } catch (err) {
        console.error("Dashboard Fetch Error:", err.response);
        if (err.response?.status === 403) {
            // Agar abhi bhi 403 aa raha hai, toh backend ki SecurityConfig check karni hogi
            alert("Access Denied (403): Backend token verify nahi kar pa raha.");
        }
    }
};
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin-portal-login');
    };

    if (loading) return <div className="text-center mt-20 font-bold text-sky-600 text-xl">Loading Bookings...</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Booking Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded-2xl font-bold shadow-lg transition-all active:scale-95"
                >
                    Logout
                </button>
            </div>

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
                                        <td className="p-6 text-slate-600 font-medium">{b.phone}</td>
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