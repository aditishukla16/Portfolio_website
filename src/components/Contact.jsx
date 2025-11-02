import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "c4b46799-94f2-43b2-9ff0-db35ad163d07");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("✅ Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(`❌ ${data.message}`);
        setResult("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Contact"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white py-20 px-6 lg:px-24 flex flex-col items-center overflow-hidden"
    >
      {/* Subtle floating lights in background */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center drop-shadow-[0_0_25px_rgba(192,132,252,0.6)]"
      >
        Get in Touch
      </motion.h2>

      <p className="text-gray-400 text-center mb-12 max-w-xl text-lg">
        Have a project in mind or just want to say hi? Drop me a message — I'd love to connect!
      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        className="relative w-full max-w-3xl bg-gray-900/60 backdrop-blur-xl p-10 rounded-2xl shadow-[0_0_30px_rgba(192,132,252,0.15)] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Glowing gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 opacity-25 blur-xl -z-10 animate-pulse"></div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="font-medium mb-2 text-sm text-purple-300">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg px-4 py-3 bg-gray-800/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2 text-sm text-purple-300">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg px-4 py-3 bg-gray-800/70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <label className="font-medium mb-2 text-sm text-purple-300">Your Message</label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            required
            className="w-full h-40 rounded-lg px-4 py-3 bg-gray-800/70 border border-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          animate={result === "Sending..." ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.6, repeat: result === "Sending..." ? Infinity : 0 }}
          className="w-full md:w-auto px-10 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all duration-300"
        >
          {result || "Send Message"}
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-16 flex gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {[
          { icon: <FaGithub />, href: "https://github.com/aditishukla16" },
          { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/aditi-shukla-0b3bbb2a6" },
          { icon: <FaEnvelope />, href: "mailto:aditishukla1676@gmail.com" },
          { icon: <FaInstagram />, href: "https://instagram.com/aditishukla16" },
        ].map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.3,
              color: "#c084fc",
              textShadow: "0 0 12px #c084fc",
              rotate: [0, -5, 5, 0],
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                repeat: Infinity,
                duration: 3,
                delay: index * 0.3,
              },
            }}
            className="text-gray-400 text-3xl transition-all duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} <span className="text-purple-400">Aditi Shukla</span>. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Contact;


