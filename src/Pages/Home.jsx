import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png",
  "https://cdn.pixabay.com/photo/2013/07/13/10/51/bowling-157933_1280.png",
  "https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997_1280.png",
  "https://cdn.pixabay.com/photo/2013/07/13/09/45/tennis-racket-155963_1280.png",
];

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // Auto switch every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient + subtle texture background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-400">BuyBox</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop shop for premium sports gear & accessories.
          </p>
          <button
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            onClick={() => navigate("/product")}
          >
            Shop Now
          </button>
        </motion.div>

        {/* Right: Image Slideshow */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="Sports"
              className="w-64 md:w-[400px] object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
      
    </section>

    
{/* Offers  */}
<section className="relative py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
      
        <div className="mb-8 md:mb-0 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            ⚡ Upgrade Your Game with BuyBox!
          </h2>
          <p className="text-lg md:text-xl mb-6 font-medium text-gray-900">
            Discover the latest sports gear, designed for champions.  
            From cricket to basketball, we’ve got everything to power your passion. 🏏🏀🎾
          </p>
          <button
            onClick={() => navigate("/product")}
            className="mt-2 bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Explore Collection
          </button>
        </div>

        {/* Right: Offer Image */}
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/09/46/cricket-155965_1280.png"
          alt="Offer Banner"
          className="w-64 md:w-[300px] object-contain drop-shadow-xl"
        />
      </div>
    </section>

    {/* Featured section  */}
   <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900">
  <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
    Featured Products
  </h2>
  
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">    
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/09/46/cricket-155965_1280.png"
        alt="Cricket Bat"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Kookaburra Cricket Bat</h3>
      <p className="text-gray-600">₹2499</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={() => navigate("/product")}>
        View Details
      </button>
    </div>

     
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/09/45/tennis-racket-155963_1280.png"
        alt="Tennis Racket"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Wilson Tennis Racket</h3>
      <p className="text-gray-600">₹3499</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={() => navigate("/product")}>
        View Details
      </button>
    </div>

    {/* Product 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997_1280.png"
        alt="Basketball"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Spalding Basketball</h3>
      <p className="text-gray-600">₹1999</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={() => navigate("/product")}>
        View Details
      </button>
    </div>


   
  </div>
</section>



    </>
  );
};

export default Home;
