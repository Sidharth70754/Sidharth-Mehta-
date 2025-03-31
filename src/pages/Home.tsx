import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Star, Palette, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import ParticleBackground from '../components/ParticleBackground';
import ChatBot from '../components/ChatBot';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive web applications with modern technologies",
      gradient: "from-[#4285F4]/20 to-[#0066FF]/20"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces",
      gradient: "from-[#7E4AF7]/20 to-[#2684FF]/20"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable server-side solutions",
      gradient: "from-[#2684FF]/20 to-[#4285F4]/20"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-0 relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Google Icon */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-10 top-32 hidden lg:block"
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-[#4285F4]/20 rounded-2xl blur-lg" />
            <div className="relative bg-[#4285F4]/10 backdrop-blur-sm p-4 rounded-2xl border border-[#4285F4]/20">
              <div className="w-16 h-16 bg-[#4285F4] rounded-xl flex items-center justify-center text-white text-3xl font-medium">
                G
              </div>
            </div>
          </div>
        </motion.div>

        {/* Netflix Icon */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-10 top-48 hidden lg:block"
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-black/20 rounded-2xl blur-lg" />
            <div className="relative bg-black/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                N
              </div>
            </div>
          </div>
        </motion.div>

        {/* Star/Plus Icon */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 bottom-32 hidden lg:block"
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-[#7E4AF7]/20 rounded-2xl blur-lg" />
            <div className="relative bg-[#7E4AF7]/10 backdrop-blur-sm p-3 rounded-2xl border border-[#7E4AF7]/20">
              <div className="w-14 h-14 bg-[#7E4AF7] rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">✦</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Game Controller Icon */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 top-24 hidden lg:block"
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-[#0066FF]/20 rounded-2xl blur-lg" />
            <div className="relative bg-[#0066FF]/10 backdrop-blur-sm p-3 rounded-2xl border border-[#0066FF]/20">
              <div className="w-14 h-14 bg-[#0066FF] rounded-xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Miro Icon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 bottom-24 hidden lg:block"
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-[#2684FF]/20 rounded-2xl blur-lg" />
            <div className="relative bg-[#2684FF]/10 backdrop-blur-sm p-3 rounded-2xl border border-[#2684FF]/20">
              <div className="w-14 h-14 bg-[#2684FF] rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6,8c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S6,9.1,6,8z M14,8c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S14,9.1,14,8z M6,16c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S6,17.1,6,16z M14,16c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S14,17.1,14,16z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="text-white mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 to-[#2684FF]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Updated Main Heading with better responsiveness */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Sidharth Mehta <br className="md:hidden" />
              <span className="bg-gradient-to-r from-[#4285F4] to-[#2684FF] bg-clip-text text-transparent">
                Developer & Innovator
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto px-4"
            >
              Full-stack developer specializing in creating exceptional digital experiences that combine innovation with functionality.
            </motion.p>
            
            {/* CTA Buttons with improved responsiveness */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 px-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4285F4] to-[#2684FF] text-white rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#4285F4]/20"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "#4285F4" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-[#2684FF]/30 rounded-2xl font-medium hover:bg-gray-800/50 transition-all duration-300 text-white"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced animated blobs with better performance */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[#4285F4]/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#2684FF]/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: 'transform' }}
        />
      </section>
      
      {/* Services Section with improved responsiveness */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4285F4] to-[#2684FF] bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I specialize in creating digital experiences that are both beautiful and functional.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-[#2684FF]/30 transition-all">
                  <div className="bg-[#4285F4]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4285F4]/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 relative overflow-hidden mb-0"
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#4285F4]/10 to-[#2684FF]/10 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-[#4285F4]/20 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ready to bring your ideas to life?</h2>
              <p className="text-gray-300 mb-8">
                Let's collaborate and create something amazing together. I'm always open to discussing new projects and opportunities.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#4285F4] to-[#2684FF] rounded-full font-medium text-white hover:shadow-lg hover:shadow-[#4285F4]/20 transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
};

export default Home;