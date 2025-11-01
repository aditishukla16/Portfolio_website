import React, { useEffect, useState } from 'react';
import myimage from '../assets/myimage.jpg';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/nodejs.png';
import htmlLogo from '../assets/html.png';
import githubLogo from '../assets/git.png';
import vscodeLogo from '../assets/vscode.png';
import postgresLogo from '../assets/postgres.png';
import mongodbLogo from '../assets/mongodb.png';

const Header = () => {
  const logos = [reactLogo, nodeLogo, htmlLogo, githubLogo, vscodeLogo, postgresLogo, mongodbLogo];

  const [positions, setPositions] = useState([]);

  // Helper to generate non-overlapping positions
  const generatePositions = () => {
    const newPositions = [];
    const minDistance = 120; // Minimum distance between logos (in px, roughly)
    const maxAttempts = 100; // To avoid infinite loops

    for (let i = 0; i < logos.length; i++) {
      let position;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < maxAttempts) {
        // Keep logos away from central area (content zone)
        const top = Math.random() * 80 + 10; // 10%–90%
        const left = Math.random() * 80 + 10; // 10%–90%

        position = { top, left };
        valid = true;

        // Avoid central area (where text & profile image are)
        if (top > 30 && top < 70 && left > 35 && left < 65) valid = false;

        // Check distance from other logos
        for (const pos of newPositions) {
          const dx = (pos.left - left) * 10; // scale %
          const dy = (pos.top - top) * 10;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < minDistance) {
            valid = false;
            break;
          }
        }

        attempts++;
      }

      newPositions.push({
        top: `${position.top}%`,
        left: `${position.left}%`,
      });
    }

    return newPositions;
  };

  // Initialize positions
  useEffect(() => {
    setPositions(generatePositions());
  }, []);

  // Update positions every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(generatePositions());
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col items-center justify-start pt-16  text-center overflow-hidden">
      <h1 className="text-6xl text-white font-semibold mb-4 pt-16 z-10">
        Hi, I'm <span className="text-purple-300">Aditi Shukla</span>
      </h1>
      <p className="text-white text-4xl pt-3 mb-13 z-10">Full Stack Developer</p>

      <img
        src={myimage}
        alt="Aditi"
        className="w-48 h-48 object-cover rounded-full border-4 border-purple-400 shadow-lg z-10 border-4 border-purple-400 shadow-[0_0_25px_rgba(192,132,252,0.6)] hover:shadow-[0_0_40px_rgba(192,132,252,0.9)] transition-all duration-500 z-10"
      />

      {/* Floating animated logos */}
      {positions.length > 0 &&
        logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="absolute w-16 h-16 animate-float opacity-80"
            style={{
              top: positions[index].top,
              left: positions[index].left,
              transform: 'translate(-50%, -50%)',
              transition: 'all 3.5s ease-in-out',
              filter: 'drop-shadow(0 0 6px rgba(200, 200, 255, 0.25))', // subtle glow
            }}
          />
        ))}
    </div>
  );
};

export default Header;





