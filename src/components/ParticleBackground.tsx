import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  // Generate random particles
  const generateParticles = useCallback(() => {
    const particles = [];
    const count = 50;
    
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particles.push({ x, y, size, duration, delay });
    }
    
    return particles;
  }, []);
  
  const particles = generateParticles();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-500 opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;