import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',        // Backend match: 'phone'
        address: '',
        serviceType: '',
        acBrand: '',      // Backend model field
        date: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Backend port 8082 aur endpoint /api/bookings/add confirm karein
            const res = await axios.post('https://ac-service-website-backend.onrender.com/api/bookings/add', {
                ...formData,
                email: "no-email@bhopal.com", // Backend requirement agar ho toh
                status: "PENDING"
            });
            
            if(res.status === 200 || res.status === 201) {
                alert("Booking Successful! Our team will contact you soon.");
                
                // WhatsApp notification (Optional but good for business)
                const text = `*New Booking Alert!*%0A*Name:* ${formData.customerName}%0A*Brand:* ${formData.acBrand}%0A*Service:* ${formData.serviceType}`;
                window.open(`https://wa.me/918540038107?text=${text}`, '_blank');
                
                // Form reset
                setFormData({ customerName: '', phone: '', address: '', serviceType: '', acBrand: '', date: '' });
                e.target.reset();
            }
        } catch (err) {
            console.error("Booking Error:", err);
            alert("Connection failed! Make sure your backend is running on 8082.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white/30 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50">
            <h2 className="text-3xl font-black mb-6 text-slate-800 tracking-tight text-center">
                AC <span className="text-sky-600">Service</span> Booking
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    className="w-full p-4 rounded-2xl bg-white/60 border-none outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm" 
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})} 
                    required 
                />
                
                <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-full p-4 bg-white/60 border-none rounded-2xl outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm" 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    required 
                />
                
                <input 
                    type="text" 
                    placeholder="AC Brand (e.g. LG, Voltas)" 
                    className="w-full p-4 rounded-2xl bg-white/60 border-none outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm" 
                    onChange={(e) => setFormData({...formData, acBrand: e.target.value})} 
                    required 
                />

                <select 
                    className="w-full p-4 rounded-2xl bg-white/60 border-none outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm text-slate-600" 
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})} 
                    required
                >
                    <option value="">Select Service Type</option>
                    <option value="AC Repairing">AC Repairing</option>
                    <option value="Gas Refill">Gas Refill</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Installation">Installation</option>
                    <option value="Others">Others</option>
                </select>

                <textarea 
                    placeholder="Your Address in Bhopal" 
                    className="w-full p-4 rounded-2xl bg-white/60 border-none outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm min-h-[100px]" 
                    onChange={(e) => setFormData({...formData, address: e.target.value})} 
                    required 
                />

                <input 
                    type="date" 
                    className="w-full p-4 rounded-2xl bg-white/60 border-none outline-none focus:ring-2 focus:ring-sky-400 transition-all shadow-sm text-slate-600" 
                    onChange={(e) => setFormData({...formData, date: e.target.value})} 
                    required 
                />

                <button 
                    type="submit" 
                    className="w-full bg-sky-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-sky-700 active:scale-[0.98] transition-all shadow-lg shadow-sky-200"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BookingForm;