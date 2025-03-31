import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Database, Cpu, Globe, Layers, Cloud, Shield } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Express.js", "Python", "RESTful APIs"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      category: "Cloud Services",
      icon: <Cloud className="w-6 h-6" />,
      items: ["AWS", "Google Cloud", "Vercel", "Netlify"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["Figma", "Adobe XD", "Responsive Design", "User Research"],
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      category: "DevOps & Tools",
      icon: <Shield className="w-6 h-6" />,
      items: ["Git", "Docker", "CI/CD", "Agile Methodology"],
      gradient: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Chandigarh University",
      period: "2024 - Present",
      description: "Working on university projects using MERN stack. Developing and maintaining web applications with modern technologies.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Frontend Developer",
      company: "Freelance Projects",
      period: "2022 - 2023",
      description: "Created responsive websites and applications for various clients using React and modern frontend technologies.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      school: "Chandigarh University",
      period: "2022 - 2026",
      description: "Currently pursuing B.Tech with specialization in web development and software engineering. CGPA: 7.5",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="About Me" 
            className="text-5xl md:text-6xl font-bold text-center mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm Sidharth, a passionate full-stack developer based in Chandigarh, India. 
              I specialize in creating modern web applications that combine beautiful design with powerful functionality. 
              Currently pursuing my B.Tech in Computer Science, I'm always eager to learn and adapt to new technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all h-full">
                  <div className="text-white mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-400 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-500">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 group-hover:border-gray-700 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-400 mb-2">{edu.school} • {edu.period}</p>
                    <p className="text-gray-500">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl"
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

export default About;