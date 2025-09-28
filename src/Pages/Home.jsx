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
  );
};

export default Home;
