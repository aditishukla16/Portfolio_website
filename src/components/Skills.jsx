import React from 'react';
import { motion } from 'framer-motion';

// Import logos
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/nodejs.png';
import expressLogo from '../assets/express.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import mongoLogo from '../assets/mongodb.png';
import postgresLogo from '../assets/postgres.png';
import gitLogo from '../assets/git.png';
import vscodeLogo from '../assets/vscode.png';
import tailwindLogo from '../assets/tailwind.png';
import typescriptLogo from '../assets/typescript.png';
import nextLogo from '../assets/nextjs.png';
import dockerLogo from '../assets/docker.png';
import awsLogo from '../assets/aws.png';
import zodLogo from '../assets/zod.png';
import corsLogo from '../assets/cors.png';
import nginxLogo from '../assets/nginx.png';
import bcryptLogo from '../assets/bcrypt.png';
import prismaLogo from '../assets/prisma.png';
import redisLogo from '../assets/redis.png';
import postmanLogo from '../assets/postman.png';
import graphqlLogo from '../assets/graphql.png';
import websocketLogo from '../assets/websocket.png';
import jwtLogo from '../assets/jwt.png';
import githubLogo from '../assets/git.png';
import restapiLogo from '../assets/restapi.png';
import cicdLogo from '../assets/cicd.png';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-purple-600 to-fuchsia-600',
    skills: [
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React.js', logo: reactLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Next.js', logo: nextLogo },
    ],
  },
  {
    title: 'Backend',
    color: 'from-pink-600 to-purple-700',
    skills: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo },
    ],
  },
  {
    title: 'Database',
    color: 'from-purple-700 to-indigo-700',
    skills: [
      { name: 'MongoDB', logo: mongoLogo },
      { name: 'PostgreSQL', logo: postgresLogo },
      { name: 'Prisma ORM', logo: prismaLogo },
      { name: 'Redis', logo: redisLogo },
    ],
  },
  {
    title: 'APIs',
    color: 'from-violet-700 to-fuchsia-700',
    skills: [
      { name: 'REST API', logo: restapiLogo },
      { name: 'GraphQL', logo: graphqlLogo },
      { name: 'WebSockets', logo: websocketLogo },
    ],
  },
  {
    title: 'Authentication & Security',
    color: 'from-purple-800 to-indigo-800',
    skills: [
      { name: 'JWT', logo: jwtLogo },
      { name: 'Zod', logo: zodLogo },
      { name: 'OAuth (Google/GitHub)', logo: githubLogo },
      { name: 'bcrypt.js', logo: bcryptLogo },
      { name: 'Helmet.js', logo: nodeLogo },
      { name: 'CORS', logo: corsLogo },
      { name: 'Rate Limiting', logo: nodeLogo },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-indigo-600 to-purple-800',
    skills: [
      { name: 'Postman', logo: postmanLogo },
      { name: 'Git / GitHub', logo: gitLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'CI/CD Pipelines', logo: cicdLogo },
      { name: 'Nginx / Apache', logo: nginxLogo },
      { name: 'AWS / Render / Vercel', logo: awsLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="relative bg-gradient-to-b from-black via-purple-950 to-black py-20 text-white flex flex-col items-center overflow-hidden"
      id="Skills"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-14 text-center drop-shadow-[0_0_25px_rgba(192,132,252,0.6)]"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl z-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl border border-purple-400/30 bg-gradient-to-br ${category.color} bg-opacity-20 shadow-[0_0_25px_rgba(192,132,252,0.25)] hover:shadow-[0_0_45px_rgba(192,132,252,0.6)] transition-all duration-500 backdrop-blur-sm`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold text-center text-purple-200 mb-5 border-b border-purple-300/40 pb-2">
              {category.title}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 mt-4">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  <div className="relative">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_10px_rgba(192,132,252,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-200 group-hover:text-white transition-all duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
