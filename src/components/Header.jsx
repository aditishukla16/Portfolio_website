import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myimage from "../assets/myimage.jpg";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/nodejs.png";
import htmlLogo from "../assets/html.png";
import githubLogo from "../assets/git.png";
import vscodeLogo from "../assets/vscode.png";
import postgresLogo from "../assets/postgres.png";
import mongodbLogo from "../assets/mongodb.png";
import dockerLogo from  "../assets/docker.png";
import redisLogo from  "../assets/redis.png"

const Header = () => {
  const logos = [
    reactLogo,
    nodeLogo,
    htmlLogo,
    githubLogo,
    vscodeLogo,
    postgresLogo,
    mongodbLogo,
    dockerLogo,
    redisLogo,
  ];

  const [positions, setPositions] = useState([]);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Random non-overlapping positions
  const generatePositions = () => {
    const newPositions = [];
    const minDistance = 120;
    const maxAttempts = 100;

    for (let i = 0; i < logos.length; i++) {
      let position;
      let valid = false;
      let attempts = 0;

      while (!valid && attempts < maxAttempts) {
        const top = Math.random() * 80 + 10;
        const left = Math.random() * 80 + 10;
        position = { top, left };
        valid = true;

        // Keep away from center
        if (top > 35 && top < 65 && left > 35 && left < 65) valid = false;

        // Keep apart
        for (const pos of newPositions) {
          const dx = pos.left - left;
          const dy = pos.top - top;
          const distance = Math.sqrt(dx * dx + dy * dy) * 10;
          if (distance < minDistance) valid = false;
        }
        attempts++;
      }

      newPositions.push({ top: `${position.top}%`, left: `${position.left}%` });
    }

    return newPositions;
  };

  useEffect(() => {
    setPositions(generatePositions());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(generatePositions());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Parallax
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 50;
    const y = (e.clientY - innerHeight / 2) / 50;
    setMouseOffset({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative bg-gradient-to-b from-black via-[#0a001a] to-black w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden" id="Header"
    >
      {/* Subtle animated background gradient ring */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-40"
        style={{
          width: "60vmin",
          height: "60vmin",
          background:
            "radial-gradient(circle, rgba(150,80,255,0.7) 0%, rgba(0,0,0,0)  70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating glowing logos */}
      {positions.length > 0 &&
        logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt={`tech-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 0.95,
              scale: [1, 1.08, 1],
              top: positions[i].top,
              left: positions[i].left,
              x: mouseOffset.x * ((i % 3) + 1) * 0.6,
              y: mouseOffset.y * ((i % 2) + 1) * 0.6,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-14 h-14 md:w-16 md:h-16 opacity-90 hover:opacity-100 hover:scale-115 transition-all duration-300 animate-glow"
            style={{
              transform: "translate(-50%, -50%)",
              filter:
                "drop-shadow(0 0 15px rgba(170,120,255,0.8)) brightness(1.1)",
              zIndex: 1,
            }}
          />
        ))}

      {/* Floating shimmer particles */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute bg-purple-400 rounded-full opacity-30"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-3 p-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-text-glow">
            Aditi Shukla
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Profile with subtle glow ring */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-60 animate-ringGlow"></div>
          <img
            src={myimage}
            alt="Aditi"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-400 shadow-[0_0_45px_rgba(168,85,247,0.8)] hover:shadow-[0_0_65px_rgba(192,132,252,1)] transition-all duration-500 object-cover"
          />
        </motion.div>
      </div>

      {/* Glow animations */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            filter: drop-shadow(0 0 10px rgba(180, 100, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 22px rgba(220, 140, 255, 0.9));
          }
          100% {
            filter: drop-shadow(0 0 10px rgba(180, 100, 255, 0.5));
          }
        }
        @keyframes textGlow {
          0% {
            text-shadow: 0 0 6px rgba(180, 120, 255, 0.6);
          }
          50% {
            text-shadow: 0 0 16px rgba(200, 130, 255, 1);
          }
          100% {
            text-shadow: 0 0 6px rgba(180, 120, 255, 0.6);
          }
        }
        @keyframes ringGlow {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.5;
          }
        }
        .animate-glow {
          animation: glowPulse 5s ease-in-out infinite;
        }
        .animate-ringGlow {
          animation: ringGlow 5s ease-in-out infinite;
        }
        .animate-text-glow {
          animation: textGlow 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;








