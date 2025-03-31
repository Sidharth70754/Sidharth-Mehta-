import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dtc from '../assets/images/DTC.png';
import mesage from '../assets/images/message.jpg';
import code from '../assets/images/ai.png';
import ecommerce from '../assets/images/ecomerce.jpeg';
import seat from '../assets/images/booking.png';
import games from '../assets/images/game.jpeg';
import { ExternalLink, Github, Code, Palette, Server } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projects = [
    {
      id: 1,
      title: 'Smart Urban Transit',
      description: 'Developed an intelligent transit system for urban areas, optimizing routes, schedules, and real-time tracking to enhance efficiency and reduce congestion.',
      image: dtc,
      technologies: ['React', 'Node.js', 'MongoDB', 'Maps API', 'Web Sockets'],
      demoLink: 'https://dtc-project.vercel.app/login',
      githubLink: 'https://github.com/Sidharth70754/DTC-Admin--Smart-Urban-Transit',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'Chat Application',
      description: 'Built a real-time chat application with secure messaging, user authentication, and a seamless UI/UX for instant communication.',
      image: mesage,
      technologies: ['React', 'NodeJs', 'MongoDB', 'Socket.io'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/Sidharth70754/Modern-Messaging-Dashboard-',
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'AI Code Reviewer',
      description: 'Designed an AI-powered code reviewer that analyzes and provides feedback on code quality, best practices, and potential errors using machine learning.',
      image: code,
      technologies: ['React', 'OpenAI API', 'Tailwind CSS'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/Sidharth70754/AI--Code-Reviewer',
      gradient: 'from-orange-500/20 to-red-500/20',
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Developed a full-featured e-commerce platform with product listings, shopping cart, secure payments, and user-friendly navigation for seamless online shopping.',
      image: ecommerce,
      technologies: ['React', 'NodeJs', 'JWT', 'MongoDB'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/Sidharth70754/E-Commerce',
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Movie Seat Booking',
      description: 'Created a responsive movie ticket booking system with real-time seat selection, booking confirmation, and secure payment integration.',
      image: seat,
      technologies: ['JavaScript', 'Tailwind CSS', 'React'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/Sidharth70754/Movie-Seat-Booking',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 6,
      title: '2048 Game',
      description: 'Designed and implemented the classic 2048 puzzle game with smooth animations and responsive controls, enhancing user engagement.',
      image: games,
      technologies: ['JavaScript', 'Tailwind CSS', 'React'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/Sidharth70754/2048-GAME-',
      gradient: 'from-indigo-500/20 to-violet-500/20',
      icon: <Palette className="w-6 h-6" />
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ y, opacity }}
            className="text-center mb-16"
          >
            <AnimatedText 
              text="Creative Projects" 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
            >
              A collection of innovative projects showcasing the intersection of technology and creativity.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card Content */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all h-full flex flex-col">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-gray-900/80 p-2 rounded-lg backdrop-blur-sm">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-800/50 rounded-full text-gray-400 hover:bg-gray-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
                      >
                        Code
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-600/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  );
};

export default Projects;