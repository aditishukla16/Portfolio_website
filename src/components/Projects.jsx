import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "chitChat App",
    description:
      "A real-time chat application built with the MERN stack and Socket.io featuring AI-powered mood detection and mental health mode.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
    link: "https://github.com/aditishukla16/ChatApp",
    status: "🚀 Coming Soon...",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and animated personal portfolio website showcasing my skills and projects.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/aditishukla16/Portfolio_website",
    demo: "https://portfolio-website-cl7r.vercel.app",
  },
  {
    title: "AI Task Manager",
    description:
      "An AI-powered productivity app that manages tasks, deadlines, and generates summaries using OpenAI API.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "OpenAI API"],
    status: "🧠 Coming Soon...",
  },
  {
    title: "StaySync - Hostel Seat Management System",
    description:
      "A digital hostel management system designed to simplify seat allocation, student registration, and admin control with real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    link: "https://github.com/aditishukla16/StaySync",
    status: "🛠️ Coming Soon...",
  },
  {
    title: "Real Estate Website",
    description:
      "A modern real estate website where users can browse, filter, and view property listings with responsive design and smooth animations.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/aditishukla16/Real-Estate-Website",
    demo: "https://real-estate-website-ten-phi.vercel.app/",
  },
];

const Project = () => {
  return (
    <section
      id="Projects"
      className="bg-black text-white py-20 px-6 lg:px-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4"
      >
        My <span className="text-purple-400">Projects</span>
      </motion.h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        A showcase of my work combining creativity, code, and innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/40 overflow-hidden transition-all duration-300"
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-all duration-500 rounded-2xl" />

            <div className="relative p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.status && (
                  <p className="text-pink-400 text-sm font-medium mb-3">
                    {project.status}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-800/60 border border-purple-600 text-purple-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                {project.demo ? (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                ) : (
                  <span className="text-gray-500 text-sm italic">
                    Demo Unavailable
                  </span>
                )}

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-all"
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
