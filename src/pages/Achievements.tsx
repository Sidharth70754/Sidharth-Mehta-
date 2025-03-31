import React, { useState } from 'react';
import sih from '../assets/images/sih.jpg';
import ieee from '../assets/images/ieee.jpg';
import zinnovation from '../assets/images/zinnovation.png';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, AlignCenterVertical as Certificate, Zap, BookOpen, Target, Upload, Image as ImageIcon, X } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "IEEE Excellence Award",
      description: "Received the prestigious IEEE Excellence Award for outstanding contributions in technical innovation and leadership",
      image: ieee,
      date: "2023",
      link: "https://www.ieee.org"
    },
    {
      id: 2,
      title: "Smart India Hackathon 2023",
      description: "Led a team of 6 to develop an innovative solution for healthcare accessibility",
      image: sih,
      date: "2023",
      link: "https://sih.gov.in"
    },
    {
      id: 3,
      title: "Z Innovation Award",
      description: "Awarded for innovative technical solution and presentation at the university's TechFest",
      image: zinnovation,
      date: "2023",
      link: "#"
    }
  ];

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

  const certifications = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Full Stack Development",
      issuer: "Meta",
      date: "2024",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "React Specialization",
      issuer: "Coursera",
      date: "2024",
      
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const skills = [
    {
      category: "Programming",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 }
      ],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 80 }
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed', icon: <Zap className="w-5 h-5 text-cyan-500" /> },
    { value: '30+', label: 'Certifications', icon: <Certificate className="w-5 h-5 text-purple-500" /> },
    { value: '15+', label: 'Awards', icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { value: '100+', label: 'Contributions', icon: <Star className="w-5 h-5 text-pink-500" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="Achievements & Skills" 
            className="text-5xl md:text-6xl font-bold text-center mb-8"
          />
          
          {/* Achievement Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#4285F4] to-[#2684FF] bg-clip-text text-transparent">
              Achievement Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 to-[#2684FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 group-hover:border-[#4285F4]/50 transition-all h-full">
                    {/* Achievement Image with Enhanced Styling */}
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                        <motion.img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          style={{ objectPosition: 'center' }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <Trophy className="w-5 h-5 text-[#4285F4]" />
                            <span className="text-sm text-white/90 font-medium">View Details</span>
                          </motion.div>
                        </div>
                      </div>
                    </a>

                    {/* Achievement Details with Enhanced Typography */}
                    <div className="space-y-3">
                      <motion.h3 
                        className="text-xl font-semibold text-white group-hover:text-[#4285F4] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {achievement.title}
                      </motion.h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-[#4285F4] font-medium">{achievement.date}</span>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-[#4285F4]/10 rounded-full flex items-center justify-center"
                        >
                          <Award className="w-5 h-5 text-[#4285F4]" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
          </motion.div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-white">{cert.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{cert.title}</h3>
                        <p className="text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{cert.credential}</p>
                    <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills with Progress Bars */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skillGroup.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                    <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-400">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      
          {/* Add a floating CTA at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mt-24"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
                <p className="text-gray-400 mb-6">I'm always open to discussing new projects and opportunities.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-medium"
                >
                  Get in Touch
                </motion.button>
          </div>
        </div>
          </motion.div>
        </div>

        {/* Enhanced Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#4285F4]/20 via-[#2684FF]/20 to-[#0066FF]/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#4285F4]/20 to-[#2684FF]/20 blur-3xl"
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

export default Achievements;