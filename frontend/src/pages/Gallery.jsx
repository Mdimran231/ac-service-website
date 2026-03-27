import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Gallery 1.jpeg';
import img2 from '../assets/Gallery 2.jpeg';
import img3 from '../assets/Gallery 3.jpeg';
import img4 from '../assets/Gallery 4.jpeg';
import img5 from '../assets/Gallery 5.jpeg';
import img6 from '../assets/Gallery 6.jpeg';
import img7 from '../assets/Gallery 7.jpeg';

function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7

  ];

  

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black mb-10 text-center">Our <span className="text-sky-500">Work Portfolio</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="h-64 rounded-2xl overflow-hidden shadow-md"
          >
            <img src={img} alt="Work" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;