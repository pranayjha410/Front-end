import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
  <section className="relative h-[70vh] bg-gradient-to-r from-blue-700 to-indigo-900 flex items-center justify-center text-center px-6">
   
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-400">BuyBox</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop shop for premium sports gear & accessories.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
