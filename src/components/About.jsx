import React from 'react';
import { motion } from 'framer-motion';
import myimage from '../assets/myimage.jpg'; 

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-purple-950 text-white flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-20" id='About'>

      <motion.h2
        className="text-5xl font-bold text-purple-400 mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl">
        
       
        <motion.img
          src={myimage}
          alt="Aditi Shukla"
          className="w-56 h-56 object-cover rounded-full border-4 border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.7)] hover:shadow-[0_0_45px_rgba(192,132,252,0.9)] transition-all duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        
        <motion.div
          className="max-w-xl text-center md:text-left leading-relaxed text-lg text-gray-200 space-y-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I’m <span className="text-purple-300 font-semibold">Aditi Shukla</span>, a passionate 
            <span className="text-purple-300 font-semibold"> Full Stack Developer</span> who loves transforming ideas 
            into real-world digital experiences. I specialize in creating modern, responsive web apps using 
            <span className="text-purple-300"> React</span>, <span className="text-purple-300">Node.js</span>, 
            <span className="text-purple-300"> Express</span>, and <span className="text-purple-300">MongoDB</span>.
          </p>

          <p>
            I enjoy designing clean, intuitive user interfaces on the frontend while building efficient, scalable 
            architectures on the backend. I believe in writing code that is not only functional but also elegant, 
            maintainable, and purposeful.
          </p>

          <p>
            When I’m not coding, you’ll find me exploring new technologies, improving my design skills, or collaborating 
            on open-source projects. I’m passionate about crafting software where creativity meets logic — and that’s 
            exactly what I strive to achieve in every project.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
