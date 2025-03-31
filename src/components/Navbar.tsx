import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleResumeDownload = () => {
    const fileId = '15dZK1Rzg-q4U0v9NiMwUeD7k1hLJ52ec';
    
    // Create an invisible anchor element
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Trigger click event
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-md" />
              <div className="relative bg-black p-2 rounded-xl">
                <Code size={24} className="text-white" />
              </div>
            </motion.div>
            <motion.span
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              whileHover={{ scale: 1.05 }}
            >
              Sidharth
            </motion.span>
          </Link>

          {/* Desktop Menu with Resume Button */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm font-medium ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                } transition-colors hover:text-white`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {/* Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-md" />
            <div className="relative bg-gray-900 p-2 rounded-lg border border-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Resume Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-sm font-medium ${
                        location.pathname === link.path
                          ? 'text-white'
                          : 'text-gray-400'
                      } hover:text-white transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Resume Download Button */}
                <motion.button
                  onClick={handleResumeDownload}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm w-full justify-center"
                >
                  <Download size={16} />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;