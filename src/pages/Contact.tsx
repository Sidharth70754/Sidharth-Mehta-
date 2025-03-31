import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sidharthmeht2004@gmail.com",
      link: "mailto:sidharthmeht2004@gmail.com",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7876677486",
      link: "tel:+917876677486",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chandigarh, India",
      link: "https://goo.gl/maps/...",
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/Sidharth70754", gradient: "from-gray-500/20 to-gray-700/20" },
    { icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/sidharth-mehta-5a32a0249/", gradient: "from-blue-500/20 to-cyan-500/20" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/SidharthMehta28", gradient: "from-cyan-500/20 to-blue-500/20" }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/store-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
              <AnimatedText 
            text="Get in Touch" 
            className="text-5xl md:text-6xl font-bold text-center mb-8"
              />
            
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
            >
            Have a project in mind? Let's work together to create something amazing.
            </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                {isSubmitted ? (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="text-green-500 text-5xl mb-4">✓</div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-gray-400">Your message has been sent successfully.</p>
                  </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white"
                        required
                      />
                    </div>
                    
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white"
                        required
                      />
                    </div>
                    
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white"
                        required
                      />
                    </div>
                    
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white resize-none"
                        required
                        rows={5}
                      />
                    </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-500 text-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 ${
                          isSubmitting 
                            ? 'bg-gray-700 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                            <span>Sending...</span>
                        </>
                      ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact cards */}
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="relative group block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </div>
                      </div>
                    </motion.a>
                  ))}

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                    href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative p-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 group-hover:border-gray-700 transition-all">
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                    </div>
                      </motion.a>
                    ))}
              </div>
            </motion.div>
          </div>
        </div>
      
        {/* Background Elements */}
          <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
          <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  );
};

export default Contact;