import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left: Image */}
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHBAzubrSSc2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722604900839?e=1761782400&v=beta&t=0F8Y_zUDvdTyMMpuoEcbDDMtm1Pulblv3sWbOgdgHao"
            alt="Pranay Jha"
            className="w-64 md:w-80 rounded-xl shadow-2xl object-cover"
          />

          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg md:text-xl mb-4">
              Hi, I’m <span className="font-semibold">Pranay Jha</span>, a
              passionate developer and sports enthusiast. I created{" "}
              <span className="font-semibold">BuyBox</span> to combine my love
              for technology and sports, making it easier for players to find
              the gear they need. My goal is to provide a seamless shopping
              experience backed by dedication and innovation.
            </p>
            <button
              type="button"
              onClick={() => navigate("/product")}
              className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Shop Now
            </button>
          </div>
        </motion.div>
      </section>

      {/*  Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose BuyBox?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">Quality Gear</h3>
              <p>
                Only premium brands selected for performance and durability.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>
                Get your sports essentials delivered quickly to your doorstep.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p>We’re always here to assist and guide you.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">
                Trusted by Athletes
              </h3>
              <p>Loved by both professionals and amateurs alike.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Explore our collection of premium sports gear and get the advantage
            you deserve.
          </p>
          <button
            type="button"
            onClick={() => navigate("/product")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Shop Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
