import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Sidharth70754', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sidharth-mehta-5a32a0249/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://x.com/SidharthMehta28', label: 'Twitter' },
    { icon: <Mail size={20} />, url: 'sidharthmeht2004@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative mt-32 bg-gradient-to-b from-transparent to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-md opacity-50" />
                <div className="relative bg-black p-2 rounded-xl">
                  <Code size={24} className="text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Sidharth
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting digital experiences that combine innovation with functionality. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-2 bg-gray-900 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors">
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Contact
            </h3>
            <div className="space-y-3 text-gray-400">
              <p>Email: sidharthmeht2004@gmail.com</p>
              <p>Phone: +91 7876677486</p>
              <p>Location: Chandigarh, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 flex items-center justify-center">
            Made with 
            <motion.span 
              className="mx-2 text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.span> 
            by Sidharth Mehta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;