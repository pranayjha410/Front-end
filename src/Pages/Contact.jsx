import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  simulate submission
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact <span className="text-yellow-400">BuyBox</span>
          </h1>
          <p className="text-lg md:text-xl">
            Have questions or suggestions? We’re here to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Get in Touch
          </motion.h2>

          {submitted && (
            <div className="bg-green-200 text-green-900 p-4 rounded mb-6 text-center font-semibold">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border  border-black focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-900 hover:bg-blue-800 text-yellow-400 font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info / About Me */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Info
            </h2>
            <p className="text-lg md:text-xl mb-2">
              📧 Email:{" "}
              <span className="font-semibold">pranayjha10@gmail.com</span>
            </p>
            <p className="text-lg md:text-xl mb-2">
              📞 Phone: <span className="font-semibold">+91-8788507469</span>
            </p>
            <p className="text-lg md:text-xl mb-2">
              🏠 Address:{" "}
              <span className="font-semibold">Pune, Maharashtra, India</span>
            </p>
            <p className="text-lg md:text-xl mt-4">
              You can also reach out to me directly for suggestions or
              collaboration opportunities.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/businessman-1572090_1280.png"
            alt="Pranay Jha"
            className="w-64 md:w-80 rounded-xl shadow-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
