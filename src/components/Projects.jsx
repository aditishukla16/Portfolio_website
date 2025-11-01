import React from "react";

const projects = [
  {
    title: "chitChat App",
    description:
      "A real-time chat application built with the MERN stack and Socket.io featuring AI-powered mood detection and mental health mode.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
    link: "https://github.com/yourusername/chitChat",
    demo: "https://chitchat-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and animated personal portfolio website showcasing my skills and projects.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
  {
    title: "AI Task Manager",
    description:
      "An AI-powered productivity app that manages tasks, deadlines, and generates summaries using OpenAI API.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/yourusername/ai-task-manager",
    demo: "https://ai-task-demo.vercel.app",
  },
  {
    title: "StaySync - Hostel Seat Management System",
    description:
      "A digital hostel management system designed to simplify seat allocation, student registration, and admin control with real-time updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    link: "https://github.com/yourusername/staysync",
    demo: "https://staysync-demo.vercel.app",
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-purple-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-800 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Live Demo
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-300 underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
